import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../../../Redux/counterSlice";
import { Wrapper } from "./Login.style";
import { useNavigate } from "react-router-dom";
const Login:React.FC = () =>{

    const inputEmail = useRef<HTMLInputElement>(null)
    const inputPassword = useRef<HTMLInputElement>(null)
    const [wrongCredentials, setWrongCredentials] = useState<boolean>(false)
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const loginHandler = (event:React.FormEvent) =>{
        event.preventDefault()
        const enteredLogin = inputEmail.current?.value
        const enteredPassword = inputPassword.current?.value

        const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_AUTH}`
        fetch(URL,{
            method: 'POST',
            body:JSON.stringify({
                email: enteredLogin,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers:{
                'Content-Type': 'application/json'
            },
        }).then(async rest =>{
            if(rest.ok){
                setWrongCredentials(false)
                navigate(`/home`);
                return rest.json()
            }else{
                const data = await rest.json();
                console.log(data);
                setWrongCredentials(true);
            }
        }).then(data=>{
            dispatch(counterActions.login(data.idToken))
        })
    }
    return (
        <Wrapper>
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
                </form>
        </Wrapper>
    )
}
export default Login

