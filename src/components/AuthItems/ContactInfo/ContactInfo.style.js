import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  right: 5vw;
  top: 70vh;
  width: 300px;
  padding: 20px;
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
`;
