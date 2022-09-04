import React, { useEffect, useState } from "react";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Wrapper } from "./Password.style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import LoadingSmall from "../../../components/Modals/LoadingSmall/LoadingSmall";
import ConfirmModal from "../../../components/Modals/ConfirmModal/ConfirmModal";
import { authActions } from "../../../Store/authSlice";

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const URL_PWD_CHANGE = `${process.env.REACT_APP_CHANGE_PWD}`;

function Password() {
  const [pwd, setPwd] = useState<string>("");
  const [validPwd, setValidPwd] = useState<boolean>(false);
  const [pwdFocus, setPwdFocus] = useState<boolean>(false);

  const [matchPwd, setMatchPwd] = useState<string>("");
  const [validMatch, setValidMatch] = useState<boolean>(false);
  const [matchFocus, setMatchFocus] = useState<boolean>(false);

  const [errMsg, setErrMsg] = useState<string>("");
  const [saveFormLoading, setSaveFormLoading] = useState<boolean>(false);
  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false);

  const idToken = useSelector((state: RootState) => state.auth.apiKey);
  const dispatch = useDispatch();

  useEffect(() => {
    const result = PASSWORD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [pwd, matchPwd]);

  const handleSubmit = async () => {
    setSaveFormLoading(true);
    setOpenConfirmModal(false);
    try {
      await axios.post(URL_PWD_CHANGE, {
        idToken,
        password: pwd,
        returnSecureToken: true,
      });
      dispatch(authActions.logout());
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.data.error.message === "INVALID_ID_TOKEN") {
        setErrMsg(
          "Your credentials are not longer valid. You need to sing in again."
        );
      } else {
        setErrMsg("Password change failed");
      }
    }
    setSaveFormLoading(false);

  };
  const openConfirmModalHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setOpenConfirmModal(true);
  };
  return (
    <Wrapper>
      {openConfirmModal && (
        <ConfirmModal
          confirmHandler={() => handleSubmit()}
          cancelHandler={() => setOpenConfirmModal(false)}
          text={`Are you sure you want to change your password. You will be logged out`}
        />
      )}
      {saveFormLoading && <LoadingSmall />}
      {!saveFormLoading && (
        <>
          <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
          <h1>Change password</h1>
          <form onSubmit={openConfirmModalHandler}>
            <label htmlFor="password">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !pwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
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
                className={validMatch && matchPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMatch || !matchPwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              Must match the first password input field.
            </p>
            <button disabled={!validPwd || !validMatch ? true : false}>
              Change
            </button>
          </form>
        </>
      )}
    </Wrapper>
  );
}

export default Password;
