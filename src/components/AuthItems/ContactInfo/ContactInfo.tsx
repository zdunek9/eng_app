import { Wrapper } from "./ContactInfo.style"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const ContactInfo = () =>{
    return (
        <Wrapper>
        <p>Contact me!</p>
        <div>
        <span><AiFillGithub /></span>
        <span><AiFillLinkedin /></span>
        </div>
        </Wrapper>
    )
}
export default ContactInfo