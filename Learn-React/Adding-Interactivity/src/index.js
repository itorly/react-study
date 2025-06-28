import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App1 from "./App1_Responding to events";
import App2 from "./App2_State-a memory of component";
import Image from './3.Render and Commit/Image.js';
import Gallery from './3.Render and Commit/Gallery.js';

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App1 />
    <App2 />
    <Image />
    <Gallery />
  </StrictMode>
);