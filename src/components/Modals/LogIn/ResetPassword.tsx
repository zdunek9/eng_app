import axios from "axios";
import React, { useState } from "react";
import { AiFillWarning } from "react-icons/ai";
import LoadingSmall from "../LoadingSmall/LoadingSmall";
import { ErrorMsgForgotPwd } from "./Login.style";

const MAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const URL_RESET = `${process.env.REACT_APP_RESET_PWD}`;

function ResetPassword() {
  const [sendStatus, setSendStatus] = useState<[boolean, string]>([true, ""]);
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const [resetEmail, setResetEmail] = useState<string>("");
  const resetPassword = async (event: React.FormEvent) => {
    event.preventDefault();
    setSendStatus([false, ""]);
    setLoadingState(true);
    if (resetEmail.trim() === "" || !MAIL_REGEX.test(resetEmail)) {
      setSendStatus([false, "Incorrect email"]);
      setLoadingState(false);
      return;
    }
    try {
      const response = await axios.post(URL_RESET, {
        requestType: "PASSWORD_RESET",
        email: resetEmail,
      });
      if (response.status === 200) {
        setSendStatus([
          true,
          "Restart instructions sent successfully. Check your email.",
        ]);
      }
    } catch (err: any) {
      if (err.response.data.error.message === "EMAIL_NOT_FOUND") {
        setSendStatus([
          false,
          "We could not find your email address. Please check and try again",
        ]);
      } else {
        setSendStatus([false, "Something went wrong, try again"]);
      }
    }
    setLoadingState(false);
  };

  const restorePasswordFunc = (value: string) => {
    setResetEmail(value);
    setSendStatus([true, ""]);
  };

  return (
    <>
      {loadingState && <LoadingSmall />}
      {!loadingState && (
        <form onSubmit={resetPassword}>
          <ErrorMsgForgotPwd>
            <input
              placeholder="Your email address:"
              className={sendStatus[0] ? "" : "errorInput"}
              type="text"
              maxLength={40}
              autoComplete="off"
              onChange={(e) => restorePasswordFunc(e.target.value)}
              value={resetEmail}
            />
            {!sendStatus[0] && <AiFillWarning />}
            <div className={sendStatus[0] ? "success" : ""}>
              {sendStatus[1]}
            </div>
          </ErrorMsgForgotPwd>
          <button>Send me new password !</button>
        </form>
      )}
    </>
  );
}

export default ResetPassword;
