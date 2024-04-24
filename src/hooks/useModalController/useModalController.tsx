import { useState } from "react";

export const useModalController = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const openCallback = (e: boolean) => {
    setIsOpen(e);
  };

  return { toggleModal, controller: { openCallback, isOpen } };
};
