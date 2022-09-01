import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  p {
    margin: 0;
    margin-right: 5vw;
    width: 120px;
    padding: 0;
    font-size: 1.2rem;
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
`;
export const Verified = styled.span`
  color: ${(props) =>
    props.emailVerified ? "var(--greenColor)" : "var(--redColor)"};
  font-size: 2.5rem;
  display: flex;
  margin-right: 5vw;
`;
export const SendBtn = styled.span`
  font-size: 1.3rem;
  border-bottom: 1px solid var(--lines);
  padding: 0 10px;
  cursor: pointer;
  color: ${(props) =>
    props.success ? "var(--greenColor)" : "var(--redColor)"};
`;
export const SectionRow = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  border-radius: 20px;

  &:hover {
    background-color: #bedbf3;
  }
`;
