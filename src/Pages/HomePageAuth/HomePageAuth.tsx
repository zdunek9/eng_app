import ContactInfo from "../../components/AuthItems/ContactInfo/ContactInfo";
import DailyProgres from "../../components/AuthItems/DailyProgres/DailyProgres";
import {
  WelcomeScreen,
  Wrapper,
  Box,
  BoxWrapper,
  PartingWrapper,
  PartingWrapperSecond,
  ProgressWrapper,
} from "./HomePageAuth.style";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionsAPI } from "../../Store/counterSlice";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";
import Loading from "../../components/Modals/Loading/Loading";
import { RootState } from "../../Store/store";
import { motion } from "framer-motion";
import Errorr from "../../components/Modals/Error/Error";
import { getFlashcardAPI } from "../../Store/flashcardsSlice";

const HomePageAuth = () => {
  const dispatch = useDispatch();
  const questionStatus = useSelector(
    (state: RootState) => state.counter.status
  );
  const questionError = useSelector((state: RootState) => state.counter.error);
  const flashcardStatus = useSelector(
    (state: RootState) => state.flashcards.status
  );
  const flashcardError = useSelector(
    (state: RootState) => state.flashcards.error
  );

  useEffect(() => {
    if (questionStatus === "idle" || flashcardStatus === "idle") {
      dispatch<any>(getQuestionsAPI());
      dispatch<any>(getFlashcardAPI());
    }
  }, [questionStatus, flashcardStatus, dispatch]);

  let content;

  if (questionStatus === "loading" || flashcardStatus === "loading") {
    content = <Loading />;
  } else if (
    questionStatus === "succeeded" ||
    flashcardStatus === "succeeded"
  ) {
    content = (
      <>
        <Wrapper
          as={motion.div}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ type: "tween" }}
          exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
          <WelcomeScreen>
            <PartingWrapper>
              <h1>Welcome to myapp</h1>
              <h3>
                Start learning English using my website. Visit
                <b> Random Question</b> and create your <b>Favirites!</b>
              </h3>
            </PartingWrapper>
            <PartingWrapperSecond>
              <h3>Complete your daily goal, for better learning.</h3>
              <h3>
                <b>Learn how to use:</b>
              </h3>
              <BoxWrapper>
                <Box>
                  <RiNumber1 className="number" />
                  <div>
                    <h4>What and Why?</h4>
                    <p>Answer or discuss with your frends about questions</p>
                  </div>
                </Box>
                <Box>
                  <RiNumber2 className="number" />
                  <div>
                    <h4>Daily Goal</h4>
                    <p>Compleate daily goal for better performance!</p>
                  </div>
                </Box>
                <Box>
                  <RiNumber3 className="number" />
                  <div>
                    <h4>Favorites</h4>
                    <p>
                      Add special question to favorites, and back to them
                      anytime!
                    </p>
                  </div>
                </Box>
                <Box>
                  <RiNumber4 className="number" />
                  <div>
                    <h4>Flashcards</h4>
                    <p>
                      Check out the flashcards and learn new vocabulary words
                    </p>
                  </div>
                </Box>
              </BoxWrapper>
            </PartingWrapperSecond>
          </WelcomeScreen>
          <ProgressWrapper>
            <DailyProgres />
            <ContactInfo />
          </ProgressWrapper>
        </Wrapper>
      </>
    );
  } else if (questionStatus === "failed" || flashcardStatus === "failed") {
    content = <Errorr msg={questionError || flashcardError} />;
  }
  return <>{content};</>;
};
export default HomePageAuth;
