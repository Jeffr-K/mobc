import { useMutation } from "@tanstack/react-query";
import { ApiResponse } from "@/shared/utils/apiResponse";
import { Persona, Profile } from "@/features/user/core/model/profile.model";
import { updateProfilePersona } from "@/features/user/infrastructure/adapter/api/profile.api";

export const useProfileMutation = () => {};

export const useProfilePersonaPatchMutation = () => {
  return useMutation<ApiResponse<Pick<Profile, "uuid">>, Error, Partial<Persona>>({
    mutationFn: formData => updateProfilePersona(formData),
    meta: {
      errorMessage: "프로필을 수정하는 중 오류가 발생했습니다",
      successMessage: "프로필이 성공적으로 수정되었습니다",
    },
  });
};

/**
 * 프로필 > Personal
 */
export const useProfilePersonalPatchMutation = () => {
  return useMutation<ApiResponse<Pick<Profile, "uuid">>, Error, Pick<Persona, "personal">>({
    mutationFn: formData => updateProfilePersona(formData),
    meta: {
      errorMessage: "개인 정보를 수정하는 중 오류가 발생했습니다",
      successMessage: "개인 정보가 성공적으로 수정되었습니다",
    },
  });
};

/**
 * 프로필 > Location
 */
export const useProfileLocationPatchMutation = () => {
  return useMutation<ApiResponse<Pick<Profile, "uuid">>, Error, Pick<Persona, "location">>({
    mutationFn: formData => updateProfilePersona(formData),
    meta: {
      errorMessage: "활동 정보를 수정하는 중 오류가 발생했습니다",
      successMessage: "활동 정보가 성공적으로 수정되었습니다",
    },
  });
};

/**
 * 프로필 > Identity
 */
export const useProfileIdentityPatchMutation = () => {
  return useMutation<ApiResponse<Pick<Profile, "uuid">>, Error, Pick<Persona, "identity">>({
    mutationFn: formData => updateProfilePersona(formData),
    meta: {
      errorMessage: "기술 스택을 수정하는 중 오류가 발생했습니다",
      successMessage: "기술 스택이 성공적으로 수정되었습니다",
    },
  });
};

/**
 * 프로필 > Contact
 */
export const useProfileContactPatchMutation = () => {
  return useMutation<ApiResponse<Pick<Profile, "uuid">>, Error, Pick<Persona, "contact">>({
    mutationFn: formData => updateProfilePersona(formData),
    meta: {
      errorMessage: "연락처를 수정하는 중 오류가 발생했습니다",
      successMessage: "연락처가 성공적으로 수정되었습니다",
    },
  });
};

// export const useProfileSkillPatchMutation = () => {};

// export const useProfileEducationRegisterMutation = () => {};
// export const useProfileEducationPatchMutation = () => {};
// export const useProfileEducationDeleteMutation = () => {};

// export const useProfileExperienceRegisterMutation = () => {};
// export const useProfileExperiencePatchMutation = () => {};
// export const useProfileExperienceDeleteMutation = () => {};

// export const useProfileGarageRegisterMutation = () => {};
// export const useProfileGaragePatchMutation = () => {};
// export const useProfileGarageDeleteMutation = () => {};

// export const useProfileActivityRegisterMutation = () => {};
// export const useProfileActivityPatchMutation = () => {};
// export const useProfileActivityDeleteMutation = () => {};
