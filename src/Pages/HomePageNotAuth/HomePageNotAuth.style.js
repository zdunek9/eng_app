import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  /* width: 1800px; */
  justify-content: center;
  align-items: center;
background: rgb(255,255,255);
background: linear-gradient(162deg, rgba(255,255,255,1) 70%, rgba(190,219,245,1) 70%);
  padding: 80px;
  text-align: center;
  img {
    height: 60vh;
    border-radius: 20px;
    width: 50%;
    object-fit: contain;
  }
  h1 {
    margin: 50px 0;
    font-family: "Inter", sans-serif;
  }
  h2{
    margin: 20px 0;
    color:var(--greyColor);
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
`;
export const WrapperCenter = styled.div`
  padding: 40px;
  width: 50%;
  font-size: 1.2rem;
`;

export const MobileInfo = styled.div`
  width: 100%;
  background-color:var(--biggerFont);
  color:var(--titleFontColor);
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6vh;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: 600;
  p{
    padding:0 50px;
    font-size: 1.5rem;
  }
`;
