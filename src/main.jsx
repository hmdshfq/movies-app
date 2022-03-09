import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /*
  1. Use a more-intuitive box-sizing model.
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  /*
    2. Remove default margin
  */
  * {
    margin: 0;
  }
  /*
    3. Allow percentage-based heights in the application
  */
  html, body {
    height: 100%;
  }
  /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
  */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  /*
    6. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  /*
    7. Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
  }
  /*
    8. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  /*
    9. Create a root stacking context
  */
  #root {
    isolation: isolate;
    height: 100%;
  }
  /*
    10. Colors
  */
  :root{
    font-family: sans-serif;

    background: var(--gray-100);
    color: var(--gray-900);

    --gray-100: hsl(20 1% 10%);
    --gray-300: hsl(20 3% 30%); 
    --gray-500: hsl(20 5% 50%);
    --gray-700: hsl(20 7% 70%);
    --gray-900: hsl(20 9% 90%);

    --primary-100: hsl(20 100% 20%);
    --primary-300: hsl(20 100% 35%);
    --primary-500: hsl(20 100% 50%);
    --primary-700: hsl(20 100% 60%);
    --primary-900: hsl(21 100% 70%);
  }
`;

ReactDOM.render(
    <React.StrictMode>
        <App />
        <GlobalStyles />
    </React.StrictMode>,
    document.getElementById('root')
);