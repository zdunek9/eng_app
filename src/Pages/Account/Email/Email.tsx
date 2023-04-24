import axios from "axios";
import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import {
  SectionRow,
  SendBtn,
  Verified,
  Wrapper,
  VerifySection,
} from "./Email.style";
import { TiTick, TiTimes } from "react-icons/ti";
import { authActions } from "../../../Store/authSlice";
import ConfirmModal from "../../../components/Modals/ConfirmModal/ConfirmModal";
import { reducer } from "./EmailReducer";
import { DataType } from "../../../models/interface";

const URL_VERIFY = `${process.env.REACT_APP_VERIFY_USER}`;
const URL_CHANGE_EMAIL = `${process.env.REACT_APP_CHANGE_EMAIL}`;

function Email({ data: { email, emailVerified }, emailNumber }: DataType) {
  const [state, dispatchReducer] = useReducer(reducer, {
    userData: {
      email,
      emailVerified,
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
      dispatchReducer({ type: "setFormSaveLoading", payload: false });
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
          text={
            "Are you sure you want to change your email address. You will be logged out"
          }
        />
      )}
      {state.saveSuccess ? (
        ""
      ) : (
        <p className="errMsg">Something goes wrong, try later</p>
      )}
      <SectionRow>
        <label htmlFor="emailAddress">Email:</label>
        <input
          id={`emailAddress ${emailNumber}`}
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
      </SectionRow>
      <VerifySection>
        <p>Verified:</p>
        <Verified emailVerified={state.userData.emailVerified}>
          {state.userData.emailVerified ? <TiTick /> : <TiTimes />}
        </Verified>
        <p>
          {state.loading ? (
            <i>Sending...</i>
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
            <SendBtn onClick={sendVerifyMail}>Verify now!</SendBtn>
          )}
        </p>
      </VerifySection>
      <button
        onClick={() =>
          dispatchReducer({ type: "setOpenConfirmModal", payload: true })
        }
      >
        Change
      </button>
    </Wrapper>
  );
}

export default Email;
