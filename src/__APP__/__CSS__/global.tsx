//\\

import React from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    :root {
        --text-color-dark: #222222;
        --text-color-light: #ffffff;

        --font-weight-bold: 500;
        --font-weight-light: 200;

        --primary-color: blue;
        --secondary-color: #d40315;
        --dull-color: lightgrey;
        --box-shadow: 0 0 5px 3px lightgrey;
    }

    body {
        background-color: whitesmoke;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 300;
        color: var(--text-color-dark)
    }

   

`; //
