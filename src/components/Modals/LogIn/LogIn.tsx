import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../../Store/authSlice";
import { Wrapper } from "./Login.style";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import axios from "axios";
const LoginTest: React.FC = () => {
  const userRef: any = useRef();
  const [user, setUser] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");
  const [showResetPwd, setShowResetPwd] = useState<boolean>(false);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const URL = `${process.env.REACT_APP_AUTH}`;
  const loginHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post(URL, {
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
  const resetPassword = () => {};
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
        <p className="errmsg" onClick={()=>setShowResetPwd(true)}>
          Forget password?
        </p>
      </form>
      <div className={showResetPwd ? "" : "offscreen"}>
        <form onSubmit={resetPassword}>
          <h3>Your email address:</h3>
          <input
            type="text"
            id="email"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <button>Send me new password!</button>
        </form>
      </div>
    </Wrapper>
  );
};
export default LoginTest;
