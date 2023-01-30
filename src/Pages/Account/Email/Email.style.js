import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  border: 1px solid var(--visibleBorder1);
  border-radius: 15px;
  padding: 30px;

  .errMsg {
    background-color: lightpink;
    color: firebrick;
    font-weight: bold;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    width: 70%;
  }
  input {
    width: 300px;
    padding: 10px 20px;
    margin: 10px 0px 20px 28px;
    border-radius: 5px;
    border: 1px solid #9ca0ac;
    background-color: #f6f4f4;
    font-size: 16px;
    opacity: 0.7;
  }
  input:focus {
    outline: unset;
    border: 1px solid #747b8b;
    opacity: 1;
  }
  button {
    font-size: 1.1rem;
    height: 40px;
    width: 120px;
    background-color: rgb(61, 48, 41);
    border: 0;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    height: 350px;
    button {
      margin-top: 50px;
      width: 100%;
    }
    input {
      margin: 10px 0px 20px 0;
      width: 100%;
    }
  }
`;
export const Verified = styled.span`
  padding: 0;
  color: ${(props) =>
    props.emailVerified ? "var(--greenColor)" : "var(--redColor)"};
  font-size: 2.5rem;
  display: flex;
  @media (max-width: 600px) {
    margin-right: unset;
  }
`;
export const SendBtn = styled.span`
  display: inline;
  font-size: 1rem;
  padding: 5px 10px;
  cursor: pointer;
  color: ${(props) =>
    props.success ? "var(--greenColor)" : "var(--redColor)"};

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
export const SectionRow = styled.div`
  font-size: 18px;
  display: flex;
  border-radius: 20px;
  &:hover {
    background-color: #bedbf3;
  }
  &:hover {
    background-color: unset;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    div {
      display: flex;
      align-items: center;
    }
  }
`;
export const VerifySection = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  p:first-child {
    font-size: 18px;
    margin: 0;
  }
  p:last-child {
    width: 70%;
    text-align: center;
    font-size: 0.9rem;
  }
`;
