import { MobileInfo, Wrapper, WrapperCenter } from "./HomePageNotAuth.style"
import image_eng from '../../components/styles/Images/english.jpg'
import { useNavigate } from "react-router-dom";
import {AiOutlineMobile} from "react-icons/ai"

const HomePageNotAuth:React.FC= (props) =>{
    let navigate = useNavigate();

    return (
        <>
        <Wrapper>
            <img src={image_eng} alt="eng_img" />
            <WrapperCenter>
                <h1>
                Learn English by answering a random question.
                </h1>
                <h1>
                Randomly generated questions.
                </h1>
                <h1>Create your favorites and keep coming back to them!</h1>
                <span onClick={()=>navigate(`/login`)}><a href="#"></a></span>
            </WrapperCenter>
        </Wrapper>
        <MobileInfo><AiOutlineMobile /><p>Make your breaks and commutes more productive with our iPhone and Android apps. Available soon</p><AiOutlineMobile /></MobileInfo>
        </>
    )
}
export default HomePageNotAuth