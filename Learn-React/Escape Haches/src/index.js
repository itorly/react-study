import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import AppAddARef from "./1.Referencing Values with Refs/1.1.Adding a ref to your component/AppAddARef";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <h1>1.1.Adding a ref to your component</h1>
    <AppAddARef />
  </StrictMode>
);
