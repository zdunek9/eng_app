import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  right: 5vw;
  top: 60vh;
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
  @media(max-width: 1400px) {
    right: 1vw;
    top: 60vh;
    p {
      font-size: 1.3rem;
    }
    span {
      font-size: 2rem;
    }
  }
  @media(max-width: 1000px) { 
  right:none;
  top: none;
  width: 200px;
  font-size: 1.3rem;
  position: unset;
  }
  @media (max-width: 600px) {
    p{
      font-size: 1rem;
    }
    span{
      font-size: 1.5rem;
    }
  }

`;
