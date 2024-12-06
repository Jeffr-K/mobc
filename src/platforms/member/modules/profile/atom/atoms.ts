import { atom, useAtom } from "jotai";
import { Analytics, Profile } from "../api/types";

export const analyticsAtom = atom({
  totalViews: 0,
  profileRank: 0,
  appearance: 0,
});

export const useAnalyticsStore = () => {
  const [analytics, setAnalytics] = useAtom(analyticsAtom);

  return {
    analytics,
    setAnalytics: (data: Analytics) => setAnalytics(data),
    resetAnalytics: () => setAnalytics({ totalViews: 0, profileRank: 0, appearance: 0 }),
  }
}

export const introductionAtom = atom({
  nickname: '',
  status: '',
  cave: '',
  location: '',
  summary: '',
  persona: '',
  identity: '',
  interest: '',
});

export const profileAtom = atom<Profile | null>(null);

export const useProfileStore = () => {
  const [profile, setProfile] = useAtom(profileAtom);
  
  return {
    profile,
    setProfile
  };
};