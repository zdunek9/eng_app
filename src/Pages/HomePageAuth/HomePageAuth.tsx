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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../Store/counterSlice";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";
import Loading from "../../components/Modals/Loading/Loading";
import { RootState } from "../../Store/store";
import { motion } from "framer-motion";
import Errorr from "../../components/Modals/Error/Error";
import { flashcardActions } from "../../Store/flashcardsSlice";
import { authActions } from "../../Store/authSlice";

const URL_TAB = `${process.env.REACT_APP_DB_TAB}`;
const URL_FLASHCARD = `${process.env.REACT_APP_DB_FLASHCARDS}`;
const HomePageAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const dispatch = useDispatch();

  const token = useSelector((state: RootState) => state.auth.apiKey);
  const loadFetch = useSelector(
    (state: RootState) => state.auth.preventLoading
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Promise.all([
          fetch(`${URL_TAB}?auth=${token}`),
          fetch(`${URL_FLASHCARD}?auth=${token}`),
        ]);
        if (!response[0].ok || !response[1].ok) {
          throw new Error(`There was a connection problem. Try later`);
        }
        const responseData = await response[0].json();
        const responseDataFlashcard = await response[1].json();
        const itemTab = [];
        const itemTabFlashcards = [];
        for (const item in responseData) {
          itemTab.push({
            id: item,
            question: responseData[item].Ang,
            questionPol: responseData[item].Pol,
            isFavorites: false,
          });
        }
        for (const item in responseDataFlashcard) {
          itemTabFlashcards.push({
            id: item,
            flashcardPol: responseDataFlashcard[item].p1,
            flashcardAng: responseDataFlashcard[item].a1,
            flashcardTipPol: responseDataFlashcard[item].p2,
            flashcardTipAng: responseDataFlashcard[item].a2,
          });
        }
        dispatch(counterActions.updateQuestion(itemTab));
        dispatch(flashcardActions.updateFlashcard(itemTabFlashcards));
        dispatch(authActions.preventFetch());
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    if (loadFetch === false) {
      fetchData();
    }
  }, []);

  return (
    <>
      {isLoading && !loadFetch && <Loading />}
      {error && <Errorr />}
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
                    Add special question to favorites, and back to them anytime!
                  </p>
                </div>
              </Box>
              <Box>
                <RiNumber4 className="number" />
                <div>
                  <h4>Flashcards</h4>
                  <p>Check out the flashcards and learn new vocabulary words</p>
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
};
export default HomePageAuth;
