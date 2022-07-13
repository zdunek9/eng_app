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
        background-color:#fffffF;
        display: flex;
        flex-direction: column;
        background: rgb(255,255,255);
background: linear-gradient(180deg, rgba(255,255,255,1) 29%, rgba(167,205,238,0.8071603641456583) 87%);
    }
    
    a,button{
                text-decoration: none;
        background-color: unset;
    }
    a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}
h1,h2,h3{
  color:var(--titleFontColor)
}

`;
