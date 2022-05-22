import React from 'react';
import ReactDOM from 'react-dom';
import { ModalContext } from '../context';


const ModalPotal = (props) => {
  const element = document.getElementById("app-modal");
  let { modalContent, handleModal, modal } = React.useContext(ModalContext);
  if (modal) {
    return ReactDOM.createPortal(
      <React.Fragment>
        <div className="modal">
          <div className="modal-content" style={modalContent.props.style}>
            {modalContent}
          </div>
        </div>
      </React.Fragment>,
      element
    );
  } else return null;
};

export default ModalPotal;