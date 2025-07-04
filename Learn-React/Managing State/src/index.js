import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App1 from "./1.Reacting to input with state/Step 1 Identify your components different visual states/App1";
import App2 from "./1.Reacting to input with state/Step 1 Identify your components different visual states/App2";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <hr/>
    <h2>Reacting to Input with State</h2>
    <h3>Thinking about UI declaratively</h3>
    <h4>Step 1: Identify your component’s different visual states</h4>
    <App1 />
    <App2 />
    <hr/>

  </StrictMode>
);