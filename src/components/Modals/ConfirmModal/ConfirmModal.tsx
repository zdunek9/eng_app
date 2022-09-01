import React from "react";
import { ConfirmModalWrapper } from "./ConfirmModal.style";

const ConfirmModal: React.FC<{
  cancelHandler: () => void;
  confirmHandler: () => void;
}> = ({ cancelHandler, confirmHandler }) => {
  return (
    <ConfirmModalWrapper>
      <div>
        <p>
          Are you sure you want to change your email address. <br />
          You will be logged out
        </p>
        <button onClick={() => confirmHandler()}>Ok</button>
        <button onClick={() => cancelHandler()}>Cancel</button>
      </div>
    </ConfirmModalWrapper>
  );
};

export default ConfirmModal;
