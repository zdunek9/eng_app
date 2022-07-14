import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import {
  Wrapper,
  ContainerProgres,
  CongratsWrapper,
  NiceModal,
  KeepModal,
  SecondCongratsWrapper,
} from "./DailyProgres.style";

const DailyProgres = () => {
  const [animate, setAnimate] = useState<boolean>(false);
  const progressCounter = useSelector(
    (state: RootState) => state.progress.totalProgress
  );
  useEffect(() => {
    const checkDailyGoal = () => {
      if (window.sessionStorage.getItem("dailyGoalDone") === null) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
      if (progressCounter === 5) {
        window.sessionStorage.setItem("dailyGoalDone", "done");
      }
    };
    checkDailyGoal();
  }, [progressCounter]);

  console.log(animate);
  const animateTrue = () => {
    return (
      <>
        <CongratsWrapper>
          <p>Congrats!</p>
          <p> You have completed the daily goal.</p>
        </CongratsWrapper>
        <NiceModal>
          <p>NICE</p>
        </NiceModal>
        <KeepModal>Keep answering, dont stop!</KeepModal>
      </>
    );
  };

  const animateFalse = () => {
    return (
      <SecondCongratsWrapper>
        <p>Congrats!</p>
        <p> You have completed the daily goal.</p>
      </SecondCongratsWrapper>
    );
  };

  return (
    <Wrapper>
      {progressCounter < 5 && animate === true ? (
        <>
          <div>{progressCounter}/5</div>
          <ContainerProgres progressCounter={progressCounter}>
            <div>
              <span></span>
            </div>
          </ContainerProgres>
          <p>Daily Progress</p>
        </>
      ) : animate ? (
        animateTrue()
      ) : (
        animateFalse()
      )}
    </Wrapper>
  );
};
export default DailyProgres;
