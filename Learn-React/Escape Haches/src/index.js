import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import AppAddARef from "./1.Referencing Values with Refs/1.1.Adding a ref to your component/AppAddARef";
import Stopwatch from "./1.Referencing Values with Refs/1.2.Example- building a stopwatch/AppStopWatch";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <h2>Referencing Values with Refs</h2>
    <h3>1.1.Adding a ref to your component</h3>
    <AppAddARef />
    <h3>1.2.Example- building a stopwatch</h3>
    <Stopwatch />
  </StrictMode>
);
