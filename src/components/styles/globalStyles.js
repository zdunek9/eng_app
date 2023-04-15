import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --frames: 62;
        --mainBackground:#e6f1fa;
        --background2:#d4e7f7;
        --background3:#bedbf3;
        --thinFont:#A7CDEE;
        --biggerFont:#74abc9;
        --titleFontColor:black;
        --buttonColor:#fdc561;
        --infoColor: #edb7bd;
        --greyColor:#78758D;
        --greenColor:#00b359;
        --redColor:	#ff0000;
        --visibleBorder1:#bedbf3;
        --lines:rgb(179, 179, 179);
        --notAvaliableGray: #b1b0b4;
        --buttonBlue:#5779cb;
        --buttonBlueHover:#3c6cdd;
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
        background-color: var(--mainBackground);
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
