import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500&display=swap');

    :root{
        --frames: 62;
    }
    html{
        box-sizing: border-box;
    }

    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        min-height: 100vh;
        margin:0;
        padding:0;
        background-color: #f3e6e8;
        background-image: linear-gradient(315deg, #f3e6e8 0%, #d5d0e5 74%);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    a,button{
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
        background-color: unset;
    }
    a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

`;
