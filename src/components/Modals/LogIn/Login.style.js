import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
  margin-top: 60px;
  text-align: left;
  form {
    margin-top: 20px;
    width: 70%;
    display: flex;
    flex-direction: column;
  }
  h3 {
    width: 70%;
    margin: 0;
    color: var(--notAvaliableGray);
    font-size: 0.9rem;
    font-weight: 400;
  }
  h1 {
    width: 70%;
    margin: 40px 10px 20px 0;
  }
  span {
    cursor: pointer;
    font-weight: 600;
    color: var(--buttonBlue);
  }
  input {
    width: 100%;
    outline: unset;
    margin: 15px 0;
    padding: 10px 5px;
    border: none;
    opacity: 0.7;
    border-bottom: 2px solid var(--notAvaliableGray);
    background-color: unset;
    font-size: 15px;
  }
  input:focus {
    opacity: 1;
  }
  button {
    width: 100%;
    padding: 10px 25px;
    margin: 10px 0;
    background-color: var(--buttonBlue);
    border: 0;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
  button:hover {
    background-color: var(--buttonBlueHover);
  }
  button:disabled {
    color: red;
  }
  .errorInput {
    border-bottom: 2px solid var(--redColor);
  }
  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
  }
`;

export const ErrorMsgForgotPwd = styled.div`
  position: relative;
  height: 90px;
  div {
    font-size: 0.8rem;
    position: absolute;
    left: 0;
    bottom: 0px;
    color: var(--redColor);
  }
  .success {
    color: var(--greenColor);
  }
  svg {
    font-size: 24px;
    color: var(--redColor);
    position: absolute;
    top: 25px;
    right: 10px;
  }
  @media (max-width: 350px) {
    height: 100px;
  }
`;

export const ForgotPwd = styled.p`
  display: inline;
  color: var(--greyColor);
  cursor: pointer;
  margin-top: -10px;
`;

export const ErrorMsgLogin = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: var(--redColor);
`;
