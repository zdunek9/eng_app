import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 5vw;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 8vh;

  .number {
    font-size: 7rem;
    padding: 0;
    margin-right: 10px;
    color: #397393;
  }
  @media screen and (max-width: 1000px) {
  }
`;
export const PartingWrapper = styled.div`
  border-bottom: 1px solid var(--greyColor);
  padding-bottom: 50px;
`;
export const PartingWrapperSecond = styled.div`
  padding-top: 50px;
`;
export const WelcomeScreen = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  font-family: "Inter", sans-serif;
  h1 {
    font-size: 3rem;
    margin: 0;
    padding: 0;
  }
  h3 {
    color: var(--greyColor);
    font-weight: 300;
    font-size: 1.3rem;
  }
  b {
    color: black;
  }
  @media screen and (max-width: 1200px) {
    left: 5vw;
    top: 15vh;
    padding: 0;
    h1 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1rem;
      margin: 0;
      padding: 0;
    }
  }

`;
export const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60vw;
  font-size: 1rem;
  border-bottom: none !important;
  margin-top: 60px;
  @media screen and (max-width: 1000px) {
    width: 90vw;
  }
`;
export const Box = styled.div`
  border: 1px solid var(--greyColor);
  width: 15vw;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  div {
    border-bottom: none;
    display: flex;
    flex-direction: column;
  }
  h4 {
    margin: 0;
    color: var(--greyColor);
  }
  p {
    font-weight: 600;
  }
  @media (max-width: 1000px) {
    width: 25vw;
    padding: 10px;
  }
  @media (max-width: 600px) {
    h4{
      font-size: 0.8rem;
    }
    p{
      font-size: 0.6rem;
    }
  }
`;
export const ProgressWrapper = styled.div`
display: flex;
justify-content: space-between;
margin-top: 50px;
`