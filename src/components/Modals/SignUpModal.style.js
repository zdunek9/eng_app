import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  padding:20px;
  top: 50%;
  left: 50%;
  width: 60vw;
  max-width: 1000px;
  min-width: 600px;
  height: 60vh;
  max-height: 1000px;
  min-height: 600px;
  background-color: #f3e6e8;
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
    bottom:30px;
    right:120px;
    font-size: 1.2rem;
    padding: 10px 30px;
    color: black;
    transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
    cursor: pointer;
    user-select: none;
  }

  .btn:before,
  .btn:after {
    content: "";
    position: absolute;
    transition: inherit;
    z-index: -1;
  }

  .btn:hover {
    color: #cd98a0;
    transition-delay: 0.5s;
  }

  .btn:hover:before {
    transition-delay: 0s;
  }

  .btn:hover:after {
    background: white;
    transition-delay: 0.35s;
  }
  .from-left:before,
  .from-left:after {
    top: 0;
    width: 0;
    height: 100%;
  }

  .from-left:before {
    right: 0;
    border: 1px solid white;
    border-left: 0;
    border-right: 0;
  }

  .from-left:after {
    left: 0;
  }

  .from-left:hover:before,
  .from-left:hover:after {
    width: 100%;
  }
  .animation {
    animation: shakes 0.3s linear;
  }

  @keyframes shakes {
    0% {
      transform: translate(-47%, -50%);
    }
    25% {
      transform: translate(-53%, -50%);
    }
    50% {
      transform: translate(-47%, -50%);
    }
    75% {
      transform: translate(-53%, -50%);
    }
    100% {
      transform: translate(-47%, -50%);
    }
  }
`;

export const BlurWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(246, 244, 244, 0.8);
  backdrop-filter: blur(2px);
  z-index: 1;
  width: 100vw;
  height: 100vh;
`;
