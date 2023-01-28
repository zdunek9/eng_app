import styled from "styled-components";

export const Blur = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: #cee4ef;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    display: block;
  }
`;

export const Message = styled.div`
  width: 300px;
  height: 200px;
  @media screen and (max-width: 700px) {
    position: relative;
    top: 200px;
    margin: auto;
  }
`;
