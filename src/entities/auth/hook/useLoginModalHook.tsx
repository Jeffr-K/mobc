import { atom, useAtom, useAtomValue } from "jotai";
import { useCallback } from "react";

export const loginModalOpenAtom = atom<boolean>(false);

export const loginLoadingAtom = atom<boolean>(false);

export const useLoginModalHook = () => {
  const [isOpen, setIsOpen] = useAtom(loginModalOpenAtom);
  const isLoading = useAtomValue(loginLoadingAtom);

  const openLoginModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const closeLoginModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return {
    isOpen,
    isLoading,
    openLoginModal,
    closeLoginModal,
  };
};
