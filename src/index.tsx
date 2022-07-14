import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import styled, { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Open Sans;
}

body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
`;

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <>
    <StyledGlobal />
    <App />
  </>
);
