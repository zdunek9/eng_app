import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 81px);
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  align-items: center;
`;
export const PartingWrapper = styled.div`
  border-bottom: 1px solid var(--greyColor);
  padding-bottom: 20px;
`;
export const PartingWrapperSecond = styled.div`
  padding-top: 20px;
`;
export const WelcomeScreen = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 100px 370px 0px 45px;

  h1 {
    font-size: 2.6rem;
    margin: 0;
    padding: 0;
  }
  h3 {
    color: var(--greyColor);
    font-weight: 300;
    font-size: 1.1rem;
  }
  b {
    color: black;
  }
  @media (max-height: 800px) {
    margin-top: 50px;
  }
  @media (max-width: 1000px) {
    margin: 70px 45px;
  }
  @media (max-width: 600px) {
    margin: 110px 20px 0px 20px;
    h1 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
`;
export const BoxWrapper = styled.div`
  display: flex;
  margin-top: 60px;
  min-width: 550px;
  margin: auto;

  .number {
    font-size: 7rem;
    padding: 0;
    margin-right: 10px;
    color: #397393;
    min-width: 40px;
  }
  @media(max-width: 1350px){
    flex-wrap: wrap;

  }
  @media (max-width: 1000px) {
    width: 500px;
    justify-content: center;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    min-width: unset;
    width: unset;
    .number {
      font-size: 2.5rem;
    }
  }
`;
export const Box = styled.div`
  border: 1px solid var(--greyColor);
  width: 230px;
  height: 160px;
  padding: 20px;
  margin: 10px;
  display: flex;
  align-items: flex-start;
  div {
    border-bottom: none;
    display: flex;
    flex-direction: column;
  }
  h4 {
    font-size: 0.9rem;
    margin: 0;
    color: var(--greyColor);
  }
  p {
    font-size: 0.9rem;
    font-weight: 600;
  }

  @media (max-width: 700px) {
    align-items: center;
    width: 80%;
    height: 100px;
    padding: 5px;
    font-size: 0.8rem;
    p{
      margin: 5px 0;
    }
  }
`;
export const ProgressWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 700px) {
    display: none;
  }
`;
