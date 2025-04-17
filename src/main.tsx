import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StyleSheetManager } from "styled-components";
import App from "./App.tsx";
import GlobalStyles from "./GlobalStyles.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyleSheetManager enableVendorPrefixes>
      <GlobalStyles />
      <App />
    </StyleSheetManager>
  </StrictMode>
);
