import { ReactNode, ReactElement } from "react";
import { FileText } from "lucide-react";
import { styled } from "styled-components";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { feedWriteModalAtom } from "@/shared/atomic/organisms/@modal/@feed/atoms";
import { FeedWriteModal } from "@/shared/atomic/organisms/@modal/@feed/feed-write.modal";
import { parentCategoriesAtom, categoriesListAtom, selectedCategoryAtom } from "@/features/lounge/adapter/category.adapter";
import { useMutationFeedRegisterHook, useMutationUploadFileHook } from "@/features/lounge/api/feed/feed.mutation.hook";
import { useFormData } from "@/shared/hooks/withForm";

interface FeedWriterButtonProps {
  children: ReactNode;
}

type FeedFormData = {
  title: string;
  content: string;
  categoryUuid: string;
  subCategoryUuid?: string;
  imageUrls?: string[];
};

export function FeedWriterButton({ children }: Readonly<FeedWriterButtonProps>): ReactElement {
  const [isModalOpen, setIsModalOpen] = useAtom(feedWriteModalAtom);
  const parentCategories = useAtomValue(parentCategoriesAtom);
  const allCategories = useAtomValue(categoriesListAtom);
  const setSelectedCategory = useSetAtom(selectedCategoryAtom);
  const navigate = useNavigate();

  const { createFormData } = useFormData<FeedFormData>();

  // Mutations
  const feedRegisterMutation = useMutationFeedRegisterHook();
  const uploadFileMutation = useMutationUploadFileHook();

  const getSubCategories = (parentId: number) => {
    return allCategories.filter(cat => {
      if (typeof cat.parent === "number") {
        return cat.parent === parentId;
      }
      if (cat.parent && typeof cat.parent === "object") {
        return cat.parent._id === parentId;
      }
      return false;
    });
  };

  const handleWriteEventSubmit = async (
    title: string,
    content: string,
    parentCategoryId: string,
    subCategoryId?: string,
    files?: File[],
  ) => {
    try {
      let uploadedFileUrls: string[] = [];

      // 1. 파일 업로드 (있는 경우)
      if (files && files.length > 0) {
        const uploadPromises = files.map(async file => {
          const fileFormData = new FormData();
          fileFormData.append("file", file);

          const uploadResult = await uploadFileMutation.mutateAsync(fileFormData);
          return uploadResult.data.fileUrl;
        });

        uploadedFileUrls = await Promise.all(uploadPromises);
      }

      // 2. 피드 생성
      const feedFormData = createFormData({
        title,
        content,
        categoryUuid: parentCategoryId,
        subCategoryUuid: subCategoryId,
        imageUrls: uploadedFileUrls,
      });

      if (subCategoryId) {
        feedFormData.append("subCategoryUuid", subCategoryId);
      }

      // 업로드된 파일 URL들을 추가
      uploadedFileUrls.forEach((url, index) => {
        feedFormData.append(`imageUrls[${index}]`, url);
      });

      console.log("피드 작성 요청:", {
        title,
        content,
        parentCategoryId,
        subCategoryId,
        uploadedFileUrls,
      });

      const result = await feedRegisterMutation.mutateAsync(feedFormData);

      console.log("피드 작성 성공:", result);
      setIsModalOpen(false);

      // 3. 생성된 피드로 이동 (옵션)
      if (result.data?.identifier?.uuid) {
        navigate(`/lounge/feed/${result.data.identifier.uuid}`);
      }
    } catch (error) {
      console.error("피드 작성 실패:", error);
      alert("피드 작성에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  // 버튼 비활성화 조건: 파일 업로드 중이거나 피드 생성 중일 때
  const isButtonDisabled = uploadFileMutation.isPending || feedRegisterMutation.isPending;

  return (
    <>
      <WriteButton onClick={() => setIsModalOpen(true)} disabled={isButtonDisabled}>
        <FileText size={16} />
        {children}
      </WriteButton>

      <FeedWriteModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleWriteEventSubmit}
        parentCategories={parentCategories}
        allCategories={allCategories}
        getSubCategories={getSubCategories}
        isSubmitting={uploadFileMutation.isPending || feedRegisterMutation.isPending}
        submitButtonText={
          uploadFileMutation.isPending ? "파일 업로드 중..." : feedRegisterMutation.isPending ? "피드 작성 중..." : "작성하기"
        }
      />
    </>
  );
}

export const WriteButton = styled.button<{ disabled?: boolean }>`
  padding: 10px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  pointer-events: ${props => (props.disabled ? "none" : "auto")};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;
