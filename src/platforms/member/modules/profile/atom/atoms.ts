import { atom, useAtom } from "jotai";
import { Analytics, Introduction } from "../api/types";

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

export const useIntroductionStore = () => {
  const [introduction, setIntroduction] = useAtom(introductionAtom);

  return {
    introduction,
    setIntroduction: (data: Introduction) => setIntroduction(data),
  }
}