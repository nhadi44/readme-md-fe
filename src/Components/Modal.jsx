/* eslint-disable react/prop-types */
import { Modal } from "react-daisyui";

export const ModalComponent = ({ isOpen, clickBackdrop, modalWidth, closeModal, content }) => {
  return (
    <Modal open={isOpen} onClick={clickBackdrop} className={modalWidth}>
      <Modal.Header className="font-bold flex justify-end">
        <div className="hover:cursor-pointer" onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </Modal.Header>

      <Modal.Body>{content}</Modal.Body>
    </Modal>
  );
};
