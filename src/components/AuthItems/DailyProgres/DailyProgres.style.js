import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  right: 5vw;
  top: 15vh;
  width: 300px;
  padding: 20px;
  font-size: 1.3rem;
  border: 2px solid rgb(179, 179, 179);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight:600;
  p {
    margin: 10px;
  }
`;
export const ContainerProgres = styled.div`
  height: 20px;
  width: 100%;
  background-color: white;
  border-radius: 50px;
  margin: 10px;
  div {
    height: 100%;
    width: 65%;
    background-color: #00247d;
    border-radius: inherit;
    text-align: right;
    transition: 'width 1s ease-in-out',
  }
  span {
    padding: 5px;
    color:red;
    font-weight: bold;
  }
`;
