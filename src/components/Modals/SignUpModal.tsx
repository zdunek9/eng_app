import { Wrapper, BlurWrapper } from "./SignUpModal.style";
import bonjoue from "../styles/Images/bonjoue.jpg";
import { AiOutlineClose } from "react-icons/ai";
import Login from "./LogIn/LogIn";
import NewAccount from "./NewAccount/NewAccount";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpModal: React.FC = (props) => {
  const [signUpModal, setSignUpModal] = useState<boolean>(false);
  let navigate = useNavigate();
  const signUpToggle = () => {
    setSignUpModal((prevState) => !prevState);
  };
  const backHandler = () => {
    navigate(-1);
  };
  return (
    <BlurWrapper>
      <Wrapper>
        <img src={bonjoue} alt="balony" />
          <AiOutlineClose onClick={backHandler} className="AiOutlineClose"/>
        {!signUpModal && <Login />}
        {signUpModal && <NewAccount />}
        {!signUpModal && (
          <div className="btn" onClick={signUpToggle}>
            Can't log in? - Sign up for an account
          </div>
        )}
        {signUpModal && (
          <div className="btn" onClick={signUpToggle}>
            Back to log in!
          </div>
        )}
      </Wrapper>
    </BlurWrapper>
  );
};
export default SignUpModal;
