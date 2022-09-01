import styled from "styled-components";

export const ConfirmModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(10px);
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    padding:20px;
    border:1px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    background-color: var(--background3);
    p {
      width: 100%;
      /* border:1px solid black; */
    }
    button{
        margin: 40px 20px 0 20px;
    }
  }
`;
