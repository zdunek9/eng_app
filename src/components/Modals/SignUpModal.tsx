import { Wrapper, BlurWrapper } from "./SignUpModal.style";
import bonjoue from "../styles/Images/bonjoue.jpg"
import { AiOutlineClose} from "react-icons/ai"
import { useRef } from "react";
const SignUpModal:React.FC<{changeLogModalHandler:()=>void}> = (props) =>{
    const inputEmail = useRef<HTMLInputElement>(null)
    const inputPassword = useRef<HTMLInputElement>(null)

    const loginHandler = (event:React.FormEvent) =>{
        event.preventDefault()
        const enteredLogin = inputEmail.current?.value
        const enteredPassword = inputPassword.current?.value
    }
    return (
        <BlurWrapper>
    <Wrapper>
        <img src={bonjoue} alt="balony" />
        <div>
            <form onSubmit={loginHandler}>
                <h1>Log in</h1>
                <label><b>Email</b></label><br/>
                <input type="text" id="email" name="email" placeholder="Enter your email address" ref={inputEmail}/><br/>
                <p></p>
                <label><b>Password</b></label><br/>
                <input type="password" id="password" name="password" placeholder="Enter your password" ref={inputPassword} /><br/>
                <p></p>
                <button type="submit" value="Log In">Log In</button>
                <h3>or</h3>
                <button>Continue with LinkedIn</button><br/>
                <a href="" className="btn from-left" >Can't log in? - Sing up for an account</a>
                </form>
        </div>
        <span onClick={props.changeLogModalHandler}><AiOutlineClose /></span>
    </Wrapper>
    </BlurWrapper>
    )
}
export default SignUpModal