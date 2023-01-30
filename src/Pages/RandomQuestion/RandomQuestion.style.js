import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 81px);
  position: relative;
  padding: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  /* justify-content: flex-end; */
  flex-wrap: wrap;
  @media (max-width: 1400px) {
    padding: 1vw;
  }
`;
export const MainWrapper = styled.div`
  padding: 50px;
  width: 100%;
  margin-right: 15vw;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2rem;
    text-align: center;
  }
  h3 {
    text-align: center;
    font-weight: 400;
  }
  span {
    font-size: 4rem !important;
    margin: 40px;
    display: flex;
    justify-content: space-around;
    width: 15vw;
    text-align: center;
  }
  span > * {
    cursor: pointer;
    color: var(--biggerFont);
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
    margin-right: 25vw;

    h1 {
      font-size: 2rem;
    }
  }
  span {
    font-size: 3rem;
  }
  @media (max-width: 1000px) {
    margin-right: 0;
    span {
      width: 30vw;
    }
  }
  
  @media (max-width: 600px) {
    padding: 50px 50px;
    margin-top: 15vw;
    width: 100%;
    h1{
      font-size: 1.5rem;
    }
    span {
      font-size: 2rem;
      margin: 0;
      width: 50vw;
    }
  }
`;
export const HearthWrapper = styled.div`
position: absolute;
top:-10px;
right: 5%;
width: 100px;
height: 100px;

`