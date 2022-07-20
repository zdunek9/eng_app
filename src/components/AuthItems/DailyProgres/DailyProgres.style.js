import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  right: 5vw;
  top: 0;
  width: 300px;
  padding: 20px;
  font-size: 1.3rem;
  border: 2px solid rgb(179, 179, 179);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background-color: none;
  align-items: center;
  /* overflow: hidden; */
  font-weight: 600;
  p {
    margin: 10px;
    text-align: center;
  }
  @media screen and (max-width:1400px) {
  top:5vh;
  right:1vw;    
  font-size: 1rem;
  }
  @media screen and (max-width:1000px) {
    position: relative;
  top:0;
  bottom:none;
  right:none;
  left: none;
  width: 80%;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
export const ContainerProgres = styled.div`
  height: 20px;
  width: 100%;
  background-color: #cee4ef;
  border-radius: 50px;
  margin: 10px;
  div {
    height: 100%;
    width: ${(props) => props.progressCounter * 20}%;
    background-color: #74abc9;
    border-radius: inherit;
    text-align: right;
    transition: "width 1s ease-in-out";
  }
  span {
    padding: 5px;
    color: red;
    font-weight: bold;
  }
`;

export const CongratsWrapper = styled.div`
  animation: showUp 2s 5s forwards;
  opacity: 0;
  p:first-child {
    font-size: 2rem;
  }
  @keyframes showUp {
    100% {
      opacity: 1;
    }
  }
`;
export const SecondCongratsWrapper = styled.div`
  p:first-child {
    font-size: 2rem;
  }
  opacity: 1;
`;
export const NiceModal = styled.div`
  animation: show 2s forwards;
  opacity: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  p {
    font-size: 2rem;
    margin: 0;
    letter-spacing: 3px;
  }
  @keyframes show {
    100% {
      opacity: 0;
    }
  }
`;
export const KeepModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  text-align: center;
  animation: keepAnswering 3s 2s forwards;
  @keyframes keepAnswering {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
