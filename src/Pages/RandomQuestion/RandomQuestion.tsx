import { MainWrapper, Wrapper } from "./RandomQuestion.style";
import { MdAutorenew } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { RootState } from "../../Redux/store";
import { counterActions } from "../../Redux/counterSlice";
import DailyProgres from "../../components/AuthItems/DailyProgres/DailyProgres";
import Hearth from "../../components/styles/Hearth/Hearth";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { progressActions } from "../../Redux/progressSlice";
const RandomQuestion = () => {
  const questionn = useSelector(
    (state: RootState) => state.counter.randomQuestion
  );
  const progressCounter = useSelector(
    (state: RootState) => state.progress.totalProgress
  );
  const [doneItem, setDoneItem] = useState<boolean>(false);
  const dispatch = useDispatch();

  const rollQuestion = (event: any) => {
    event.currentTarget.classList.add("rollingItem");
    dispatch(counterActions.rollRandomQuestion());
    if (doneItem && progressCounter<5) {
      dispatch(progressActions.add());
    }
    setDoneItem(false)
  };
  const confirmQuestion = () => {
    setDoneItem((current) => !current);
  };
  return (
    <Wrapper>
      <MainWrapper>
        <h1>{questionn.question}</h1>
        <h2>{questionn.questionPol}</h2>
        <span>
          <MdAutorenew
            onClick={rollQuestion}
            onAnimationEnd={(e: any) => {
              e.currentTarget.classList.remove("rollingItem");
            }}
          />
          <GiConfirmed
            onClick={confirmQuestion}
            style={{ color: doneItem ? "green" : "black" }}
          />
        </span>
        <Hearth />
      </MainWrapper>
      <div>
        <DailyProgres />
      </div>
    </Wrapper>
  );
};
export default RandomQuestion;
