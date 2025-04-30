import { useSession } from "@/entities/auth/interface/auth-session.hooks";
import { useAnalyticsHook } from "@/entities/user/interface/profile.hooks";
import { Analytics } from "@/features/user/x/analytics.x-component"; // Analytics 컴포넌트 import 추가

export function AnalyticsComposer() {
  const { user } = useSession();
  const analytics = useAnalyticsHook({ userId: user?._id });

  return (
    <Analytics 
      totalViews={analytics.data?.totalViews} 
      profileRank={analytics.data?.profileRank} 
      appearance={analytics.data?.appearance} 
    />
  )
}
