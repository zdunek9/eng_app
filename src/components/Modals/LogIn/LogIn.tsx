import { useEffect, useReducer, useRef, useState } from "react";
import { AiFillWarning } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { authActions } from "../../../Store/authSlice";
import {
  Wrapper,
  ErrorMsgForgotPwd,
  ForgotPwd,
  ErrorMsgLogin,
} from "./Login.style";
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
    sendStatus: [true, ""],
    loadingState: false,
  });
  const [openTurnstileModal, setOpenTurnstileModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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
    setLoading(true);
    dispatchReducer({ type: "setShowResetPwd", payload: false });
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
      setLoading(false);
    }
  }

  const turnstile2Handler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenTurnstileModal(true);
  };

  const resetPassword = async (event: React.FormEvent) => {
    event.preventDefault();
    dispatchReducer({ type: "setSendStatus", payload: [false, ""] });
    dispatchReducer({ type: "setLoadingState", payload: true });
    if (state.resetEmail.trim() === "" || !MAIL_REGEX.test(state.resetEmail)) {
      dispatchReducer({
        type: "setSendStatus",
        payload: [false, "Incorrect email"],
      });
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
          payload: [
            true,
            "Restart instructions sent successfully. Check your email.",
          ],
        });
      }
    } catch (err: any) {
      if (err.response.data.error.message === "EMAIL_NOT_FOUND") {
        dispatchReducer({
          type: "setSendStatus",
          payload: [
            false,
            "We could not find your email address. Please check and try again",
          ],
        });
      } else {
        dispatchReducer({
          type: "setSendStatus",
          payload: [false, "Something went wrong, try again"],
        });
      }
    }
    dispatchReducer({ type: "setLoadingState", payload: false });
  };
  return (
    <>
      {loading && <LoadingSmall />}
      {!loading && (
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
          <h1>Sign in</h1>
          <h3>
            New to Cool App?{" "}
            <span onClick={() => dispatch(authActions.changeSigninPage())}>
              Sign up for free
            </span>
          </h3>
          <form onSubmit={(e) => turnstile2Handler(e)} className="cf-turnstile">
            <input
              placeholder="Email"
              type="text"
              className={state.errMsg && "errorInput"}
              ref={userRef}
              maxLength={40}
              autoComplete="off"
              onChange={(e) =>
                dispatchReducer({ type: "setUser", payload: e.target.value })
              }
              value={state.user}
              required
            />
            <input
              placeholder="Password"
              type="password"
              className={state.errMsg && "errorInput"}
              maxLength={24}
              onChange={(e) =>
                dispatchReducer({ type: "setPwd", payload: e.target.value })
              }
              value={state.pwd}
              required
            />
            {state.errMsg && <ErrorMsgLogin>{state.errMsg}</ErrorMsgLogin>}
            <button>Log In</button>
            <div
              onClick={() =>
                dispatchReducer({ type: "setShowResetPwd", payload: true })
              }
            >
              <ForgotPwd>Forgot password?</ForgotPwd>
            </div>
          </form>
          {state.loadingState && <LoadingSmall />}
          {!state.loadingState && state.showResetPwd && (
            <form onSubmit={resetPassword}>
              <ErrorMsgForgotPwd>
                <input
                  placeholder="Your email address:"
                  className={state.sendStatus[0] ? "" : "errorInput"}
                  type="text"
                  autoComplete="off"
                  maxLength={40}
                  onChange={(e) =>
                    dispatchReducer({
                      type: "setResetEmail",
                      payload: e.target.value,
                    })
                  }
                  value={state.resetEmail}
                />
                {!state.sendStatus[0] && <AiFillWarning />}
                <div className={state.sendStatus[0] ? "success" : ""}>
                  {state.sendStatus[1]}
                </div>
              </ErrorMsgForgotPwd>
              <button>Send me new password !</button>
            </form>
          )}
        </Wrapper>
      )}
    </>
  );
};
export default LoginTest;
