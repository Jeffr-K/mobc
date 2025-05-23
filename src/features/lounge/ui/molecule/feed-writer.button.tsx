import { ReactNode, ReactElement } from "react";
import { FileText } from "lucide-react";
import { styled } from "styled-components";
import { of, pipe } from "rxjs";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { feedWriteModalAtom } from "@/shared/atomic/organisms/@modal/@feed/atoms";
import { FeedWriteModal } from "@/shared/atomic/organisms/@modal/@feed/feed-write.modal";
import {
  parentCategoriesAtom,
  categoriesListAtom,
  selectedCategoryAtom,
  childCategoriesAtom,
} from "@/features/lounge/infrastructure/adapter/category.adapter";
import { useMutationFeedRegisterHook, useMutationUploadFileHook } from "@/features/lounge/infrastructure/api/feed/feed.mutation.hook";
import { feedRegisterEventHandler as handler } from "@/features/lounge/service/feed.service";
import { useFormData } from "@/shared/hooks/withForm";
import { useLoginModalHook } from "@/entities/auth/hook/useLoginModalHook";
import { authService } from "@/entities/auth/service/auth.service";
import { useQueryClient } from "@tanstack/react-query";

interface FeedWriterButtonProps {
  children: ReactNode;
}

type FeedFormData = {
  title: string;
  content: string;
  categoryUuid: string;
  images?: string[];
};

export function FeedWriterButton({ children }: Readonly<FeedWriterButtonProps>): ReactElement {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useAtom(feedWriteModalAtom);
  const parentCategories = useAtomValue(parentCategoriesAtom);
  const childCategories = useAtomValue(childCategoriesAtom);
  const allCategories = useAtomValue(categoriesListAtom);
  const setSelectedCategory = useSetAtom(selectedCategoryAtom);

  const { createFormData } = useFormData<FeedFormData>();
  const { createFormData: createFileFormData } = useFormData<{ file: File }>();

  const feedRegisterMutation = useMutationFeedRegisterHook();
  const { mutation: uploadFileMutation } = useMutationUploadFileHook();
  const { openLoginModal } = useLoginModalHook();

  const pipeline = pipe(
    handler.checkAccessToken(authService, openLoginModal),
    handler.continueIfValidToken(),
    handler.uploadFiles(createFileFormData, uploadFileMutation),
    handler.registerFeed(createFormData, feedRegisterMutation),
    handler.handleSuccessWithInvalidation(setIsModalOpen, navigate, queryClient),
    handler.handleError(),
  );

  const handleWriteEventSubmit = async (
    title: string,
    content: string,
    parentCategoryId: string,
    subCategoryId?: string,
    files?: File[],
  ) => {
    of({ title, content, parentCategoryId, subCategoryId, files }).pipe(pipeline).subscribe();
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <>
      <WriteButton onClick={() => setIsModalOpen(true)} disabled={uploadFileMutation.isPending || feedRegisterMutation.isPending}>
        <FileText size={16} />
        {children}
      </WriteButton>

      <FeedWriteModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleWriteEventSubmit}
        parentCategories={parentCategories}
        allCategories={allCategories}
        childCategories={childCategories}
        isSubmitting={uploadFileMutation.isPending || feedRegisterMutation.isPending}
        submitButtonText={(() => {
          if (uploadFileMutation.isPending) return "파일 업로드 중...";
          if (feedRegisterMutation.isPending) return "피드 작성 중...";
          return "작성하기";
        })()}
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
