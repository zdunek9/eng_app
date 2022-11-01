import React, { useEffect, useState } from "react";
import { Blur, Message } from "./TurnstileModal.style";
import Turnstile from "react-turnstile";

const TURNSTILE_TOKEN = `${process.env.REACT_APP_TURNSTILE_TOKEN}`;

const TurnstileModal: React.FC<{
  confirmTurnstile: (confirmPass: boolean) => void;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ confirmTurnstile, closeModal }) => {
  let confirmPass = false;
  if (confirmPass) {
    buttonHandler();
  }
  function autoLogin() {
    confirmPass = true;
    closeModal(false);
    confirmTurnstile(confirmPass);
  }
  function buttonHandler() {
    closeModal(false);
    confirmTurnstile(confirmPass);
  }
  function TurnstilewWidget() {
    return <Turnstile sitekey={TURNSTILE_TOKEN} onVerify={autoLogin} />;
  }

  return (
    <Blur>
      <Message>
        <div>{TurnstilewWidget()}</div>
        <button onClick={() => buttonHandler()}>ok</button>
      </Message>
    </Blur>
  );
};

export default TurnstileModal;
