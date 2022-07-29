import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 81px);
  justify-content: center;
  padding: 0 20px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    162deg,
    rgba(255, 255, 255, 1) 70%,
    rgba(190, 219, 245, 1) 70%
  );
  img {
    border-radius: 20px;
    width: 40%;
    min-width: 500px;
    object-fit: contain;
  }
  h1 {
    margin: 50px 0;
    font-family: "Inter", sans-serif;
  }
  h2 {
    margin: 20px 0;
    color: var(--greyColor);
    font-weight: 300;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 10px;
    img {
      min-width: unset;
      height: 40vh;
      width: 100%;
      object-fit: contain;
    }
    h1 {
      margin: 20px 0;
      width: 100%;
    }
    h2 {
      margin: 20px 0;
      color: var(--greyColor);
      font-weight: 300;
    }
  }
`;
export const WrapperCenter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 40%;
  font-size: 1.2rem;
  @media screen and (max-width: 900px) {
    width: 100%;
    font-size: 1rem;
    padding: 0;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.7rem;
  }
`;
export const MobileButton = styled.div`
  margin: auto;
  padding: 20px 100px;
  border-radius: 20px;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: var(--buttonColor);
  &:hover {
    background-color: #fcca6f;
  }
`;

export const MobileInfo = styled.div`
  width: 100%;
  background-color: var(--biggerFont);
  color: var(--titleFontColor);
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6vh;
  min-height: 50px;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: 600;
  p {
    padding: 0 20px;
    font-size: 1.4rem;
  }
  @media screen and (max-width: 1200px) {
    p {
      font-size: 1rem;
      padding: 0 10px;
    }
  }
  @media screen and (max-width: 900px) {
    p {
      font-size: 1rem;
      padding: 0 10px;
      text-align: center;
    }
  }
  @media screen and (max-height: 800px) {
    p {
      font-size: 0.7rem;
      padding: 0 10px;
      text-align: center;
    }
  }
  @media screen and (max-height: 600px) {
    display: none;
  }
`;
