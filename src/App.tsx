import React from 'react';
import { Viewport } from './Viewport/Viewport';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    padding: 0;
    margin: 0;
  }
`

export default function App() {
  return <>
    <GlobalStyle />
    <Viewport />
  </>
}