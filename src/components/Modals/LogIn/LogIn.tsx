import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../../Store/authSlice";
import { Wrapper } from "./Login.style";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LoginTest: React.FC = () => {
  const userRef: any = useRef();
  const [user, setUser] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");

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
      navigate(`/home`);
      dispatch(authActions.login(response.data.idToken));
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
  return (
    <Wrapper>
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
      </form>
    </Wrapper>
  );
};
export default LoginTest;
