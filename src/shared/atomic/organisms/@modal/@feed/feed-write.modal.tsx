import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Modal } from "@/shared/atomic/atoms/@modal/modal";
import { Category } from "@/features/lounge/model/category.model";

interface FeedWriteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string, parentCategoryId: string, subCategoryId?: string, files?: File[]) => void | Promise<void>;
  parentCategories: Category[];
  allCategories: Category[];
  getSubCategories: (parentId: number) => Category[];
  isSubmitting?: boolean; // 추가
  submitButtonText?: string; // 추가
}

export function FeedWriteModal({
  isOpen,
  onClose,
  onSubmit,
  parentCategories,
  allCategories,
  getSubCategories,
  isSubmitting = false, // 기본값 설정
  submitButtonText = "작성하기", // 기본값 설정
}: Readonly<FeedWriteModalProps>) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedParentCategory, setSelectedParentCategory] = useState<string>("");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const subCategories = selectedParentCategory ? getSubCategories(Number(selectedParentCategory)) : [];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        titleInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // 상위 카테고리 변경 시 하위 카테고리 초기화
  useEffect(() => {
    setSelectedSubCategory("");
  }, [selectedParentCategory]);

  const handleClose = () => {
    // 제출 중일 때는 닫기 방지
    if (isSubmitting) {
      return;
    }

    const hasDraft = title.trim() || content.trim() || uploadedFiles.length > 0;
    if (hasDraft) {
      if (window.confirm("작성 중인 내용이 있습니다. 정말 취소하시겠습니까?")) {
        resetForm();
        onClose();
      }
    } else {
      onClose();
    }
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setSelectedParentCategory("");
    setSelectedSubCategory("");
    setUploadedFiles([]);
  };

  const handleSubmit = async () => {
    if (!title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }
    if (!content.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }
    if (!selectedParentCategory) {
      alert("카테고리를 선택해주세요.");
      return;
    }

    // onSubmit이 Promise를 반환하는 경우 await
    const result = onSubmit(title, content, selectedParentCategory, selectedSubCategory || undefined, uploadedFiles);

    // Promise인 경우 await하고, 성공 후에만 폼 리셋
    if (result instanceof Promise) {
      try {
        await result;
        resetForm();
      } catch (error) {
        // 에러는 상위 컴포넌트에서 처리
      }
    } else {
      resetForm();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="피드 작성" preventOutsideClick={true} size="large">
      <FormContainer>
        <CategoryContainer>
          <CategorySelect
            value={selectedParentCategory}
            onChange={e => setSelectedParentCategory(e.target.value)}
            required
            disabled={isSubmitting}
          >
            <option value="">카테고리를 선택하세요</option>
            {parentCategories.map(category => (
              <option key={category.identifier.uuid} value={category._id}>
                {category.name}
              </option>
            ))}
          </CategorySelect>

          {subCategories.length > 0 && (
            <CategorySelect value={selectedSubCategory} onChange={e => setSelectedSubCategory(e.target.value)} disabled={isSubmitting}>
              <option value="">하위 카테고리 선택 (선택사항)</option>
              {subCategories.map(category => (
                <option key={category.identifier.uuid} value={category._id}>
                  {category.name}
                </option>
              ))}
            </CategorySelect>
          )}
        </CategoryContainer>

        <TitleInput
          ref={titleInputRef}
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={e => setTitle(e.target.value)}
          maxLength={100}
          disabled={isSubmitting}
        />

        <ContentTextarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={e => setContent(e.target.value)}
          maxLength={5000}
          disabled={isSubmitting}
        />

        <CharacterCount>{content.length} / 5000</CharacterCount>

        <FileUploadSection>
          <FileUploadButton onClick={() => fileInputRef.current?.click()} disabled={isSubmitting}>
            파일 추가
          </FileUploadButton>
          <input ref={fileInputRef} type="file" multiple onChange={handleFileChange} style={{ display: "none" }} disabled={isSubmitting} />

          {uploadedFiles.length > 0 && (
            <FileList>
              {uploadedFiles.map((file, index) => (
                <FileItem key={index}>
                  <span>{file.name}</span>
                  <RemoveButton onClick={() => removeFile(index)} disabled={isSubmitting}>
                    ×
                  </RemoveButton>
                </FileItem>
              ))}
            </FileList>
          )}
        </FileUploadSection>

        <ButtonGroup>
          <CancelButton onClick={handleClose} disabled={isSubmitting}>
            취소
          </CancelButton>
          <SubmitButton onClick={handleSubmit} disabled={isSubmitting}>
            {submitButtonText}
          </SubmitButton>
        </ButtonGroup>
      </FormContainer>
    </Modal>
  );
}

// 스타일 컴포넌트들은 동일하나, disabled 상태 스타일 추가
const CategorySelect = styled.select<{ disabled?: boolean }>`
  flex: 1;
  min-width: 200px;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s;
  opacity: ${props => (props.disabled ? 0.6 : 1)};

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #f3f4f6;
  }
`;

const TitleInput = styled.input<{ disabled?: boolean }>`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s;
  opacity: ${props => (props.disabled ? 0.6 : 1)};

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #f3f4f6;
  }
`;

const ContentTextarea = styled.textarea<{ disabled?: boolean }>`
  width: 100%;
  min-height: 320px;
  padding: 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 15px;
  line-height: 1.6;
  resize: vertical;
  transition: all 0.2s;
  opacity: ${props => (props.disabled ? 0.6 : 1)};

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #f3f4f6;
  }

  @media (max-width: 768px) {
    min-height: 240px;
  }
`;

const FileUploadButton = styled.button<{ disabled?: boolean }>`
  padding: 8px 16px;
  background-color: #f3f4f6;
  color: #374151;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  opacity: ${props => (props.disabled ? 0.6 : 1)};

  &:hover:not(:disabled) {
    background-color: #e5e7eb;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const RemoveButton = styled.button<{ disabled?: boolean }>`
  background: none;
  border: none;
  color: #dc2626;
  font-size: 18px;
  cursor: pointer;
  padding: 4px 8px;
  opacity: ${props => (props.disabled ? 0.6 : 1)};

  &:hover:not(:disabled) {
    color: #b91c1c;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

// 나머지 스타일 컴포넌트들은 기존과 동일
const CategoryContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const FileUploadSection = styled.div`
  margin-top: 16px;
`;

const FileList = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FileItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background-color: #f9fafb;
  border-radius: 6px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CharacterCount = styled.div`
  text-align: right;
  color: #6b7280;
  font-size: 13px;
  margin-top: -8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 8px;
`;

const Button = styled.button`
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CancelButton = styled(Button)`
  background-color: #f3f4f6;
  color: #374151;

  &:hover:not(:disabled) {
    background-color: #e5e7eb;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #667eea;
  color: white;

  &:hover:not(:disabled) {
    background-color: #5a6fd6;
    transform: translateY(-1px);
  }
`;
