import { useEffect, useState } from "react";
import { ErrorMsgLogin, Wrapper } from "./NewAccount.style";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../../Store/authSlice";
import { motion } from "framer-motion";
import TurnstileModal from "../Turnstile/TurnstileModal";
import LoadingSmall from "../LoadingSmall/LoadingSmall";
import InputNewAcc from "./InputNewAcc";
import PasswordsNewAcc from "./PasswordsNewAcc";

const NewAccountTest = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [openTurnstileModal, setOpenTurnstileModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");
  const [validName, setValidName] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [validPassword, setValidPassword] = useState<boolean>(false);
  const [secondPassword, setSecondPassword] = useState<string>("");
  const [passwordMatch, setPasswordMatch] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const URL = `${process.env.REACT_APP_SIGN_IN}`;
  const MAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  async function setConfirmAccess(accessGranted: boolean) {
    setLoading(true);
    if (accessGranted) {
      try {
        const response = await axios.post(URL, {
          email: user,
          password: password,
          returnSecureToken: true,
        });
        const expTime = new Date(
          new Date().getTime() + +response.data.expiresIn * 1000
        ).toISOString();

        dispatch(authActions.login([response.data.idToken, expTime]));
        dispatch(authActions.setUsername(user));
        navigate("/home");
      } catch (err: any) {
        if (!err?.response) {
          setErrorMessage("No Server Response");
        } else if (err.response?.data.error.message === "EMAIL_EXISTS") {
          setErrorMessage("A user with this email exists!");
        } else {
          setErrorMessage("Registration Failed");
        }
      }
    } else {
      setErrorMessage("Try again");
    }
    setPasswordMatch(false);
    setPassword("");
    setSecondPassword("");
    setLoading(false);
  }

  useEffect(() => {
    const result = MAIL_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    setErrorMessage("");
  }, [user]);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    setValidPassword(result);
    const match = password === secondPassword;
    setPasswordMatch(match);
  }, [password, secondPassword]);

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
            <span onClick={() => dispatch(authActions.changeSigninPage(false))}>
              Sign in!
            </span>
          </h3>
          <form onSubmit={(e) => turnstile2Handler(e)}>
            <InputNewAcc
              errMsg={errorMessage}
              setUserEmailProp={setUser}
              userEmailProp={user}
              validNameProp={validName}
            />
            <PasswordsNewAcc
              passwordProp={password}
              setPasswordProp={setPassword}
              secondPasswordProp={secondPassword}
              setSecondPasswordProp={setSecondPassword}
              validPasswordProp={validPassword}
              passwordMatchProp={passwordMatch}
            />
            <button
              disabled={
                !validName || !validPassword || !passwordMatch ? true : false
              }
            >
              Sign Up
            </button>
            {errorMessage && <ErrorMsgLogin>{errorMessage}</ErrorMsgLogin>}
          </form>
        </Wrapper>
      )}
    </>
  );
};
export default NewAccountTest;
