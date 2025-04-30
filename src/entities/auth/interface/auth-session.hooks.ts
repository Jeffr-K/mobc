import useLocalStorage from "@/shared/helper/use-local-storage";
import { User } from "../../user/lib/types/user.types";

export const useSession = () => {
  const [user, setUser] = useLocalStorage<User | null>(
    'user',
    null,
  );

  return {
    user,
    // setUser,
    // userId: user?._id
  };
};
