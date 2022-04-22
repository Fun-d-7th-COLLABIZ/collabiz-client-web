import React from 'react';
import { DataAuth } from './components/data';
import useModal from './custom_hook/use_modal';
import ModalPortal from './components/modal_portal';

let ModalContext;
let { Provider } = ( ModalContext = React.createContext());

let ModalProvider = ({ children }) => {
  let { modal, handleModal, openModal, closeModal, modalContent } = useModal();
  return (
    <Provider value={{ modal, handleModal, openModal, closeModal, modalContent }}>
      <ModalPortal />
      {children}
    </Provider>
  );
};

export {
  ModalContext, ModalProvider
}