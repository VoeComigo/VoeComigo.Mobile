import { useState } from "react";

export const useModalController = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpen((item) => !item);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openCallback = (e: boolean) => {
    setIsOpen(e);
  };

  return { toggleModal, closeModal, controller: { openCallback, isOpen } };
};
