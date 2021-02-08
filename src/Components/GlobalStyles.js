import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-size:16px;
        background-color:#2D2827;
        margin-top:70px;
        color: white;
        -ms-overflow-style: none; 
    }
    html,body,#root{
        width:100%;
    }
    ::-webkit-scrollbar { 
        display: none; 
    }

`;

export default GlobalStyles;
