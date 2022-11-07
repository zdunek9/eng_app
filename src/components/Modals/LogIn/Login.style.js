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
    margin: 10px 10px 20px 0;
  }
  .sendStatus {
    align-self: flex-start;
    padding: 0px 15px;
    font-size: 1.1rem;
    background-color: lightpink;
    width: 80%;
    margin: 15px 0px 30px 0;
    font-style: italic;
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
  #emailReset {
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
    width: 80%;
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
    color: firebrick;
    font-weight: bold;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    width: 50%;
    cursor: pointer;
  }
  .errmsg:nth-child(1) {
    background-color: lightpink;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    #email {
      width: 100%;
    }
    #password {
      width: 100%;
    }
    #emailReset {
      width: 100%;
    }
    .sendPassword {
      width: 70vw;
    }
    button {
      width: 100%;
    }
  }
  @media (max-height: 900px) {
    h1 {
      margin: 10px 0;
    }
    h3 {
      margin:15px 5px 0px 5px;
    }
    .sendStatus {
      font-size: 1rem;
      margin-top: 10px;
    }
    #email {
      padding: 10px 25px;
      margin: 5px 0;
    }
    #emailReset {
      padding: 10px 25px;
      margin: 5px 0;
    }
    #password {
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
