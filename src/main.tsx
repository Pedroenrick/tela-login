import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import Default from "./styles/themes/default";

import GlobalStyle from "./styles/globalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Default}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
