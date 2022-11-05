import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 81px);
  position: relative;
  padding: 5vw;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;
export const NoItemsInformation = styled.p`
    position: absolute;
    top:40%;
    left:50%;
    text-align: center;
    transform: translate(-50%, -50%);
    font-size: 2rem;
`
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    position: relative;
  }
  p {
    margin: 40px;
    font-size: 1.8rem;
  }
  @media (max-width: 1000px) {
    margin-top: 10vh;
    p {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 600px) {
    p{
      margin: 10px;
      font-size: 1rem;
    }
    div{
      div{
        /* border:1px solid black; */
        width: 80px;
        height: 80px;
      }
    }
  }
`;
