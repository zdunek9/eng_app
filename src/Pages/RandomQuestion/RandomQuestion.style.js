import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 81px);
  position: relative;
  padding: 5vw;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap:wrap;
`;
export const MainWrapper = styled.div`
  padding: 120px 80px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
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
    font-size: 4rem;
    display: inline-block;
    margin: 30px;
    cursor: pointer;
  }
  span > * {
    padding: 0 30px;
  }
  .rollingItem {
    animation: spin 0.7s ease;
  }
  .active {
    color: green;
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

  @media screen and (max-width: 1400px) {
    padding-left: 0;
    width: 50vw;
    h1 {
      font-size: 2rem;
    }
  }
  span {
    font-size: 3rem;
  }
  @media screen and (max-width: 600px) {
    /* margin-top: 10vh; */
    padding: 50px 50px;
    width: 70%;
    span {
    font-size: 3rem;
    margin:30px 0;
  }
  }
`;
