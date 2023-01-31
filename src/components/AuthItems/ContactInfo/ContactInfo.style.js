import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 250px;
  width: 300px;
  height: 150px;
  padding: 15px;
  font-size: 1.3rem;
  border: 2px solid rgb(179, 179, 179);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: none;
  p {
    margin: 0;
    font-size: 2rem;
  }

  span {
    margin: 0 10px;
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

  @media (max-width: 1000px) {
    right: none;
    top: none;
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
