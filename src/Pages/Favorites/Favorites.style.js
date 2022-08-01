import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 81px);
  position: relative;
  padding: 5vw;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  p {
    margin-top: 10vh;
    text-align: center;
    font-size: 2rem;
  }
`;
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    position: relative;
  }
  p {
    margin: 40px;
    font-size: 1.8rem;
  }
  @media (max-width: 1000px) {
    margin-top: 10vh;
    p {
      font-size: 1.5rem;
    }
  }
`;
