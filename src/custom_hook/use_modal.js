import React from 'react';

export default function useModal () {
  const [modal, setModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState("I'm the Modal Content");

  let handleModal = (content = false) => {
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  };

  let closeModal = (content = false) => {
    setModal(false);
    setModalContent(content);
  };

  let openModal = (content = false) => {
    setModal(true);
    if (content) {
      setModalContent(content);
    }
  };

  return { modal, handleModal, openModal, closeModal, modalContent };
};