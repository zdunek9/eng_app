import styled from "styled-components";

export const HearthIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  input {
    display: none;
  }

  .like {
    display: block;
    width: 100px;
    height: 100px;
    cursor: pointer;
    border-radius: 999px;
    overflow: visible;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }

  .hearth {
    background-image: url("https://assets.codepen.io/23500/Hashflag-AppleEvent.svg");
    background-size: calc(100px * var(--frames)) 100px;
    background-repeat: no-repeat;
    background-position-x: calc(100px * (var(--frames) * -1 + 2));
    background-position-y: calc(100px * 0.02);
    width: 100px;
    height: 100px;
  }

  input:checked + .hearth {
    animation: like 1s steps(calc(var(--frames) - 3));
    animation-fill-mode: forwards;
  }

  @keyframes like {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: calc(100px * (var(--frames) * -1 + 3));
    }
  }

  .like:hover {
    background-color: #e1255e15;
    .hearth {
      background-position-x: calc(100px * (var(--frames) * -1 + 1));
    }
  }
  @media (max-width: 600px) {
    .like:hover {
      background-color: unset;
    }
  }
`;
