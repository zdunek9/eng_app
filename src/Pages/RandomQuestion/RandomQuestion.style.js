import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 81px);
  position: relative;
  padding: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 1400px) {
    padding: 1vw;
  }
`;
export const MainWrapper = styled.div`
  padding: 50px;
  width: 100%;
  margin-right: 20vw;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3rem;
    text-align: center;
  }
  h2 {
    text-align: center;
    font-style: italic;
    font-weight: 400;
  }
  span {
    font-size: 4.5rem !important;
    margin: 30px;
    display: flex;
    justify-content: space-around;
    width: 30vw;
    text-align: center;
  }
  span > * {
    cursor: pointer;
  }

  .rollingItem {
    animation: spin 0.7s ease;
  }
  .active {
    color: var(--greenColor);
  }
  .dailyWrapper {
    position: absolute;
    bottom: 0;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 1400px) {
    width: 100vw;
    margin-right: 0;

    h1 {
      font-size: 2rem;
    }
  }
  span {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    padding: 50px 50px;
    width: 70%;
    span {
      font-size: 3rem;
      margin: 30px 0;
    }
  }
`;
