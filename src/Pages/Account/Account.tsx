import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/Modals/Loading/Loading";
import { RootState } from "../../Store/store";
import {
  Category,
  DetailsHighResolution,
  DetailsSmallScreen,
  Wrapper,
  SectionWrapper,
  HideElement,
} from "./Account.style";
import Email from "./Email/Email";
import Password from "./Password/Password";

const URL_GET_DATA = `${process.env.REACT_APP_GET_USER_DATA}`;

function Account() {
  const [categorySelect, setCategorySelect] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [data, setData] = useState<{ email: string; emailVerified: boolean }>({
    email: "",
    emailVerified: false,
  });
  const idToken = useSelector((state: RootState) => state.auth.apiKey);
  const emailNumber:number = 1;

  useEffect(() => {
    setModal(true);
    const getUserData = async () => {
      const response = await axios.post(URL_GET_DATA, {
        idToken,
      });
      setData(response.data.users[0]);
      setModal(false);
    };
    getUserData();
  }, []);
  return (
    <Wrapper
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <DetailsSmallScreen>
        <Category>
          <div onClick={() => setCategorySelect(false)}>
            <p>Your Email</p>
          </div>
          <div onClick={() => setCategorySelect(true)}>
            <p>Password</p>
          </div>
        </Category>
        {modal ? (
          <Loading />
        ) : (
          <HideElement>
            {!categorySelect && <Email data={data} emailNumber={emailNumber}/>}
            {categorySelect && <Password />}
          </HideElement>
        )}
      </DetailsSmallScreen>
      <DetailsHighResolution>
        {modal ? (
          <Loading />
        ) : (
          <>
            <SectionWrapper>
              <p>Your Email</p>
              <Email data={data} />
            </SectionWrapper>
            <SectionWrapper>
              <p>Your Password</p>
              <Password />
            </SectionWrapper>
          </>
        )}
      </DetailsHighResolution>
    </Wrapper>
  );
}

export default Account;
