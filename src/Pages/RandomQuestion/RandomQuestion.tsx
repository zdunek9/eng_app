import { MainWrapper, Wrapper } from "./RandomQuestion.style"
import { MdAutorenew } from "react-icons/md"
import { counterActions, RootState } from '../../Redux/store'
import DailyProgres from "../../components/AuthItems/DailyProgres/DailyProgres"
import Hearth from "../../components/styles/Hearth/Hearth"
import { useDispatch, useSelector } from "react-redux"
const RandomQuestion = () =>{
    const questionn = useSelector((state: RootState) => state.counter.randomQuestion)
    const dispatch = useDispatch()
    const rollQuestion = () =>{
        dispatch(counterActions.rollRandomQuestion())
    }
    return(
        <Wrapper>
            <MainWrapper>
            <h1>{questionn.question}</h1>
            <h2>{questionn.questionPol}</h2>
            <span>
            <MdAutorenew className="rollingItem"  onClick={rollQuestion} />
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