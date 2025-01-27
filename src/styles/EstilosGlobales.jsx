import { createGlobalStyle } from "styled-components";
import Variables from "./Variables";

const EstilosGlobales = createGlobalStyle`
    ${Variables};

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--fuente-principal);
    }
    button, input{
        background: none;
        outline-color: transparent;
        border: none;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    ul{
        list-style-type: none;
    }
`;
export default EstilosGlobales;
