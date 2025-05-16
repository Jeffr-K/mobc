import { Observable, of, forkJoin, EMPTY } from "rxjs";
import { switchMap, map, catchError, tap } from "rxjs/operators";
import { NavigateFunction } from "react-router-dom";

interface FeedInput {
  title: string;
  content: string;
  parentCategoryId: string;
  subCategoryId?: string;
  files?: File[];
  fileUrls?: string[];
}

type AccessTokenCheckResult = {
  isValid: boolean;
  feedInput: FeedInput;
};

export const feedRegisterEventHandler = {
  /**
   * 접근 토큰 유효성 검사를 위한 RxJS 연산자 함수
   * @param authService 인증 서비스 객체
   * @param openLoginModal 로그인 모달 열기 함수
   */
  checkAccessToken: (authService: { hasToken(): boolean }, openLoginModal: () => void) => {
    return switchMap((feedInput: FeedInput) => {
      return new Observable<AccessTokenCheckResult>(subscriber => {
        const hasToken = authService.hasToken();
        if (hasToken) {
          subscriber.next({ isValid: true, feedInput });
          subscriber.complete();
        } else {
          openLoginModal();
          subscriber.next({ isValid: false, feedInput });
          subscriber.complete();
        }
      });
    });
  },

  /**
   * 토큰 유효성 결과에 따라 계속 진행할지 종료할지 결정하는 연산자
   */
  continueIfValidToken: () => {
    return switchMap((result: AccessTokenCheckResult) => {
      if (result.isValid) {
        return of(result.feedInput);
      }

      return EMPTY;
    });
  },

  /**
   * 파일 업로드 처리를 위한 RxJS 연산자 함수
   * @param createFileFormData FormData 생성 함수
   * @param uploadMutation 파일 업로드 뮤테이션
   */
  uploadFiles: (createFileFormData: (data: { file: File }) => FormData, uploadMutation: any) => {
    return switchMap((input: FeedInput) => {
      if (!input.files || input.files.length === 0) {
        return of({ ...input, fileUrls: [] });
      }

      return forkJoin(
        input.files.map(file => {
          const fileFormData = createFileFormData({ file });
          return new Observable(subscriber => {
            uploadMutation
              .mutateAsync(fileFormData)
              .then(result => {
                subscriber.next(result.data.fileUrl);
                subscriber.complete();
              })
              .catch(err => {
                subscriber.error(err);
              });
          });
        }),
      ).pipe(map(fileUrls => ({ ...input, fileUrls })));
    });
  },

  /**
   * 피드 등록 처리를 위한 RxJS 연산자 함수
   * @param createFormData FormData 생성 함수
   * @param registerMutation 피드 등록 뮤테이션
   */
  registerFeed: (createFormData: (data: any) => FormData, registerMutation: any) => {
    return switchMap((input: FeedInput) => {
      const categoryUuid = input.subCategoryId || input.parentCategoryId;

      console.log("카테고리 UUID:", categoryUuid);

      const feedFormData = createFormData({
        title: input.title,
        content: input.content,
        categoryUuid: input.subCategoryId || input.parentCategoryId,
        images: input.fileUrls,
      });

      return new Observable(subscriber => {
        registerMutation
          .mutateAsync(feedFormData)
          .then(result => {
            subscriber.next(result);
            subscriber.complete();
          })
          .catch(err => {
            subscriber.error(err);
          });
      });
    });
  },

  /**
   * 성공 처리를 위한 RxJS 연산자 함수
   * @param setIsModalOpen 모달 상태 설정 함수
   * @param navigate 라우팅 네비게이션 함수
   */
  handleSuccess: (setIsModalOpen: (isOpen: boolean) => void, navigate: NavigateFunction) => {
    return tap((result: any) => {
      setIsModalOpen(false);

      if (result.data?.identifier?.uuid) {
        navigate(`/lounge/feed/${result.data.identifier.uuid}`);
      }
    });
  },

  /**
   * 에러 처리를 위한 RxJS 연산자 함수
   */
  handleError: () => {
    return catchError(error => {
      console.error("피드 작성 실패:", error);
      alert("피드 작성에 실패했습니다. 다시 시도해주세요.");
      return EMPTY;
    });
  },
};
