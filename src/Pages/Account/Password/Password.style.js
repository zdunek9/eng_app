import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--visibleBorder1);
  border-radius: 15px;
  padding: 30px;
  font-size: 18px;
  height: 350px;

  .success {
    color: var(--greenColor);
    font-size: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
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
    margin: 10px 0;
    font-size: 1.1rem;
    height: 40px;
    width: 120px;
    background-color: rgb(61, 48, 41);
    border: 0;
    border-radius: 5px;
    color: white;
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
    background-color: rgb(92, 72, 61);
  }

  .instructions {
    color: red;
    font-style: italic;
    margin-top: 0;
    font-size: 0.8rem;
    font-weight: 600;
  }
  .offscreen {
    position: absolute;
    left: -9999px;
  }

  .hide {
    display: none;
  }

  .valid {
    color: limegreen;
    margin-left: 0.25rem;
  }

  .invalid {
    color: red;
    margin-left: 0.25rem;
  }

  .errmsg {
    background-color: lightpink;
    color: firebrick;
    font-weight: bold;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    width: 70%;
  }

  .line {
    display: inline-block;
  }
  @media (max-width: 600px) {
    height: 350px;
    button {
      width: 100%;
    }
    input {
      margin: 10px 0px 20px 0;
      width: 100%;
    }
  }
`;
