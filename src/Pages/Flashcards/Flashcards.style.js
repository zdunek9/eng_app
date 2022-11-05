import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 81px);
  position: relative;
  padding: 10vw 5vw 5vw 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 3rem;
    text-align: center;
    margin: 0;
  }
  h2 {
    text-align: center;
    font-style: italic;
    font-weight: 600;
    margin: 0;
    margin-top: 90px;
  }
  h3 {
    font-weight: 400;
  }
  @media (max-width: 600px) {
    padding-top: 20vw;
    h1{
      font-size: 2.5rem;
    }
    h2{
      margin-top: 20px;
    }
  }
`;

export const Buttons = styled.button`
  font-size: 4rem;
  width: 300px;
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  border: none;
  transition: 0.7s;
  span {
    color: var(--greenColor);
    cursor: pointer;
    height: 64px;
  }
  span:first-child {
    color: var(--redColor);
  }
  span:hover {
    animation: bounce 1s;
  }
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;
export const NextBtn = styled.button`
  font-size: 2rem;
  border-radius: 15px;
  padding: 15px 50px;
  margin-top: 40px;
  border: none;
  cursor: pointer;
  background-color: var(--biggerFont);
  &:hover {
    background-color: #91bdd4;
  }
`;
