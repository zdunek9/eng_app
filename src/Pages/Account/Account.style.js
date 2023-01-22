import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 81px);
  position: relative;
  padding: 3vw;
  display: flex;
  flex-direction: column;
  /* overflow-y:auto; */
  @media (max-width: 1500px) {
    padding: 3vw 1vw;
  }
  @media (max-width: 600px) {
    margin: 100px 0;
  }
`;
export const Category = styled.div`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding: 30px 0px;
    div {
      width: 100%;
      text-align: center;
      font-size: 1.2rem;
      cursor: pointer;
      border: 1px solid var(--visibleBorder1);
      border-radius: 10px;
      background-color: #eef3f7;
    }
  }
`;
export const DetailsSmallScreen = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: unset;
  }
`;
export const DetailsHighResolution = styled.div`
  width: 100%;
  max-width: 650px;
  height: 100%;
  padding: 20px 50px;

  @media (max-width: 600px) {
    display: none;
  }
`;
export const SectionWrapper = styled.div`
  padding:20px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #eef3f7;
  p {
    font-size: 1.5rem;
    margin:5px;
  }
`;
