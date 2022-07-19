import ContactInfo from "../../components/AuthItems/ContactInfo/ContactInfo";
import DailyProgres from "../../components/AuthItems/DailyProgres/DailyProgres";
import {
  WelcomeScreen,
  Wrapper,
  Box,
  BoxWrapper,
  PartingWrapper,
  PartingWrapperSecond,
  ProgressWrapper
} from "./HomePageAuth.style";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../Redux/counterSlice";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import Loading from "../../components/Modals/Loading/Loading";
import { RootState } from "../../Redux/store";

const URL = `${process.env.REACT_APP_DB}`;
const HomePageAuth = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const loadFetch = useSelector(
    (state: RootState) => state.counter.preventLoading
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(URL);
      const responseData = await response.json();
      const itemTab = [];
      for (const item in responseData) {
        itemTab.push({
          id: item,
          question: responseData[item].Ang,
          questionPol: responseData[item].Pol,
        });
      }
      dispatch(counterActions.updateQuestion(itemTab));
      dispatch(counterActions.rollRandomQuestion());
      dispatch(counterActions.preventFetch());
      setIsLoading(false);
    };
    if (loadFetch === false) {
      fetchData();
    }
  }, [dispatch, loadFetch]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper>
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
              </BoxWrapper>
            </PartingWrapperSecond>
          </WelcomeScreen>
          <ProgressWrapper>
            <DailyProgres />
            <ContactInfo />
          </ProgressWrapper>
        </Wrapper>
      )}
    </>
  );
};
export default HomePageAuth;
