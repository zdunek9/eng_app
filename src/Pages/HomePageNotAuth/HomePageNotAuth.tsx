import { Wrapper } from "./HomePageNotAuth.style"
import image_eng from '../../components/styles/Images/english.jpg'
import { useNavigate } from "react-router-dom";

const HomePageNotAuth:React.FC= (props) =>{
    let navigate = useNavigate();

    return (
        <Wrapper>
            <img src={image_eng} alt="eng_img" />
            <div>
                <h1>
                Learn English by answering a random question.
                </h1>
                <h1>
                Randomly generated questions.
                </h1>
                <h1>Create your favorites and keep coming back to them!</h1>
                <span onClick={()=>navigate(`/login`)}><a href="#"></a></span>
            </div>
        </Wrapper>
    )
}
export default HomePageNotAuth