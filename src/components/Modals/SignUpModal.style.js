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
  padding: 20px;
  top: 50%;
  left: 50%;
  width: 60vw;
  max-width: 1000px;
  min-width: 600px;
  height: 60vh;
  max-height: 1000px;
  min-height: 600px;
  background-color: #cee4ef;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;
  box-shadow: -1px 8px 19px -1px rgb(86, 105, 126);
  z-index: 1;
  img {
    height: 95%;
    width: 45%;
    border-radius: 10px;
    object-fit: cover;
    object-position:-100px;
  }
  .AiOutlineClose{
    z-index: 2;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 4rem;
    cursor: pointer;
  }
  .btn {
    position: absolute;
    bottom: 30px;
    right: 3vw;
    font-size: 1.2rem;
    padding: 10px 30px;
    color: black;
    cursor: pointer;
    user-select: none;
  }
  @media screen and (max-width: 1200px) {
    top: 0;
    left: 0;
    width: 100vw;
    max-width: unset;
    min-width: unset;
    max-height: unset;
    height: 100vh;
    background-color: #cee4ef;
    transform: unset;
    border-radius: unset;
    padding: 0;
    img {
      object-fit: cover;
      object-position: -100px;
    }
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    img {
      display: none;
    }
    .btn {
      position: relative;
      bottom: 30px;
      right: 3vw;
      font-size: 1.2rem;
      padding: 10px 30px;
      color: black;
      cursor: pointer;
      user-select: none;
    }
  }
`;
