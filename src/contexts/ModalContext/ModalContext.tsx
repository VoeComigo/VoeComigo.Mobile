import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Modal, useModalController } from "../../hooks";
import { useLocation } from "react-router-dom";

type IModalStyles = "normal" | "ticket" | "bottom";
type IModalContextTypes = {
  setModalStyle: (e: IModalStyles) => void;
  setModalContent: (e: JSX.Element) => void;
  toggleModal: () => void;
};

const ModalContext = createContext<IModalContextTypes>({
  setModalStyle: function () {},
  setModalContent: function () {},
  toggleModal: function () {},
});

// Hook that export the modal context:
export const useModalContext = (
  modalStyle?: "normal" | "ticket" | "bottom"
) => {
  const context = useContext(ModalContext);
  useEffect(() => {
    modalStyle && context.setModalStyle(modalStyle);
  }, []);
  return context;
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
  useLayoutEffect(() => {
    closeModal();
  }, [location]);

  return (
    <ModalContext.Provider
      value={{
        toggleModal: toggleModal,
        setModalStyle: setModalType,
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

//  USAGE EXAMPLE:
// Modal context:
/*  const {toggleModal, setModalStyle, setModalContent} = useModalContext()
 useEffect(() => {
  setModalStyle('normal');
  setModalContent(<></>)
 }, []) */
