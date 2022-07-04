import styled from "styled-components";

export const Wrapper = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(179, 179, 179);

  p {
    margin: 0;
    font-size: 2.5rem;
  }
  button {
    padding: 20px;
    border: none;
    height: 100%;
    background-color: unset;
    font-size: 1.5rem;
    cursor: pointer;
    position: relative;
    opacity: 0.6;
  }
  button:last-child {
    border-radius: 30px;
    padding: 15px 30px;
    height: auto;
    background-color: rgb(204, 204, 0);
    opacity: 1;
    font-weight: 600;
  }
  button:last-child:hover::before {
    display: none;
  }
  button:last-child:hover{
    background-color:rgb(220, 220, 0);
  }
  button::before {
    content: "";
    left: 0;
    bottom: -2px;
    position: absolute;
    width: 100%;
    border-bottom: 3px solid rgb(77, 77, 77);
    display: none;
  }
  button:hover::before {
    display: block;
    opacity: 1;
  }
`;
