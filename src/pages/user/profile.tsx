import { useState } from "react";

import { ProfileLayout } from "./profile.page-layout";
import { AnalyticsComposer } from "@/composition/user/analytics.composer";
import { ProfilePersona } from "@/composition/user/persona.composer";
import { SkillComposer } from "@/composition/user/skill.composer";
// import { SpotLightComposer } from "@/composition/user/spot-light.composer";
import { GarageComposer } from "@/composition/user/garage.composer";
import { SuggestionComposer } from "@/composition/user/suggestion.composer";

export function ProfilePage() {
  const [isEdit, setIsEdit] = useState(false);
  
  // TODO: 만약 최초 부트스트랩이거나 세션이 없으면 메인페이지 + 로그인 모달이 뜨도록 구현
  return (
    <ProfileLayout>
      <ProfileLayout.LeftSidebar>
        <AnalyticsComposer />
    </ProfileLayout.LeftSidebar>
      
    <ProfileLayout.Main>
      <ProfilePersona />
      <SkillComposer />
    </ProfileLayout.Main>
      
    //   {/* <ProfileLayout.RightSidebar> */}
    //     {/* <SpotLightComposer /> */}  
    //     {/* <SuggestionComposer /> */}
    //   {/* </ProfileLayout.RightSidebar> */}
    </ProfileLayout>
  );
}

