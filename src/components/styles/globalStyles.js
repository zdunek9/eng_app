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
        --redColor:	#ff0000;
        --lines:rgb(179, 179, 179)
    }
    *{
      box-sizing: border-box;
      max-width: 100%;
    }
    body{
      font-family: "Inter", sans-serif,'Montserrat', sans-serif;;
        min-height: 100vh;
        margin:0;
        padding:0;
        background-color: #e6f1fa;
        overflow: hidden;
    }
    a,a:link,a:visited,button{
        text-decoration: none;
        background-color: unset;
    }
    h1,h2,h3{
      color:var(--titleFontColor);
    }
    button,input{
        font-family: "Inter", sans-serif,'Montserrat', sans-serif;;
    }
`;
