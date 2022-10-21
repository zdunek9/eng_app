import { useEffect, useReducer, useRef } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../../Store/authSlice";
import { Wrapper } from "./Login.style";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import LoadingSmall from "../LoadingSmall/LoadingSmall";
import { reducer } from "./LoginReducer";
import Turnstile from "react-turnstile";

const MAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const URL_LOGIN = `${process.env.REACT_APP_AUTH}`;
const URL_RESET = `${process.env.REACT_APP_RESET_PWD}`;
const TURNSTILE_TOKEN = `${process.env.REACT_APP_TURNSTILE_TOKEN}`;

function TurnstilewWidget() {
  return (
    <Turnstile sitekey={TURNSTILE_TOKEN} onVerify={(token) => alert(token)} />
  );
}

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
  <script
    src="https://challenges.cloudflare.com/turnstile/v0/api.js"
    async
    defer
  ></script>;

  const userRef: any = useRef();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
  }, []);

  useEffect(() => {
    dispatchReducer({ type: "setErrMsg", payload: "" });
  }, [state.user, state.pwd]);

  const loginHandler = async (event: React.FormEvent) => {
    event.preventDefault();

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
      <p className={state.errMsg ? "errmsg" : "offscreen"}>{state.errMsg}</p>
      <h1>Log in</h1>
      <form onSubmit={loginHandler} className="cf-turnstile">
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          id="email"
          ref={userRef}
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
        <div>
          {TurnstilewWidget()}
          </div>
        {/* <div
          className="cf-turnstile"
          data-sitekey={TURNSTILE_TOKEN}
          data-callback="javascriptCallback"
        ></div> */}
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
