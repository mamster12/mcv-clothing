import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    }
    
    body {
      font-family: 'Abel', sans-serif;
      margin: 0 5%;

      @media screen and (max-width: 800px) {
        padding: 10px;
        margin:0;
      }
    }
    
    a {
      text-decoration: none;
      color: black;
    }
`;