import React, { useEffect, useReducer } from "react";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Wrapper } from "./Password.style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import LoadingSmall from "../../../components/Modals/LoadingSmall/LoadingSmall";
import ConfirmModal from "../../../components/Modals/ConfirmModal/ConfirmModal";
import { authActions } from "../../../Store/authSlice";
import { reducer } from "./PasswordReducer";

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const URL_PWD_CHANGE = `${process.env.REACT_APP_CHANGE_PWD}`;

function Password() {
  const [state, dispatchReducer] = useReducer(reducer, {
    pwd: "",
    validPwd: false,
    pwdFocus: false,
    matchPwd: "",
    validMatch: false,
    matchFocus: false,
    errMsg: "",
    saveFormLoading: false,
    openConfirmModal: false,
  });

  const idToken = useSelector((state: RootState) => state.auth.apiKey);
  const dispatch = useDispatch();
  const userName = useSelector((state: RootState) => state.auth.userName);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(state.pwd);
    dispatchReducer({ type: "setValidPwd", payload: result });
    const match = state.pwd === state.matchPwd;
    dispatchReducer({ type: "setValidMatch", payload: match });
  }, [state.pwd, state.matchPwd]);

  useEffect(() => {
    dispatchReducer({ type: "setErrMsg", payload: "" });
  }, [state.pwd, state.matchPwd]);

  const handleSubmit = async () => {
    dispatchReducer({ type: "saveFormLoading", payload: true });
    dispatchReducer({ type: "setOpenConfirmModal", payload: false });
    try {
      await axios.post(URL_PWD_CHANGE, {
        idToken,
        password: state.pwd,
        returnSecureToken: true,
      });
      dispatch(authActions.logout());
    } catch (err: any) {
      if (!err?.response) {
        dispatchReducer({ type: "setErrMsg", payload: "No Server Response" });
      } else if (err.response?.data.error.message === "INVALID_ID_TOKEN") {
        dispatchReducer({
          type: "setErrMsg",
          payload:
            "Your credentials are not longer valid. You need to sing in again.",
        });
      } else {
        dispatchReducer({
          type: "setErrMsg",
          payload: "Password change failed",
        });
      }
    }
    dispatchReducer({ type: "saveFormLoading", payload: false });
  };
  const openConfirmModalHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatchReducer({ type: "setOpenConfirmModal", payload: true });
  };
  console.log(userName);
  return (
    <Wrapper>
      {state.openConfirmModal && (
        <ConfirmModal
          confirmHandler={() => handleSubmit()}
          cancelHandler={() =>
            dispatchReducer({ type: "setOpenConfirmModal", payload: false })
          }
          text={`Are you sure you want to change your password. You will be logged out`}
        />
      )}
      {state.saveFormLoading && <LoadingSmall />}
      {!state.saveFormLoading && (
        <>
          <p className={state.errMsg ? "errmsg" : "offscreen"}>
            {state.errMsg}
          </p>
          <form onSubmit={openConfirmModalHandler}>
            <input type="text" hidden autoComplete="username" value={userName} />
            <label htmlFor="newpassword">New Password:</label>
            <FontAwesomeIcon
              icon={faCheck}
              className={state.validPwd ? "valid" : "hide"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={state.validPwd || !state.pwd ? "hide" : "invalid"}
            />
            <input
              id="newpassword"
              type="password"
              autoComplete="new-password"
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
            <label htmlFor="confirmnewpassword">Confirm Password:</label>
            <FontAwesomeIcon
              icon={faCheck}
              className={state.validMatch && state.matchPwd ? "valid" : "hide"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={
                state.validMatch || !state.matchPwd ? "hide" : "invalid"
              }
            />
            <input
              id="confirmnewpassword"
              type="password"
              autoComplete="new-password"
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
            <button
              disabled={!state.validPwd || !state.validMatch ? true : false}
            >
              Change
            </button>
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
          </form>
        </>
      )}
    </Wrapper>
  );
}

export default Password;
