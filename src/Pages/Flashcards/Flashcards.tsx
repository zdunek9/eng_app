import { Wrapper, Buttons, NextBtn } from "./Flashcards.style";
import { TiTick, TiTimes } from "react-icons/ti";
import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { flashcardActions } from "../../Redux/flashcardsSlice";

const Flashcards = () => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const newFlashcard = useSelector(
    (state: RootState) => state.flashcards.randomFlashcard
  );
  const dispatch = useDispatch()
  const answerFunction = (answer: string) => {
    setShowAnswer(true);
  };
  const nextQuestion = () => {
    dispatch(flashcardActions.rollRandomFlashcard())
    setShowAnswer(false);
  };
  return (
    <Wrapper
      as={motion.div}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
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
          <span>
            <TiTimes onClick={answerFunction.bind(this, "no")} />
          </span>
          <span>
            <TiTick onClick={answerFunction.bind(this, "yes")} />
          </span>
        </Buttons>
      )}
      {showAnswer && <NextBtn onClick={nextQuestion}>Next</NextBtn>}
    </Wrapper>
  );
};
export default Flashcards;
