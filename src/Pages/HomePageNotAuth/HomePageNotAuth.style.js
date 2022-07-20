import styled from "styled-components";

export const Wrapper = styled.div`
position: relative;
  display: flex;
  margin-top: 8vh;
  height: 100%;
  align-items: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    162deg,
    rgba(255, 255, 255, 1) 70%,
    rgba(190, 219, 245, 1) 70%
  );
  padding: 0 20px;
  text-align: center;
  img {
    height: 55vh;
    border-radius: 20px;
    width: 50%;
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
  span {
    position: relative;
    display: inline-flex;
    width: 300px;
    height: 90px;
    margin: 40px 15px;
    perspective: 1000px;
  }
  span a {
    font-size: 35px;
    letter-spacing: 1px;
    transform-style: preserve-3d;
    transform: translateZ(-25px);
    transition: transform 0.25s;
  }
  span a:before,
  span a:after {
    position: absolute;
    content: "Sign Up Free!";
    width: 300px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid var(--buttonColor);
    box-sizing: border-box;
    border-radius: 5px;
  }
  span a:before {
    color: #fff;
    background: var(--buttonColor);
    transform: rotateY(0deg) translateZ(45px);
  }
  span a:after {
    color: var(--buttonColor);
    transform: rotateX(90deg) translateZ(45px);
  }
  span a:hover {
    transform: translateZ(45px) rotateX(-90deg);
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 10px;
    img {
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
    span {
      display: none;
    }
  }
  @media screen and (max-height: 700px) {
    span {
      display: none;
    }
  }
`;
export const WrapperCenter = styled.div`
  padding: 30px;
  width: 50%;
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
  display: none;
  padding: 10px;
  border-radius: 20px;
  color: white;
  font-size: 1.1rem;
  background-color: var(--buttonColor);
  @media screen and (max-width: 900px) {
    display: block;
  }
  @media screen and (max-height: 700px) {
    display: block;
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
