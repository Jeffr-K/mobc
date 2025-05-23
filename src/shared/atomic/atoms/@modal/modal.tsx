import React, { useEffect } from "react";
import * as S from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  preventOutsideClick?: boolean;
  size?: "small" | "medium" | "large";
  onBeforeClose?: () => boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  preventOutsideClick = false,
  size = "medium", // 기본값은 기존 440px 크기
  onBeforeClose,
}: ModalProps) => {
  // ESC 키 핸들링 및 스크롤 잠금
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    if (onBeforeClose && !onBeforeClose()) {
      return;
    }
    onClose();
  };

  const handleOverlayClick = () => {
    if (!preventOutsideClick) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <S.Overlay onClick={handleOverlayClick}>
      <S.ModalContainer
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: size === "large" ? "720px" : size === "small" ? "400px" : "440px" }}
      >
        <S.CloseButton onClick={handleClose}>✕</S.CloseButton>
        {title && <h2>{title}</h2>}
        {children}
      </S.ModalContainer>
    </S.Overlay>
  );
};
