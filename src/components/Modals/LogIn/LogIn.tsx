import { useEffect, useReducer, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../../Store/authSlice";
import { Wrapper } from "./Login.style";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import LoadingSmall from "../LoadingSmall/LoadingSmall";
import { reducer } from "./LoginReducer";
import TurnstileModal from "../Turnstile/TurnstileModal";

const MAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const URL_LOGIN = `${process.env.REACT_APP_AUTH}`;
const URL_RESET = `${process.env.REACT_APP_RESET_PWD}`;

const LoginTest: React.FC = () => {
  const [state, dispatchReducer] = useReducer(reducer, {
    user: "",
    pwd: "",
    errMsg: "",
    resetEmail: "",
    showResetPwd: false,
    sendStatus: "",
    loadingState: false,
  });
  const [openTurnstileModal, setOpenTurnstileModal] = useState<boolean>(false);

  const userRef: any = useRef();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    dispatchReducer({ type: "setErrMsg", payload: "" });
  }, [state.user, state.pwd]);

  async function setConfirmAccess(accessGranted: boolean) {
    if (accessGranted) {
      try {
        const response = await axios.post(URL_LOGIN, {
          email: state.user,
          password: state.pwd,
          returnSecureToken: true,
        });
        dispatchReducer({ type: "setUser", payload: "" });
        dispatchReducer({ type: "setPwd", payload: "" });
        const expTime = new Date(
          new Date().getTime() + +response.data.expiresIn * 1000
        ).toISOString();
        dispatch(authActions.login([response.data.idToken, expTime]));
        navigate(`/home`);
      } catch (err: any) {
        if (!err?.response) {
          dispatchReducer({ type: "setErrMsg", payload: "No Server Response" });
        } else if (err.response?.status === 400) {
          dispatchReducer({
            type: "setErrMsg",
            payload: "Wrong Username or Password",
          });
        } else if (err.response?.status === 401) {
          dispatchReducer({ type: "setErrMsg", payload: "Unauthorized" });
        } else {
          dispatchReducer({ type: "setErrMsg", payload: "Login Failed" });
        }
      }
    } else {
      dispatchReducer({ type: "setErrMsg", payload: "Try again" });
    }
  }

  const turnstile2Handler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenTurnstileModal(true);
  };

  const resetPassword = async (event: React.FormEvent) => {
    event.preventDefault();
    dispatchReducer({ type: "setSendStatus", payload: "" });
    dispatchReducer({ type: "setLoadingState", payload: true });
    if (state.resetEmail.trim() === "" || !MAIL_REGEX.test(state.resetEmail)) {
      dispatchReducer({ type: "setSendStatus", payload: "Incorrect email" });
      dispatchReducer({ type: "setLoadingState", payload: false });
      return;
    }
    try {
      const response = await axios.post(URL_RESET, {
        requestType: "PASSWORD_RESET",
        email: state.resetEmail,
      });
      if (response.status === 200) {
        dispatchReducer({
          type: "setSendStatus",
          payload:
            "Email with password restart instructions sent successfully. Check your email.",
        });
      }
    } catch (err: any) {
      if (err.response.data.error.message === "EMAIL_NOT_FOUND") {
        dispatchReducer({
          type: "setSendStatus",
          payload:
            "We could not find your email address. Please check your email and try again",
        });
      } else {
        dispatchReducer({
          type: "setSendStatus",
          payload: "Something went wrong, try again",
        });
      }
    }
    dispatchReducer({ type: "setLoadingState", payload: false });
  };
  return (
    <Wrapper
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {openTurnstileModal && (
        <TurnstileModal
          confirmTurnstile={setConfirmAccess}
          closeModal={setOpenTurnstileModal}
        />
      )}
      <p className={state.errMsg ? "errmsg" : "offscreen"}>{state.errMsg}</p>
      <h1>Log in</h1>
      <form onSubmit={(e) => turnstile2Handler(e)} className="cf-turnstile">
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          id="email"
          ref={userRef}
          maxLength={60}
          autoComplete="off"
          onChange={(e) =>
            dispatchReducer({ type: "setUser", payload: e.target.value })
          }
          value={state.user}
          required
        />
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          id="password"
          maxLength={24}
          onChange={(e) =>
            dispatchReducer({ type: "setPwd", payload: e.target.value })
          }
          value={state.pwd}
          required
        />
        <button>Log In</button>
        <p
          className="errmsg"
          onClick={() =>
            dispatchReducer({ type: "setShowResetPwd", payload: true })
          }
        >
          Forgot password?
        </p>
      </form>
      {state.loadingState && <LoadingSmall />}
      {!state.loadingState && (
        <div className={state.showResetPwd ? "sendPassword" : "offscreen"}>
          <form onSubmit={resetPassword}>
            <h3>Your email address:</h3>
            <input
              type="text"
              id="emailReset"
              autoComplete="off"
              maxLength={60}
              onChange={(e) =>
                dispatchReducer({
                  type: "setResetEmail",
                  payload: e.target.value,
                })
              }
              value={state.resetEmail}
            />
            <button>Send me new password !</button>
            <div className="sendStatus">{state.sendStatus}</div>
          </form>
        </div>
      )}
    </Wrapper>
  );
};
export default LoginTest;
