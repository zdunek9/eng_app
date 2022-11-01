import React, { useEffect, useState } from "react";
import { Blur, Message } from "./TurnstileModal.style";
import Turnstile from "react-turnstile";
import LoadingSmall from "../LoadingSmall/LoadingSmall";

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
    confirmTurnstile(confirmPass);
    return <LoadingSmall />;
  }
  function buttonHandler() {
    closeModal(false);
    confirmTurnstile(true);
  }
  function TurnstilewWidget() {
    return (
      <Turnstile
        sitekey={TURNSTILE_TOKEN}
        onVerify={() => setTimeout(autoLogin, 1000)}
      />
    );
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
