import { MainWrapper, Wrapper } from "./RandomQuestion.style"
import { MdFindReplace } from "react-icons/md"
import DailyProgres from "../../components/AuthItems/DailyProgres/DailyProgres"
import Hearth from "../../components/styles/Hearth/Hearth"
const RandomQuestion = () =>{
    return(
        <Wrapper>
            <MainWrapper>
            <h1>Random QuestioRandom Questionandom QuestionRandom QuestionRandom QuestionRandom QuestionRandom Questionn</h1>
            <h2>Translated text Translated text Translated text Translated text</h2>
            <span>
            <MdFindReplace />
            </span>
            <Hearth />
            </MainWrapper>
            <div>
            <DailyProgres />
            </div>
        </Wrapper>
    )
}
export default RandomQuestion