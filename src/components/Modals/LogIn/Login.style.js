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
    margin-top: 20px;
    width: 65%;
    height: 500px;
    display: flex;
    flex-direction: column;
  }
  h3 {
    width: 65%;
    margin: 0;
    color: #b1b0b4;
    font-size: 0.9rem;
    font-weight: 400;
  }
  h1 {
    width: 65%;
    margin: 40px 10px 20px 0;
  }
  span {
    cursor: pointer;
    font-weight: 600;
    color: #5779cb;
  }
  input {
    outline: unset;
    margin: 15px 0;
    padding: 10px 5px;
    border: none;
    opacity: 0.6;
    border-bottom: 1px solid var(--greyColor);
    background-color: unset;
    font-size: 15px;
  }
  input:focus {
    opacity: 1;
  }
  button {
    width: 100%;
    padding: 10px 25px;
    margin: 20px 0;
    background-color: #5779cb;
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
    display: inline;
    cursor: pointer;
    color: #5779cb;
    font-style: italic;
    margin-top: 0;
  }
  .errmsg {
    color: red;
  }
  .offscreen {
    position: absolute;
    left: -9999px;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
  }
  @media (max-height: 900px) {
    h1 {
      margin: 10px 0;
    }
  }
`;
