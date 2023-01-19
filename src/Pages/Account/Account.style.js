import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 81px);
  position: relative;
  padding: 3vw;
  display: flex;
  flex-direction: column;
  @media (max-width: 1500px) {
    padding: 3vw 1vw;
  }
  @media (max-width: 600px) {
    margin: 100px 0;
  }
`;
export const Category = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 0px;
  div {
    cursor: pointer;
    border: 1px solid var(--visibleBorder1);
    border-radius: 10px;
    background-color: #eef3f7;
  }

  @media (max-width: 600px) {
    height: unset;
    justify-content: space-around;
    align-items: flex-start;
    div {
      width: 100%;
      text-align: center;
      font-size: 1.2rem;
    }
  }
`;
export const Details = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 50px;
  @media (max-width: 600px) {
    padding: 0px;
  }
`;
