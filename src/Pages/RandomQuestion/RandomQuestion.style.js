import styled from "styled-components";

export const Wrapper = styled.div`
  height: 90vh;
  width: 100vw;
    position: relative;
  
`;
export const MainWrapper = styled.div`
  max-width: 90vw;
  padding: 50px 80px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  span > *{
    padding: 0 30px;
  }
  .rollingItem {
    animation: spin 1s ease;
  }
  .active{
    color: green;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
