import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App_1_2 from "./App";
import App_3 from "./App3";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App_1_2 />
    <App_3 />
  </StrictMode>
);