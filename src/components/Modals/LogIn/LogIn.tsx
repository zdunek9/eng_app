import { useEffect, useReducer, useRef, useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { authActions } from "../../../Store/authSlice";
import {
  Wrapper,
  ForgotPwd,
  ErrorMsgLogin,
  InputPasswordWrapper,
  PhoneVersion,
  DesktopVersion,
} from "./Login.style";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import LoadingSmall from "../LoadingSmall/LoadingSmall";
import { reducer } from "./LoginReducer";
import TurnstileModal from "../Turnstile/TurnstileModal";
import ResetPassword from "./ResetPassword";

const URL_LOGIN = `${process.env.REACT_APP_AUTH}`;

const LoginTest: React.FC = () => {
  const [state, dispatchReducer] = useReducer(reducer, {
    user: "",
    pwd: "",
    errMsg: "",
    resetEmail: "",
    showResetPwd: false,
  });
  const [openTurnstileModal, setOpenTurnstileModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

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
        dispatch(authActions.setUsername(state.user));
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
            <span onClick={() => dispatch(authActions.changeSigninPage(true))}>
              Sign up for free
            </span>
          </h3>
          <form onSubmit={(e) => turnstile2Handler(e)} className="cf-turnstile">
            <input
              aria-label="Email"
              placeholder="Email"
              type="text"
              className={state.errMsg && "errorInput"}
              ref={userRef}
              maxLength={40}
              autoComplete="username"
              onChange={(e) =>
                dispatchReducer({ type: "setUser", payload: e.target.value })
              }
              value={state.user}
              required
            />
            <InputPasswordWrapper showPassword={showPassword}>
              <input
                aria-label="Password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                className={state.errMsg && "errorInput"}
                maxLength={24}
                autoComplete="current-password"
                onChange={(e) =>
                  dispatchReducer({ type: "setPwd", payload: e.target.value })
                }
                value={state.pwd}
                required
              />
              <DesktopVersion>
                {showPassword && state.pwd && (
                  <BiShow
                    onMouseUp={() => setShowPassword(false)}
                    onMouseLeave={() => setShowPassword(false)}
                  />
                )}
                {!showPassword && state.pwd && (
                  <BiHide onMouseDown={() => setShowPassword(true)} />
                )}
              </DesktopVersion>
              <PhoneVersion>
                {state.pwd && (
                  <BiShow
                    onTouchEnd={() => setShowPassword(false)}
                    onTouchStart={() => setShowPassword(true)}
                  />
                )}
              </PhoneVersion>
            </InputPasswordWrapper>

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
          {state.showResetPwd && <ResetPassword />}
        </Wrapper>
      )}
    </>
  );
};
export default LoginTest;
