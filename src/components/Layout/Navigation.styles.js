import styled from "styled-components";

export const Wrapper = styled.div`
  height: 80px;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(179, 179, 179);


  p {
    margin: 0;
    font-size: 2.8rem;
    color: var(--biggerFont);
    font-family: 'Darker Grotesque', sans-serif;
  }
  a {
    margin: 0;
    padding: 20px;
    font-size: 1.6rem;
    cursor: pointer;
    position: relative;
    font-family: 'Darker Grotesque', sans-serif;
    color: var(--thinFont);
  }

  a::before {
    content: "";
    left: 0;
    bottom: -4px;
    position: absolute;
    width: 100%;
    border-bottom: 3px solid rgb(77, 77, 77);
    display: none;
  }
  a:hover::before {
    display: block;
    opacity: 1;
  }
  .activeClass {
    opacity: 1;
    font-weight: 600;
  }
`;

export const TabLoggLast = styled.button`
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  position: relative;
  opacity: 0.6;
  border-radius: 30px;
  padding: 15px 30px;
  height: auto;
  opacity: 1;
  font-weight: 600;
  font-family: 'Darker Grotesque', sans-serif;
  color: #a7cdee;
`;
