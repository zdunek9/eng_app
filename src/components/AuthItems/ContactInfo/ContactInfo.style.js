import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  right: 5vw;
  top: 55vh;
  width: 300px;
  padding: 15px;
  font-size: 1.3rem;
  border: 2px solid rgb(179, 179, 179);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: none;
  p {
    margin: 20px;
    font-size: 2rem;
  }

  span {
    margin: 20px;
    font-size: 3rem;
    cursor: pointer;
  }
  span:last-child {
    color: #0e76a8;
  }
  div {
    display: flex;
    justify-content: space-around;
  }
  @media (max-width: 1400px) {
    right: 1vw;
    width: 200px;
    top: 60vh;
    p {
      font-size: 1.2rem;
    }
    span {
      font-size: 2rem;
    }
  }
  @media (max-width: 1000px) {
    right: none;
    top: none;
    width: 200px;
    font-size: 1.1rem;
    position: unset;
    span {
      margin: 5px;
    }
  }
  @media (max-width: 600px) {
    p {
      font-size: 1rem;
    }
  }
`;
