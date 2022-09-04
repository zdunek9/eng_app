import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px;
  .success {
    color: var(--greenColor);
    font-size: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  h1 {
    margin: 0px 10px 50px 0;
  }
  input {
    width: 30%;
    padding: 10px 20px;
    margin: 10px 0px 20px 0;
    border-radius: 5px;
    border: 1px solid #9ca0ac;
    background-color: #f6f4f4;
    font-size: 16px;
  }
  button {
    width: 30%;
    padding: 10px 20px;
    margin: 10px 0px 20px 0;
    background-color: rgb(61, 48, 41);
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
    background-color: rgb(92, 72, 61);
  }
  h3 {
    margin: 20px 0;
    color: #9ca0ac;
    font-weight: 400;
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
  @media screen and (max-width: 1000px) {

    input {
      width: 80%;
    }
    button {
      width: 80%;
    }
  }
  @media screen and (max-width: 700px) {
    input {
      width: 100%;
    }
    button {
      width: 100%;
    }
  }
`;
