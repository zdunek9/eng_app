import { MainWrapper, Wrapper } from "./RandomQuestion.style";
import { MdAutorenew } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { RootState } from "../../Store/store";
import { counterActions } from "../../Store/counterSlice";
import DailyProgres from "../../components/AuthItems/DailyProgres/DailyProgres";
import Hearth from "../../components/styles/Hearth/Hearth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { progressActions } from "../../Store/progressSlice";
import { motion } from "framer-motion";
const RandomQuestion = () => {
  const questionn = useSelector(
    (state: RootState) => state.counter.randomQuestion
  );
  const progressCounter = useSelector(
    (state: RootState) => state.progress.totalProgress
  );
  const dispatch = useDispatch();
  const [doneItem, setDoneItem] = useState<boolean>(false);

  const rollQuestion = (event: any) => {
    event.currentTarget.classList.add("rollingItem");
    dispatch(counterActions.rollRandomQuestion());
    if (doneItem && progressCounter < 5) {
      dispatch(progressActions.add());
    }
    setDoneItem(false);
  };

  const favoritesHandler = () => {
    dispatch(counterActions.favoritesHandler(questionn.id));
  };
  useEffect(() => {
    dispatch(counterActions.rollRandomQuestion());
  }, [dispatch]);

  const confirmQuestion = () => {
    setDoneItem((current) => !current);
  };
  return (
    <Wrapper
      as={motion.div}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ type: "tween" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <MainWrapper>
        <h1>{questionn.question}</h1>
        <h3>{questionn.questionPol}</h3>
        <span>
          <MdAutorenew
            onClick={rollQuestion}
            onAnimationEnd={(e: any) => {
              e.currentTarget.classList.remove("rollingItem");
            }}
          />
          <GiConfirmed
            onClick={confirmQuestion}
            style={{ color: doneItem ? "green" : "grey" }}
          />
        </span>
        <Hearth
          favoritesHandler={favoritesHandler}
          isChecked={questionn.isFavorites}
        />
      </MainWrapper>
      <DailyProgres />
    </Wrapper>
  );
};
export default RandomQuestion;
