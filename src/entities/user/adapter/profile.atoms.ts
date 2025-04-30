import { atom, useAtom } from 'jotai';
import { Activity, Analytics, Experience, Garage, Profile } from '../model/profile.model';


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
  };
};

export const profileAtom = atom<Profile | null>(null) as unknown as ReturnType<
  typeof atom<Profile | null>
>;

export const useProfileStore = () => {
  const [profile, setProfile] = useAtom(profileAtom);

  return {
    profile,
    setProfile: (data: Profile) => setProfile(data),
  };
};

export const experiencesAtom = atom<Experience[] | null>(null) as unknown as ReturnType<typeof atom<Experience[] | null>>;
export const useProfileExperiencesStore = () => {
  const [experiences, setExperiences] = useAtom(experiencesAtom);

  return {
    experiences,
    setExperiences: (data: Experience[]) => setExperiences(data),
  };
};

export const activitiesAtom = atom<Activity[] | null>(null) as unknown as ReturnType<typeof atom<Activity[] | null>>;
export const useProfileActivitiesStore = () => {
  const [activities, setActivities] = useAtom(activitiesAtom);

  return {
    activities,
    setActivities: (data: Activity[]) => setActivities(data),
  };
};

export const garageAtom = atom<Garage[] | null>(null) as unknown as ReturnType<typeof atom<Garage[] | null>>;
export const useProfileGarageStore = () => {
  const [garages, setGarages] = useAtom(garageAtom);

  return {  
    garages,
    setGarages: (data: Garage[]) => setGarages(data),
  };
};