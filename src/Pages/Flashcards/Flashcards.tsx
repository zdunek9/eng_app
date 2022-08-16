import { Wrapper, Buttons, NextBtn } from "./Flashcards.style";
import { TiTick, TiTimes } from "react-icons/ti";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { flashcardActions } from "../../Store/flashcardsSlice";

const Flashcards = () => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const newFlashcard = useSelector(
    (state: RootState) => state.flashcards.randomFlashcard
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(flashcardActions.rollRandomFlashcard());
  }, [dispatch]);
  const answerFunction = (answer: string) => {
    setShowAnswer(true);
  };
  const nextQuestion = () => {
    dispatch(flashcardActions.rollRandomFlashcard());
    setShowAnswer(false);
  };
  return (
    <Wrapper
      as={motion.div}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{type: 'tween'}}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <h1>{newFlashcard.flashcardPol}</h1>
      <h3>{newFlashcard.flashcardTipPol}</h3>
      {showAnswer && (
        <>
          <h2>{newFlashcard.flashcardAng}</h2>
          <h3>
            <i>{newFlashcard.flashcardTipAng}</i>
          </h3>
        </>
      )}
      {!showAnswer && (
        <Buttons>
          <span onClick={answerFunction.bind(this, "no")}>
            <TiTimes />
          </span>
          <span onClick={answerFunction.bind(this, "yes")}>
            <TiTick />
          </span>
        </Buttons>
      )}
      {showAnswer && <NextBtn onClick={nextQuestion}>Next</NextBtn>}
    </Wrapper>
  );
};
export default Flashcards;
