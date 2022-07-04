import { Wrapper, BlurWrapper } from "./SignUpModal.style";
import bonjoue from "../styles/Images/bonjoue.jpg"
import { AiOutlineClose} from "react-icons/ai"
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../../Redux/store";
const SignUpModal:React.FC<{changeLogModalHandler:()=>void}> = (props) =>{
    const inputEmail = useRef<HTMLInputElement>(null)
    const inputPassword = useRef<HTMLInputElement>(null)
    const [wrongCredentials, setWrongCredentials] = useState<boolean>(false)
    const dispatch = useDispatch();

    const loginHandler = (event:React.FormEvent) =>{
        event.preventDefault()
        const enteredLogin = inputEmail.current?.value
        const enteredPassword = inputPassword.current?.value

        const URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDODpOjzPbv1NJF8vzdK7baNfiWgwP-yb0'
        fetch(URL,{
            method: 'POST',
            body:JSON.stringify({
                email: enteredLogin,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(rest =>{{
            if(rest.ok){
                console.log("object");
                setWrongCredentials(false)
                dispatch(counterActions.login())
                props.changeLogModalHandler()
            }else{
                rest.json().then(data=>{
                    console.log(data);
                    setWrongCredentials(true)
                })
            }
        }})    }
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
                <input type="password" id="password" minLength={6} name="password" placeholder="Enter your password" ref={inputPassword} /><br/>
                {wrongCredentials&&<p>Wrong Credentials</p>}
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