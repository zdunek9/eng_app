import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  h1 {
    margin: 30px 40px 50px 30px;
  }
  p {
    margin: 0;
    margin-right: 5vw;
    width: 120px;
    padding: 0;
    font-size: 1.2rem;
  }
  .errMsg {
    background-color: lightpink;
    color: firebrick;
    font-weight: bold;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    width: 70%;
  }
  input {
    width: 20vw;
    padding: 10px 15px;
    border-radius: 5px;
    border: 1px solid #9ca0ac;
    background-color: #f6f4f4;
    font-size: 16px;
  }
  button {
    font-size: 1.1rem;
    margin-top: 100px;
    height: 40px;
    width: 120px;
    background-color: rgb(61, 48, 41);
    border: 0;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
  @media screen and (max-width: 1200px) {
    input{
      width: 40vw;
    }
  }
  @media screen and (max-width: 700px) {
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      margin: 20px;
    }
    p {
      margin: 20px 0;
      margin-right: unset;
      width: auto;
      padding: 0;
      font-size: 1.5rem;
    }
    input {
      width: 100%;
    }
    button {
      width: 100%;
      margin-top: 20px;
    }
  }
`;
export const Verified = styled.span`
  color: ${(props) =>
    props.emailVerified ? "var(--greenColor)" : "var(--redColor)"};
  font-size: 2.5rem;
  display: flex;
  margin-right: 5vw;
  @media (max-width: 700px) {
    margin-right: unset;
  }
`;
export const SendBtn = styled.span`
  font-size: 1.3rem;
  border-bottom: 1px solid var(--lines);
  padding: 0 10px;
  cursor: pointer;
  color: ${(props) =>
    props.success ? "var(--greenColor)" : "var(--redColor)"};

  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;
export const SectionRow = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  border-radius: 20px;
  &:hover {
    background-color: #bedbf3;
  }
  @media (max-width: 700px) {
    justify-content: center;
    flex-direction: column;
    padding: 20px;
  }
  &:hover {
    background-color: unset;
  }
`;
