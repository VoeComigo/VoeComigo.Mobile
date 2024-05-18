import { createContext, useContext, useEffect, useState } from "react";
import { Modal, useModalController } from "../../hooks";
import { useLocation } from "react-router-dom";

type IModalStyles = "normal" | "ticket" | "bottom";
type IModalContextTypes = {
  onChangeStyle: (e: IModalStyles) => void;
  setModalContent: (e: JSX.Element) => void;
  toggleModal: () => void;
};

const ModalContext = createContext<IModalContextTypes>({
  onChangeStyle: function () {},
  setModalContent: function () {},
  toggleModal: function () {},
});

// Hook that export the modal context:
export const useModalContext = () => {
  return useContext(ModalContext);
};

// Actual context:
export const ModalContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  //  Modal controller:
  const { toggleModal, closeModal, controller } = useModalController();

  // Modal state handlers:
  const [modalType, setModalType] = useState<IModalStyles>("normal");
  const [modalContent, setModalContent] = useState<JSX.Element>(<></>);

  //  Tracking page change:
  let location = useLocation();
  useEffect(() => {
    closeModal();
  }, [location]);

  return (
    <ModalContext.Provider
      value={{
        toggleModal: toggleModal,
        onChangeStyle: setModalType,
        setModalContent: setModalContent,
      }}
    >
      <Modal contentStyle={modalType} {...controller}>
        {modalContent}
      </Modal>
      {children}
    </ModalContext.Provider>
  );
};
