import styled from "styled-components";

export const BlurWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(3px);
  z-index: 1;
  width: 100vw;
  height: 100vh;
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
    object-position: left;
  }
  span {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 2rem;
    cursor: pointer;
  }
  .btn {
    position: absolute;
    bottom: 30px;
    right: 120px;
    font-size: 1.2rem;
    padding: 10px 30px;
    color: black;
    transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
    cursor: pointer;
    user-select: none;
  }
`;
