import {
  MobileInfo,
  Wrapper,
  WrapperCenter,
  MobileButton,
} from "./HomePageNotAuth.style";
import image_eng from "../../components/styles/Images/bck_img.webp";
import { useNavigate } from "react-router-dom";
import { AiOutlineMobile } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authActions } from "../../Store/authSlice";
import { motion } from "framer-motion";

const HomePageNotAuth: React.FC = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const intitialToken = localStorage.getItem("token");
    if (intitialToken) {
      dispatch(authActions.checkForToken(intitialToken));
      navigate(`/home`);
    }
  }, [dispatch,navigate]);
  return (
    <Wrapper
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <img src={image_eng} alt="eng_img" />
      <WrapperCenter>
        <h1>Learn English by answering a random question.</h1>
        <h2>Randomly generated questions.</h2>
        <h2>Create your favorites and keep coming back to them!</h2>
        <MobileButton onClick={() => navigate(`/login`)}>Signup!</MobileButton>
      </WrapperCenter>
      <MobileInfo>
        <AiOutlineMobile />
        <p>
          Make your breaks and commutes more productive with our iPhone and
          Android app. Available soon
        </p>
        <AiOutlineMobile />
      </MobileInfo>
    </Wrapper>
  );
};
export default HomePageNotAuth;
