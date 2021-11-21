import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #fff;
        --black: #000;
        --blue: #1E3163;
        --darkBlue: #161d6f;
        --lightBlue: #39A2DB;
    }
    * {
        font-family: "Segoe UI";
    }
    `;
