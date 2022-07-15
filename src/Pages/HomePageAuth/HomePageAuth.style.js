import styled from "styled-components";

export const Wrapper = styled.div`
  height: 90vh;
  position: relative;
  width: 100vw;
  .number {
    font-size: 7rem;
    padding: 0;
    margin-right: 10px;
    color: #397393;
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
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 50px;
  top: 10vh;
  left: 5vw;
  font-size: 1.7rem;
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
`;
export const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60vw;
  font-size: 1rem;
  border-bottom: none !important;
  margin-top: 60px;
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
`;
