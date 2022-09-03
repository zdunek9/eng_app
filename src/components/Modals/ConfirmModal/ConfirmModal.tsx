import React from "react";
import { ConfirmModalWrapper } from "./ConfirmModal.style";

const ConfirmModal: React.FC<{
  cancelHandler: () => void;
  confirmHandler: () => void;
  text: string;
}> = ({ cancelHandler, confirmHandler, text }) => {
  return (
    <ConfirmModalWrapper>
      <div>
        <p>{text}</p>
        <button onClick={() => confirmHandler()}>Ok</button>
        <button onClick={() => cancelHandler()}>Cancel</button>
      </div>
    </ConfirmModalWrapper>
  );
};

export default ConfirmModal;
