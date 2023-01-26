import styled from "styled-components";

export const BlurWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(10px);
  z-index: 1;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 1200px) {
    backdrop-filter: unset;
  }
`;
export const Wrapper = styled.div`
  position: absolute;
  padding: 0px;
  top: 50%;
  left: 50%;
  width: 65vw;
  max-width: 1000px;
  min-width: 600px;
  height: 90vh;
  max-height: 1100px;
  min-height: 650px;
  background-color: #cee4ef;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  display: flex;
  box-shadow: -1px 8px 19px -1px rgb(86, 105, 126);
  z-index: 1;
  overflow: hidden;
  img {
    height: 101%;
    width: 50%;
    border-radius: 5px;
    object-fit:cover;
  }
  .AiOutlineClose {
    z-index: 2;
    position: absolute;
    top: 20px;
    right: 8px;
    font-size: 3rem;
    cursor: pointer;
  }
  @media screen and (max-width: 1200px) {
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    max-width: unset;
    min-width: unset;
    max-height: unset;
    background-color: #cee4ef;
    transform: unset;
    border-radius: unset;
    padding: 0;

  }
  @media(max-width: 700px) {
    flex-direction: column;
    img {
      display: none;
    }
    .AiOutlineClose {
    top: 40px;
    right: 20px;
    font-size: 2.5rem;
  }
  }
`;
