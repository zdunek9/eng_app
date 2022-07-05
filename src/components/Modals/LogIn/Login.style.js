import styled from "styled-components";

export const Wrapper = styled.div`
    height: 95%;
    width: 45%;
    position: relative;
    font-size: 15px;
    border-radius: 10px;
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
  h3 {
    margin: 20px 0;
    color: #9ca0ac;
    font-weight: 400;
  }
  p{
    color:red;
    font-style: italic;
    margin-top:0;
  }
`;
