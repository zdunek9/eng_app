import styled from "styled-components";

export const Wrapper = styled.div`
  height: 90vh;
  width: 100%;
  font-family: "Inter", sans-serif;
`;
export const MainWrapper = styled.div`
  max-width: 90vw;
  padding: 40px;
  position: absolute;
  top:60%;
  left:50%;
  transform: translate(-50%, -50%) ;
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
    display: block;
    text-align: center;
    font-size: 4rem;
    margin: 80px;
  }
  div {
  }
`;
