import axios from "axios";
import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import { SectionRow, SendBtn, Verified, Wrapper } from "./Email.style";
import { TiTick, TiTimes } from "react-icons/ti";
import { authActions } from "../../../Store/authSlice";
import LoadingSmall from "../../../components/Modals/LoadingSmall/LoadingSmall";
import ConfirmModal from "../../../components/Modals/ConfirmModal/ConfirmModal";
import { reducer } from "./EmailReducer";

const URL_VERIFY = `${process.env.REACT_APP_VERIFY_USER}`;
const URL_GET_DATA = `${process.env.REACT_APP_GET_USER_DATA}`;
const URL_CHANGE_EMAIL = `${process.env.REACT_APP_CHANGE_EMAIL}`;

function Email() {
  const [state, dispatchReducer] = useReducer(reducer, {
    userData: {
      email: "",
      emailVerified: false,
    },
    newEmail: "",
    sendEmail: false,
    sendSuccess: false,
    loading: false,
    saveFormLoading: true,
    saveSuccess: true,
    openConfirmModal: false,
    errorData: "",
  });

  const idToken = useSelector((state: RootState) => state.auth.apiKey);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      const response = await axios.post(URL_GET_DATA, {
        idToken,
      });
      dispatchReducer({ type: "setUserData", payload: response.data.users[0] });
      dispatchReducer({ type: "setFormSaveLoading", payload: false });
    };
    getUserData();
  }, []);

  useEffect(() => {
    dispatchReducer({ type: "setNewEmail", payload: state.userData.email });
  }, [state.userData]);

  const sendVerifyMail = async () => {
    dispatchReducer({ type: "setLoading", payload: true });
    dispatchReducer({ type: "setSendSuccess", payload: true });
    try {
      await axios.post(URL_VERIFY, {
        requestType: "VERIFY_EMAIL",
        idToken,
      });
      dispatchReducer({ type: "setSendEmail", payload: true });
      dispatchReducer({ type: "setSendSuccess", payload: true });
    } catch (err: any) {
      if (err?.response.data.error.message === "TOO_MANY_ATTEMPTS_TRY_LATER") {
        dispatchReducer({
          type: "setErrorData",
          payload: "Too many attempts. Try later",
        });
      } else if (err?.response.data.error.message === "EMAIL_NOT_FOUND") {
        dispatchReducer({ type: "setErrorData", payload: "User not found" });
      } else {
        dispatchReducer({
          type: "setErrorData",
          payload: "Something goes wrong, try later",
        });
      }
      dispatchReducer({ type: "setSendSuccess", payload: false });
      dispatchReducer({ type: "setSendEmail", payload: true });
    }
    dispatchReducer({ type: "setLoading", payload: false });
  };

  const changeEmailHandler = async () => {
    dispatchReducer({ type: "setFormSaveLoading", payload: true });
    dispatchReducer({ type: "setOpenConfirmModal", payload: false });
    try {
      await axios.post(URL_CHANGE_EMAIL, {
        idToken,
        email: state.newEmail,
        returnSecureToken: true,
      });
      dispatch(authActions.logout());
      dispatchReducer({ type: "setSaveSuccess", payload: true });
    } catch (err) {
      dispatchReducer({ type: "setSaveSuccess", payload: false });
    }
  };
  return (
    <Wrapper>
      {state.openConfirmModal && (
        <ConfirmModal
          confirmHandler={() => changeEmailHandler()}
          cancelHandler={() =>
            dispatchReducer({ type: "setOpenConfirmModal", payload: false })
          }
          text={`Are you sure you want to change your email address. <br />
          You will be logged out`}
        />
      )}
      {state.saveFormLoading && <LoadingSmall />}
      {!state.saveFormLoading && (
        <>
          <h1>Change email</h1>
          <SectionRow>
            <p>Email:</p>
            <input
              type="text"
              autoComplete="off"
              value={state.newEmail}
              onChange={(e) =>
                dispatchReducer({
                  type: "setNewEmail",
                  payload: e.target.value,
                })
              }
            />
            {state.saveSuccess ? "" : <p>Something goes wrong, try later</p>}
          </SectionRow>
          <SectionRow>
            <p>Verified:</p>
            <Verified emailVerified={state.userData.emailVerified}>
              {state.userData.emailVerified ? <TiTick /> : <TiTimes />}
            </Verified>
            {state.loading ? (
              <p>Sending....</p>
            ) : state.userData.emailVerified ? (
              ""
            ) : state.sendEmail ? (
              state.sendSuccess ? (
                <SendBtn success={true}>
                  Verification link sent successfully.
                </SendBtn>
              ) : (
                <SendBtn success={false}>{state.errorData} </SendBtn>
              )
            ) : (
              <SendBtn onClick={sendVerifyMail}>
                The email is not verified. Verify it now
              </SendBtn>
            )}
          </SectionRow>
          <button
            onClick={() =>
              dispatchReducer({ type: "setOpenConfirmModal", payload: true })
            }
          >
            Change
          </button>
        </>
      )}
    </Wrapper>
  );
}

export default Email;
