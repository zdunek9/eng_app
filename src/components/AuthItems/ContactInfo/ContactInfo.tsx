import { Wrapper } from "./ContactInfo.style";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const ContactInfo = () => {
  return (
    <Wrapper>
      <p>Contact me!</p>
      <div>
        <a href="https://github.com/">
          <AiFillGithub />
        </a>
        <a href="https://linkedin.com">
          <AiFillLinkedin />
        </a>
      </div>
    </Wrapper>
  );
};
export default ContactInfo;
