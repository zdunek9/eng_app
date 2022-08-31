import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import { SectionRow, SendBtn, Verified, Wrapper } from "./Email.style";
import { TiTick, TiTimes } from "react-icons/ti";

const URL_VERIFY = `${process.env.REACT_APP_VERIFY_USER}`;
const URL_GET_DATA = `${process.env.REACT_APP_GET_USER_DATA}`;
function Email() {
  const [userData, setUserData] = useState<{
    email: string;
    emailVerified: boolean;
  }>({ email: "", emailVerified: false });
  const [newEmail, setNewEmail] = useState<string>("");
  const [sendEmail, setSendEmail] = useState<boolean>(false);
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const idToken = useSelector((state: RootState) => state.auth.apiKey);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.post(URL_GET_DATA, {
          idToken,
        });
        setUserData(response.data.users[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
  }, []);

  useEffect(() => {
    setNewEmail(userData.email);
  }, [userData]);

  const sendVerifyMail = async () => {
    setLoading(true);
    setSendSuccess(false);
    try {
      await axios.post(URL_VERIFY, {
        requestType: "VERIFY_EMAIL",
        idToken,
      });
      setSendEmail(true);
      setSendSuccess(true);
    } catch (err) {
      console.log(err);
      setSendSuccess(false);
      setSendEmail(true);
    }
    setLoading(false);
  };
  return (
    <Wrapper>
      <SectionRow>
        <p>Email:</p>
        <input
          type="text"
          autoComplete="off"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
      </SectionRow>
      <SectionRow>
        <p>Verified:</p>
        <Verified emailVerified={userData.emailVerified}>
          {userData.emailVerified ? <TiTick /> : <TiTimes />}
        </Verified>
        {loading ? (
          <p>Sending....</p>
        ) : userData.emailVerified ? (
          ""
        ) : sendEmail ? (
          sendSuccess ? (
            <SendBtn success={true}>
              Verification link sent successfully.
            </SendBtn>
          ) : (
            <SendBtn success={false}>
              Something went wrong, try again later.
            </SendBtn>
          )
        ) : (
          <SendBtn onClick={sendVerifyMail}>
            The email is not verified. Verify it now
          </SendBtn>
        )}
      </SectionRow>
      <button>Change</button>
    </Wrapper>
  );
}

export default Email;
