import styled from "styled-components";

export const Wrapper = styled.div`
  height: 95%;
  width: 45%;
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 15px;
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
  #password {
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
  button:hover {
    background-color: rgb(92, 72, 61);
  }
  p {
    color: red;
    font-style: italic;
    margin-top: 0;
  }
  .offscreen {
    position: absolute;
    left: -9999px;
  }
  .errmsg {
    background-color: lightpink;
    color: firebrick;
    font-weight: bold;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    width: 70%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    #email {
      width: 80vw;
    }
    #password {
      width: 80vw;
    }
    button {
      width: 100%;
    }
  }
`;
