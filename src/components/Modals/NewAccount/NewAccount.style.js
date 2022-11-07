import styled from "styled-components";

export const Wrapper = styled.div`
  height: 95%;
  width: 45%;
  position: relative;
  font-size: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
  }
  h1 {
    margin: 40px 10px 20px 0;
  }
  #email {
    width: 80%;
    padding: 15px 25px;
    margin: 10px 0px 20px 0;
    border-radius: 5px;
    border: 1px solid #9ca0ac;
    background-color: #f6f4f4;
    font-size: 16px;
  }
  input {
    width: 80%;
    padding: 15px 25px;
    margin: 10px 0px 20px 0;
    border-radius: 5px;
    border: 1px solid #9ca0ac;
    background-color: #f6f4f4;
    font-size: 16px;
  }
  button {
    width: 90%;
    padding: 15px 25px;
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
  @media screen and (max-width: 700px) {
    margin-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    #email {
      width: 80vw;
    }
    input {
      width: 80vw;
    }
    button {
      width: 100%;
    }
  }
  @media (max-height: 900px) {
    h1 {
      margin: 10px 0;
    }
    #email {
      padding: 10px 25px;
      margin: 5px 0;
    }
    #password {
      padding: 10px 25px;
      margin: 5px 0;
    }
    #confirm_pwd{
      padding: 10px 25px;
      margin: 5px 0;
    }
    button {
      padding: 10px 25px;
      margin: 5px 0;
    }
    .errmsg {
      padding: 5px;
      margin-bottom: 0.1rem;
    }
  }
`;
