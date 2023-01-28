import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
  margin-top: 100px;
  text-align: left;
  form {
    position: relative;
    height: 400px;
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
    margin: 15px 0;
    background-color: var(--buttonBlue);
    border: 0;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
  button:disabled {
    background-color: grey;
    cursor: auto;
  }
  button:disabled:hover {
    background-color: grey;
  }
  button:hover {
    background-color: var(--buttonBlueHover);
  }
  .errorInput {
    border-bottom: 2px solid var(--redColor);
  }
  @media (max-width: 700px) {
    margin-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  p {
    margin: 0;
    margin-top: -10px;
    font-size: 0.8rem;
    color: var(--redColor);
  }
`;
export const IconWrapper = styled.span`
  position: absolute;
  top: 22px;
  right: 20px;
  font-size: 1.3rem;
`;

export const ErrorMsgLogin = styled.p`
  margin: 0px;
  position: absolute;
  bottom: 95px;
  left: 0px;
  color: var(--redColor);
`;

export const HintImage = styled.img`
  position: absolute;
  cursor: pointer;
  left: -45px;
  top: 20px;
  height: 30px !important;
  width: 30px !important;
`;
export const HintWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  border-radius: 10px;
  font-size: 0.8rem;
  font-style: italic;
  background-color: white;
`;
