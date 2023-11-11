import { createGlobalStyle } from 'styled-components';
import React, { FC } from 'react';

const CustomStyles = createGlobalStyle`
  @font-face {
    font-family: 'Proxima Nova';
    src: local('Proxima Nova'), url('/fonts/ProximaNova.eot');
    src: local('Proxima Nova'), url('/fonts/ProximaNova.eot?#iefix') format('embedded-opentype'),
    url('/fonts/ProximaNova.woff') format('woff'),
    url('/fonts/ProximaNova.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  html {
    min-height: 100vh;
  }

  body, #root {
    min-height: 100vh;
  }

  body, body * {
    font-family: 'Proxima Nova', serif;
    box-sizing: border-box;
    margin: unset;
  }

  button {
    border: unset;
    background-color: unset;
    cursor: pointer;
    padding: unset;
  }

  table, th, td {
    border-spacing: 0;
  }

  td, th {
    border-spacing: 2px;
  }

  th, td {
    padding: unset;
  }

  td {
    border-bottom: 1px solid #CBCFDE;
    margin-bottom: 2px;
  }

  tr > td {
    height: 40px;
    padding: 5px 0;
  }
`;

export const GlobalStyles: FC = () => <CustomStyles />;
