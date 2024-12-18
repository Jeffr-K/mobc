import { useState } from "react";

import { ProfileLayout } from "@/atomic/template/@layout/@profile";

export function ProfilePage() {
  const [isEdit, setIsEdit] = useState(false);
  
  return (
    <ProfileLayout />
  );
}

