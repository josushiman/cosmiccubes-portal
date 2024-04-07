import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const switchModal = () => setIsModalOpen(!isModalOpen);

  console.debug(isModalOpen);

  return (
    <ModalContext.Provider
      value={{ isModalOpen, openModal, closeModal, switchModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
