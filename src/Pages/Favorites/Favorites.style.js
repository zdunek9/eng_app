import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
  position: relative;
`;
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  div {
    display: flex;
    align-items: center;
    position: relative;
  }
  p {
    margin: 40px;
    font-size: 1.8rem;
  }
`;
