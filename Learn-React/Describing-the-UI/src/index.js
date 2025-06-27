import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App_1_2 from "./App";
import App_3 from "./App3";
import App_4 from "./App4";
import App_5 from "./APP5_Passing props to a component"
import App_6 from "./App6_Conditional rendering"
import App_7 from "./App7_Rendering lists"
import App_8 from "./App8_Keeping components pure"

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App_1_2 />
    <App_3 />
    <App_4 />
    <App_5 />
    <App_6 />
    <App_7 />
    <App_8 />
  </StrictMode>
);