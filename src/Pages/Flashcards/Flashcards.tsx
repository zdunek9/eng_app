import { Wrapper, Buttons, NextBtn } from "./Flashcards.style";
import { TiTick, TiTimes } from "react-icons/ti";
import { useState } from "react";
import { motion } from "framer-motion";

const Flashcards = () => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const answerFunction = (answer: string) => {
    console.log(answer);
    setShowAnswer(true);
  };
  const nextQuestion = () => {
    setShowAnswer(false);
  };
  return (
    <Wrapper       as={motion.div}
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}>
      <h1>Resztki</h1>
      <h3>Nie dam rady dokończyć obiadu, ale zostawię resztki na jutro</h3>
      {showAnswer && (
        <>
          <h2>Leftovers</h2>
          <h3>
           <i>I can't finish my dinner, but i'll save the leftovers for tomorrow</i>
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
