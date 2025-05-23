import { atomWithQuery } from "jotai-tanstack-query";
import { fetchProfile, fetchProfilePersona } from "@/features/user/infrastructure/adapter/api/profile.api";
import { QueryKeys } from "@/features/user/infrastructure/adapter/querykey/profile.query-keys";

// export const ProfilesParamsAtom = atom({});
// export const ProfilesAtom = atomWithQuery(get => {
//   const params = get(ProfilesParamsAtom);
//
//   return {
//     queryKey: [QueryKeys.profile.me, params],
//     queryFn: fetchProfile(),
//     staleTime: 1000 * 60 * 5,
//     gcTime: 1000 * 60 * 30,
//     refetchOnMount: true,
//     refetchOnWindowFocus: true,
//   };
// });

/**
 * This atom is used to fetch the profile data.
 */
export const profileAtom = atomWithQuery(() => {
  return {
    queryKey: [QueryKeys.profile.me],
    queryFn: fetchProfile,
    meta: {
      errorMessage: "Error fetching profile",
      successMessage: "Profile fetched successfully",
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  };
});

export const profilePersonaAtom = atomWithQuery(() => {
  return {
    queryKey: [QueryKeys.profile.persona],
    queryFn: fetchProfilePersona,
    meta: {
      errorMessage: "Error fetching profile persona",
      successMessage: "Profile persona fetched successfully",
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  };
});
