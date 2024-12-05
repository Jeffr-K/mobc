import { useState } from "react";

import { ProfileLayout } from "@/atomic/templates/@layout/@profile";

export function ProfilePage() {
  const [isEdit, setIsEdit] = useState(false);
  
  return (
    <ProfileLayout />
  );
}

