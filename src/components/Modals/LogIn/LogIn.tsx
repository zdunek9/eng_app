import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../../Store/authSlice";
import { Wrapper } from "./Login.style";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import axios from "axios";
import LoadingSmall from "../LoadingSmall/LoadingSmall";
const LoginTest: React.FC = () => {
  const userRef: any = useRef();
  const [user, setUser] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");
  const [resetEmail, setResetEmail] = useState<string>("");
  const [showResetPwd, setShowResetPwd] = useState<boolean>(false);
  const [sendStatus, setSendStatus] = useState<string>("");
  const [loadingState, setLoadingState] = useState<boolean>(false);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const URL_LOGIN = `${process.env.REACT_APP_AUTH}`;
  const URL_RESET = `${process.env.REACT_APP_RESET_PWD}`;

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const loginHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post(URL_LOGIN, {
        email: user,
        password: pwd,
        returnSecureToken: true,
      });
      setUser("");
      setPwd("");
      dispatch(authActions.login(response.data.idToken));
      navigate(`/home`);
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Wrong Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };
  const resetPassword = async (event: React.FormEvent) => {
    event.preventDefault();
    setSendStatus("");
    setLoadingState(true);
    if (resetEmail.trim() === "") {
      setSendStatus("Incorrect email");
      setLoadingState(false)
      return;
    }
    try {
      const response = await axios.post(URL_RESET, {
        requestType: "PASSWORD_RESET",
        email: resetEmail,
      });
      if (response.status === 200) {
        setSendStatus(
          "Email with password restart instructions sent successfully. Check your email."
        );
      }
    } catch (err: any) {
      if (err.response.data.error.message === "EMAIL_NOT_FOUND") {
        setSendStatus(
          "We could not find your email address. Please check your email and try again"
        );
      } else {
        setSendStatus("Something went wrong, try again");
      }
    }
    setLoadingState(false);
  };
  return (
    <Wrapper
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
      <h1>Log in</h1>
      <form onSubmit={loginHandler}>
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          id="email"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button>Log In</button>
        <p className="errmsg" onClick={() => setShowResetPwd(true)}>
          Forgot password?
        </p>
      </form>
      {loadingState && <LoadingSmall />}
      {!loadingState && (
        <div className={showResetPwd ? "sendPassword" : "offscreen"}>
          <form onSubmit={resetPassword}>
            <h3>Your email address:</h3>
            <input
              type="text"
              id="emailReset"
              autoComplete="off"
              onChange={(e) => setResetEmail(e.target.value)}
              value={resetEmail}
            />
            <button>Send me new password !</button>
            <div className="sendStatus" >{sendStatus}</div>
          </form>
        </div>
      )}
    </Wrapper>
  );
};
export default LoginTest;
