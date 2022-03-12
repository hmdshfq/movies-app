import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Use a more-intuitive box-sizing model */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  /* Remove default margin */
  * {
    margin: 0;
  }
  /* Allow percentage-based heights in the application */
  html, body {
    height: 100%;
  }
  /* Typographic tweaks */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  /* Improve media defaults */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  /* Remove built-in form typography styles */
  input, button, textarea, select {
    font: inherit;
  }
  /* Avoid text overflows */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  /* Create a root stacking context */
  #root {
    isolation: isolate;
    height: 100%;
  }
  /* Global styles */
  :root{

    /* Set default font */
    font-family: 'Nunito', sans-serif;
    
    /* Set default background and text color */
    background: var(--gray-100);
    color: var(--gray-900);

    /* Create gray shades */
    --gray-100: hsl(1 1% 10%);
    --gray-300: hsl(1 3% 30%); 
    --gray-500: hsl(1 5% 50%);
    --gray-700: hsl(1 7% 70%);
    --gray-900: hsl(1 9% 90%);

    /* Create primary shades */
    --primary-100: hsl(1 74% 20%);
    --primary-300: hsl(1 74% 35%);
    --primary-500: hsl(1 74% 50%);
    --primary-700: hsl(1 74% 60%);
    --primary-900: hsl(7 74% 70%);

    /* Set border radius */
    --border-radius: 4px;
  }

  /* Add space between media cards and hover and effect */
  .slick-slide{
    height: 200px;
    display: flex !important;
    align-items: center;
    & > div{
      margin: 0 10px;
      transition: transform 0.6s ease-in;
    }
    &:hover > div {
      transform: scale(1.1);
      transition: transform 0.3s ease-out;
    }
  }
  .slick-list{
    margin: 0 -10px;
  }

  /** Style sign in overlay modal */
  [data-reach-dialog-overlay]{
    background: hsl(0 0% 0% / 0.6);
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
