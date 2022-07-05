import { useRef, useState } from "react"
import { Wrapper } from "./NewAccount.style"
import { useNavigate } from "react-router-dom";


const NewAccount = () =>{
    const [wrongCredentials, setWrongCredentials] = useState<boolean>(false)
    const [problemMessage, setProblemMessage] = useState<String>("")

    const inputEmailRef = useRef<HTMLInputElement>(null)
    const inputPasswordRef = useRef<HTMLInputElement>(null)
    const inputPasswordSecondRef = useRef<HTMLInputElement>(null)
    let navigate = useNavigate();

    const createNewAccount = (event:React.FormEvent) =>{
        event.preventDefault()
        const inputEmail = inputEmailRef.current?.value
        const inputPassword = inputPasswordRef.current?.value
        const inputPasswordSecond = inputPasswordSecondRef.current?.value

        if((inputPassword !== inputPasswordSecond) || inputPassword?.trim().length===0 ){          //Stworzyć później jakąś sensowną walidacje hasła
            setWrongCredentials(true)
            return
        }
        const URL = ""
        fetch(URL,{
            method: 'POST',
            body:JSON.stringify({
                email: inputEmail,
                password: inputPassword,
                returnSecureToken: true,
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(rest =>{{
            if(rest.ok){
                setProblemMessage("")
            }else{
                rest.json().then(data=>{
                    console.log(data);
                    setProblemMessage(data.error.message)
                })
            }
        }})  
        navigate("/home");
    }
    return(
        <Wrapper>
            <form onSubmit={createNewAccount}>
                <h1>Sign up</h1>
                <label><b>Email</b></label><br/>
                <input type="text" id="email" placeholder="Enter your email address" ref={inputEmailRef}/><br/>
                <label><b>Password</b></label><br/>
                <input type="password" placeholder="Enter your password" ref={inputPasswordRef} /><br/>
                <label><b>Confirm Password</b></label><br/>
                <input type="password" placeholder="Enter your password" ref={inputPasswordSecondRef} /><br/>
                {problemMessage&&<p>{problemMessage}</p>}
                {wrongCredentials&&<p>Wrong password</p>}
                <button type="submit" value="Log In">Sign up</button>
                </form>
        </Wrapper>
    )
}
export default NewAccount