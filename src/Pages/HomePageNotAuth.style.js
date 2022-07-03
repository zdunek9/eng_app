import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  padding: 80px;
  text-align: center;
  img {
    height: 60vh;
    border-radius: 20px;
    width: 50%;
  }
  div {
    padding: 40px;
    width: 50%;
    font-size: 1.2rem;
  }
  h1 {
    margin: 50px 0;
    font-family: 'Inter', sans-serif;
  }
  span {
    position: relative;
    display: inline-flex;
    width: 300px;
    height: 90px;
    margin: 0 15px;
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
    border: 5px solid black;
    box-sizing: border-box;
    border-radius: 5px;
  }
  span a:before {
    color: #fff;
    background: #000;
    transform: rotateY(0deg) translateZ(45px);
  }
  span a:after {
    color: #000;
    transform: rotateX(90deg) translateZ(45px);
  }
  span a:hover {
    transform: translateZ(45px) rotateX(-90deg);
  }
`;
