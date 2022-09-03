import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 81px);
  position: relative;
  padding: 5vw;
  display: flex;
  flex-direction: row;
  overflow-y: auto;
`;
export const Category = styled.div`
display: flex;
flex-direction: column;
  width: 10vw;
  padding: 20px 0;
  height: 100%;
  border-right: 1px solid var(--lines);
  font-size: 1.5rem;
  div{
    margin: 30px 0;
    padding:10px;
    transition: 0.3s;
    cursor: pointer;
  }
`;
export const Details = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 50px;

`;
