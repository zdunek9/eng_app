import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --frames: 62;
        --background2:#d4e7f7;
        --thinFont:#A7CDEE;
        --biggerFont:#74abc9;
        --titleFontColor:black;
        --buttonColor:#fdc561;
        --infoColor: #edb7bd;
        --greyColor:#78758D;
        --greenColor:#00e673;
    }
    *{
      box-sizing: border-box;
      max-width: 100%;
    }
    body{
        font-family: 'Montserrat', sans-serif;
        min-height: 100vh;
        /* height: 100%; */
        margin:0;
        padding:0;
        background: rgb(230,241,250);
background: linear-gradient(180deg, rgba(230,241,250,1) 0%, rgba(116,171,201,1) 61%, rgba(230,241,250,1) 100%);
    }
    
    a,a:link,a:visited,button{
        text-decoration: none;
        background-color: unset;
    }
    h1,h2,h3{
      color:var(--titleFontColor)
    }
`;
