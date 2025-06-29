import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App1 from "./App1_Responding to events";
import App2 from "./App2_State-a memory of component";
import Image from './3.Render and Commit/Image.js';
import Gallery from './3.Render and Commit/Gallery.js';
import Clock from './3.Render and Commit/step3-React commits changes to the DOM/App.js'

/**
 * 3. Render and Commit
 * Step 1: Trigger a render
 *  done by calling createRoot with the target DOM node, 
 * and then calling its render method with your component:
 * 
 * Step 2: React renders your components
 * “Rendering” is React calling your components.
 * 
 * Step 3: React commits changes to the DOM.
 * For the initial render, React will use the appendChild() DOM API to put all the DOM nodes it has created on screen.
 * For re-renders, React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.
 * 
 */
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App1 />
    <App2 />
    <Image />
    <Gallery />
    <Clock />
  </StrictMode>
);