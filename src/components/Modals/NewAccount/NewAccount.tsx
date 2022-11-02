import { useEffect, useReducer, useRef, useState } from "react";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Wrapper } from "./NewAccount.style";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../../Store/authSlice";
import { motion } from "framer-motion";
import { reducer } from "./NewAccountReducer";
import TurnstileModal from "../Turnstile/TurnstileModal";
import LoadingSmall from "../LoadingSmall/LoadingSmall";

const MAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

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
  }, [state.user, state.pwd, state.matchPwd]);
  const URL = `${process.env.REACT_APP_SIGN_IN}`;

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
          dispatchReducer({ type: "setErrMsg", payload: "Mail Taken" });
        } else {
          dispatchReducer({ type: "setPwd", payload: "" });
          dispatchReducer({ type: "setMatchPwd", payload: "" });
          dispatchReducer({ type: "setValidName", payload: false })
          dispatchReducer({
            type: "setErrMsg",
            payload: "Registration Failed",
          });
        }
      }
    } else {
      dispatchReducer({ type: "setPwd", payload: "" });
      dispatchReducer({ type: "setMatchPwd", payload: "" });
      dispatchReducer({ type: "setValidName", payload: false })
      dispatchReducer({ type: "setErrMsg", payload: "Try again" });
    }

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
          <p className={state.errMsg ? "errmsg" : "offscreen"}>
            {state.errMsg}
          </p>
          <h1>Register</h1>
          <form onSubmit={(e) => turnstile2Handler(e)}>
            <label htmlFor="email">
              Email:
              <span className={state.validName ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span
                className={state.validName || !state.user ? "hide" : "invalid"}
              >
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              type="email"
              id="email"
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
            <p
              className={
                state.userFocus && state.user && !state.validName
                  ? "instructions"
                  : "offscreen"
              }
            >
              Enter a valid email address
            </p>
            <label htmlFor="password">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={state.validPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={state.validPwd || !state.pwd ? "hide" : "invalid"}
              />
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
              onFocus={() =>
                dispatchReducer({ type: "setPwdFocus", payload: true })
              }
              onBlur={() =>
                dispatchReducer({ type: "setPwdFocus", payload: false })
              }
            />
            <p
              className={
                state.pwdFocus && !state.validPwd ? "instructions" : "offscreen"
              }
            >
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters,
              <br /> a number and a special character.
              <br />
              Allowed special characters:
              <span>!</span>
              <span>@</span>
              <span>#</span>
              <span>$</span>
              <span>%</span>
            </p>

            <label htmlFor="confirm_pwd">
              Confirm Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={
                  state.validMatch && state.matchPwd ? "valid" : "hide"
                }
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  state.validMatch || !state.matchPwd ? "hide" : "invalid"
                }
              />
            </label>
            <input
              type="password"
              id="confirm_pwd"
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
            <p
              id="confirmnote"
              className={
                state.matchFocus && !state.validMatch
                  ? "instructions"
                  : "offscreen"
              }
            >
              Must match the first password input field.
            </p>

            <button
              disabled={
                !state.validName || !state.validPwd || !state.validMatch
                  ? true
                  : false
              }
            >
              Sign Up
            </button>
          </form>
        </Wrapper>
      )}
    </>
  );
};
export default NewAccountTest;
