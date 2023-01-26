import { Wrapper, BlurWrapper } from "./SignUpModal.style";
import bonjoue from "../styles/Images/bonjoue.jpg";
import { AiOutlineClose } from "react-icons/ai";
import Login from "./LogIn/LogIn";
import NewAccount from "./NewAccount/NewAccount";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";

const SignUpModal: React.FC = (props) => {
  const pageStatus = useSelector((state:RootState)=>state.auth.signinPageStatus)
  let navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  };
  return (
    <BlurWrapper
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Wrapper>
        <img src={bonjoue} alt="balony" />
        <AiOutlineClose onClick={backHandler} className="AiOutlineClose" />
        {!pageStatus && <Login />}
        {pageStatus && <NewAccount />}
      </Wrapper>
    </BlurWrapper>
  );
};
export default SignUpModal;
