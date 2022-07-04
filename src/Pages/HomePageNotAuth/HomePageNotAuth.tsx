import { Wrapper } from "./HomePageNotAuth.style"
import image_eng from '../../components/styles/Images/english.jpg'
const HomePageNotAuth:React.FC<{changeLogModalHandler:()=>void}> = (props) =>{
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
                <span onClick={props.changeLogModalHandler}><a href="#"></a></span>
            </div>
        </Wrapper>
    )
}
export default HomePageNotAuth