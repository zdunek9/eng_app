import { useEffect, useReducer, useRef, useState } from "react";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ErrorMsgLogin,
  HintImage,
  IconWrapper,
  InputWrapper,
  HintWrapper,
  Wrapper,
} from "./NewAccount.style";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../../Store/authSlice";
import { motion } from "framer-motion";
import { reducer } from "./NewAccountReducer";
import TurnstileModal from "../Turnstile/TurnstileModal";
import LoadingSmall from "../LoadingSmall/LoadingSmall";
import Hint from "./../../styles/Images/idea.png";

const MAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const URL = `${process.env.REACT_APP_SIGN_IN}`;

const NewAccountTest = () => {
  const userRef: any = useRef();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, dispatchReducer] = useReducer(reducer, {
    user: "",
    validName: false,
    userFocus: false,
    pwd: "",
    validPwd: false,
    pwdFocus: false,
    matchPwd: "",
    validMatch: false,
    matchFocus: false,
    errMsg: false,
    openHint: false,
  });
  const [openTurnstileModal, setOpenTurnstileModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    const result = MAIL_REGEX.test(state.user);
    dispatchReducer({ type: "setValidName", payload: result });
  }, [state.user]);
  useEffect(() => {
    const result = PASSWORD_REGEX.test(state.pwd);
    dispatchReducer({ type: "setValidPwd", payload: result });
    const match = state.pwd === state.matchPwd;
    dispatchReducer({ type: "setValidMatch", payload: match });
  }, [state.pwd, state.matchPwd]);
  useEffect(() => {
    dispatchReducer({ type: "setErrMsg", payload: "" });
  }, [state.user]);

  async function setConfirmAccess(accessGranted: boolean) {
    setLoading(true);
    if (accessGranted) {
      try {
        const response = await axios.post(URL, {
          email: state.user,
          password: state.pwd,
          returnSecureToken: true,
        });
        const expTime = new Date(
          new Date().getTime() + +response.data.expiresIn * 1000
        ).toISOString();

        dispatch(authActions.login([response.data.idToken, expTime]));
        navigate("/home");
      } catch (err: any) {
        if (!err?.response) {
          dispatchReducer({ type: "setErrMsg", payload: "No Server Response" });
        } else if (err.response?.data.error.message === "EMAIL_EXISTS") {
          dispatchReducer({
            type: "setErrMsg",
            payload: "A user with this email exists!",
          });
        } else {
          dispatchReducer({
            type: "setErrMsg",
            payload: "Registration Failed",
          });
        }
      }
    } else {
      dispatchReducer({ type: "setErrMsg", payload: "Try again" });
    }
    dispatchReducer({ type: "setPwd", payload: "" });
    dispatchReducer({ type: "setMatchPwd", payload: "" });
    setLoading(false);
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

          <h1>Register</h1>
          <h3>
            Already registred?{" "}
            <span onClick={() => dispatch(authActions.changeSigninPage())}>
              Sign in!
            </span>
          </h3>
          <form onSubmit={(e) => turnstile2Handler(e)}>
            <InputWrapper>
              {state.validName &&
                state.errMsg !== "A user with this email exists!" && (
                  <IconWrapper>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "var(--greenColor)" }}
                    />
                  </IconWrapper>
                )}
              {(!(state.validName || !state.user) ||
                state.errMsg === "A user with this email exists!") && (
                <IconWrapper>
                  <FontAwesomeIcon
                    icon={faTimes}
                    style={{ color: "var(--redColor)" }}
                  />
                </IconWrapper>
              )}

              <input
                placeholder="Email"
                className={
                  !(state.validName || !state.user) ? "errorInput" : ""
                }
                type="email"
                maxLength={60}
                ref={userRef}
                autoComplete="off"
                required
                onChange={(e) =>
                  dispatchReducer({ type: "setUser", payload: e.target.value })
                }
                onFocus={() =>
                  dispatchReducer({ type: "setUserFocus", payload: true })
                }
                onBlur={() =>
                  dispatchReducer({ type: "setUserFocus", payload: false })
                }
              />
              {state.userFocus && state.user && !state.validName && (
                <p>Enter a valid email address</p>
              )}
            </InputWrapper>

            <InputWrapper>
              {state.validPwd && (
                <IconWrapper>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "var(--greenColor)" }}
                  />
                </IconWrapper>
              )}
              {!(state.validPwd || !state.pwd) && (
                <IconWrapper>
                  <FontAwesomeIcon
                    icon={faTimes}
                    style={{ color: "var(--redColor)" }}
                  />
                </IconWrapper>
              )}
              <input
                placeholder="Password"
                className={!(state.validPwd || !state.pwd) ? "errorInput" : ""}
                type="password"
                maxLength={24}
                onChange={(e) =>
                  dispatchReducer({ type: "setPwd", payload: e.target.value })
                }
                value={state.pwd}
                required
                onFocus={() =>
                  dispatchReducer({ type: "setPwdFocus", payload: true })
                }
                onBlur={() =>
                  dispatchReducer({ type: "setPwdFocus", payload: false })
                }
              />
              {state.pwdFocus && !(state.validPwd || !state.pwd) && (
                <p>Invalid password</p>
              )}
              <HintImage
                src={Hint}
                alt="hint"
                onClick={() =>
                  dispatchReducer({
                    type: "setOpenHint",
                    payload: !state.openHint,
                  })
                }
              />
              {state.openHint && (
                <HintWrapper>
                  8 to 24 characters. Must include uppercase and lowercase
                  letters, a number and a special character. Allowed special
                  characters: ! @ # $ %
                </HintWrapper>
              )}
            </InputWrapper>
            <InputWrapper>
              {state.validMatch && state.matchPwd && (
                <IconWrapper>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "var(--greenColor)" }}
                  />
                </IconWrapper>
              )}
              {!(state.validMatch || !state.matchPwd) && (
                <IconWrapper>
                  <FontAwesomeIcon
                    icon={faTimes}
                    style={{ color: "var(--redColor)" }}
                  />
                </IconWrapper>
              )}
              <input
                placeholder="Confirm password"
                className={
                  !(state.validMatch || !state.matchPwd) ? "errorInput" : ""
                }
                type="password"
                maxLength={24}
                onChange={(e) =>
                  dispatchReducer({
                    type: "setMatchPwd",
                    payload: e.target.value,
                  })
                }
                value={state.matchPwd}
                required
                onFocus={() =>
                  dispatchReducer({ type: "setMatchFocus", payload: true })
                }
                onBlur={() =>
                  dispatchReducer({ type: "setMatchFocus", payload: false })
                }
              />
              {state.matchFocus && !state.validMatch && (
                <p>Must match the first password input field.</p>
              )}
            </InputWrapper>
            <button
              disabled={
                !state.validName || !state.validPwd || !state.validMatch
                  ? true
                  : false
              }
            >
              Sign Up
            </button>
            {state.errMsg && <ErrorMsgLogin>{state.errMsg}</ErrorMsgLogin>}
          </form>
        </Wrapper>
      )}
    </>
  );
};
export default NewAccountTest;
