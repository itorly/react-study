import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App1 from "./App1_Responding to events";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App1 />
  </StrictMode>
);