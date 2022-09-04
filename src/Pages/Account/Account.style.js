import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 81px);
  position: relative;
  padding: 3vw;
  display: flex;
  flex-direction: row;
  overflow-y: auto;
  @media (max-width: 1500px) {
    padding:3vw 1vw;
}
@media (max-width: 600px) {
    margin: 100px 0;
}
`;
export const Category = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 10px;
  height: 100%;
  border-right: 1px solid var(--lines);
  font-size: 1.5rem;
  div {
    margin: 30px 0;
    padding: 10px;
    transition: 0.3s;
    cursor: pointer;
  }

  @media(max-width:600px){
    padding:100px 10px;
    font-size: 1.3rem;
    div{
      margin:30px 0;
      padding:10px;
    }
  }
`;
export const Details = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 50px;
  @media(max-width:600px){

    padding: 20px;
  }
`;
