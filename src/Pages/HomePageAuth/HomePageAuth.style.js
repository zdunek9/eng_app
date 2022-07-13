import styled from "styled-components";

export const Wrapper = styled.div`
  height: 90vh;
  position: relative;
  /* width: 1800px; */
  /* width: 100%; */
  width: 100vw;
`;

export const WelcomeScreen = styled.div`
position: absolute;
display: flex;
align-items: center;
padding:50px;
top:10vh;
font-size: 1.7rem;
font-family: 'Inter', sans-serif;
img{
  width: 500px;
  margin:50px;
  border-radius: 30px;
}
`;
