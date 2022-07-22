import {
  MobileInfo,
  Wrapper,
  WrapperCenter,
  MobileButton,
} from "./HomePageNotAuth.style";
import image_eng from "../../components/styles/Images/bck_img.jpg";
import { useNavigate } from "react-router-dom";
import { AiOutlineMobile } from "react-icons/ai";

const HomePageNotAuth: React.FC = (props) => {
  let navigate = useNavigate();

  return (
    <Wrapper>
        <img src={image_eng} alt="eng_img" />
        <WrapperCenter>
          <h1>Learn English by answering a random question.</h1>
          <h2>Randomly generated questions.</h2>
          <h2>Create your favorites and keep coming back to them!</h2>
          <MobileButton onClick={() => navigate(`/login`)}>
            Signup!
          </MobileButton>
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
