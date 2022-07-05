import { Wrapper, BlurWrapper } from "./SignUpModal.style";
import bonjoue from "../styles/Images/bonjoue.jpg"
import { AiOutlineClose} from "react-icons/ai"
import Login from "./LogIn/LogIn";
import NewAccount from "./NewAccount/NewAccount";
import { useState } from "react";
const SignUpModal:React.FC<{changeLogModalHandler:()=>void}> = (props) =>{
    const [signUpModal, setSignUpModal] = useState<boolean>(false)
    const signUpToggle = () =>{
        setSignUpModal(prevState => !prevState)
    }

    return (
        <BlurWrapper>
    <Wrapper>
        <img src={bonjoue} alt="balony" />
        <span onClick={props.changeLogModalHandler}><AiOutlineClose /></span>
        {!signUpModal && <Login />}
        {signUpModal && <NewAccount />}
        {!signUpModal && <div className="btn from-left" onClick={signUpToggle}>Can't log in? - Sign up for an account</div>}
        {signUpModal && <div className="btn from-left" onClick={signUpToggle}>Back to log in!</div>}

    </Wrapper>
    </BlurWrapper>
    )
}
export default SignUpModal