import styled from "styled-components";

export const Wrapper = styled.div`
  height: 80px;
  width: 100%;
  margin: 0;
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
  a{
    margin: 0;
  padding: 20px;
  font-size: 1.5rem;
  cursor: pointer;
  position: relative;
  opacity: 0.6;
  }

  a::before {
    content: "";
    left: 0;
    bottom: -7px;
    position: absolute;
    width: 100%;
    border-bottom: 3px solid rgb(77, 77, 77);
    display: none;
  }
  a:hover::before {
    display: block;
    opacity: 1;
  }
  .activeClass{
    opacity: 1;
    font-weight: 600;
  }
`;

export const TabLoggLast = styled.button`
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  position: relative;
  opacity: 0.6;
  border-radius: 30px;
  padding: 15px 30px;
  height: auto;
  background-color: rgb(204, 204, 0);
  opacity: 1;
  font-weight: 600;
  &:last-child:hover::before {
    display: none;
  }
  &:last-child:hover {
    background-color: rgb(220, 220, 0);
  }
`;
