import ContactInfo from "../../components/AuthItems/ContactInfo/ContactInfo";
import DailyProgres from "../../components/AuthItems/DailyProgres/DailyProgres";
import {
  WelcomeScreen,
  Wrapper,
  Box,
  BoxWrapper,
  PartingWrapper,
  PartingWrapperSecond,
} from "./HomePageAuth.style";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../../Redux/counterSlice";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";

const URL = `${process.env.REACT_APP_DB}`;
const HomePageAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
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
    };
    fetchData();
  }, [dispatch]);
  return (
    <Wrapper>
      <WelcomeScreen>
        <PartingWrapper>
          <h1>Welcome to myapp1</h1>
          <h3>
            Start learning English using my website. Visit
            <b> Random Question</b> and create your <b>Favirites!</b>
          </h3>
        </PartingWrapper>
        <PartingWrapperSecond>
          <h3>Complete your daily goal, for better learning.</h3>
          <h3>
            <b>Learn how to use</b>
          </h3>
          <BoxWrapper>
            <Box>
              <RiNumber1 className="number" />
              <div>
                <h4>What and Why?</h4>
                <p>
                  Answer in your head or discuss with your frends about
                  questions
                </p>
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
          </BoxWrapper>
        </PartingWrapperSecond>
      </WelcomeScreen>
      <DailyProgres />
      <ContactInfo />
    </Wrapper>
  );
};
export default HomePageAuth;
