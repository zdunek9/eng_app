import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 81px);
  position: relative;
  padding: 5vw;
  display: flex;
  align-items: center;
  color: red;
  text-align: center;

  span {
    padding: 20px;
    font-size: 7rem;
  }
  span:first-child {
    animation: forward 1s infinite linear;
  }
  span:last-child {
    animation: back 1s infinite linear;
  }
  @keyframes forward {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes back {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
`;
