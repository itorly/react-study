import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App1 from "./App1_Responding to events";
import App2 from "./App2_State-a memory of component";
import Image from './3.Render and Commit/Image.js';
import Gallery from './3.Render and Commit/Gallery.js';
import Clock from './3.Render and Commit/step3-React commits changes to the DOM/App.js'

import Form from './4.State as a Snapshot/4.1.Setting state triggers renders/App.js'
import PlusOneThreeTimes from './4.State as a Snapshot/4.2.Rendering takes a snapshot in time/App.js'
import PlusFiveOneTime from './4.State as a Snapshot/4.3.State over time/App.js'
import PutATimer from './4.State as a Snapshot/4.3.State over time/4.3.1.put a timer on the alert/App.js'
import HelloTo from './4.State as a Snapshot/4.3.State over time/4.3.2.event handlers less prone to timing mistakes/App.js'
import CrosswalkLight from './4.State as a Snapshot/4.4.Implement a traffic light/App.js'
import IncrementingMultipleTimes from './5.Queueing a Series of State Updates/5.2.Updating the same state multiple times before the next render/App.js'
import UpdateStateAfterReplacingIt from './5.Queueing a Series of State Updates/5.2.Updating the same state multiple times before the next render/5.2.1.What happens if you update state after replacing it/App.js'
import ReplaceStateAfterUpdatingIt from './5.Queueing a Series of State Updates/5.2.Updating the same state multiple times before the next render/5.2.2.What happens if you replace state after updating it/App.js'

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
// Step 1: calling createRoot with the target DOM node,
const root = createRoot(document.getElementById("root"));
// and then calling its render method with your component
root.render(
  // Step 2: React calling your components
  <StrictMode>
    <h1>1.Responding to events</h1>
    <App1 />
    <hr/>
    <h2>2.State: a memory of component</h2>
    <App2 />
    <hr/>
    <h2>3. Render and Commit</h2>
    <Image />
    <Gallery />
    <Clock />
    <hr/>
    <h2>4.State as a Snapshot</h2>
    <h3>4.1.Setting state triggers renders</h3>
    <Form />
    <hr/>
    <h3>4.2.Rendering takes a snapshot in time</h3>
    <PlusOneThreeTimes />
    <hr/> 
    <h3>4.3.State over time</h3>
    <PlusFiveOneTime />
    <hr/>
    <h4>4.3.1.put a timer on the alert</h4>
    <PutATimer />
    <hr/>
    <h4>4.3.2. event handlers less prone to timing mistakes</h4>
    <HelloTo />
    <hr/>
    <h3>4.4.Implement a traffic light</h3>
    <CrosswalkLight />
    <hr/>
    <h2>5.Queueing a Series of State Updates</h2>
    <h3>5.2.Updating the same state multiple times before the next render</h3>
    <IncrementingMultipleTimes />
    <hr/>
    <h3>5.2.1.What happens if you update state after replacing it</h3>
    <UpdateStateAfterReplacingIt />
    <hr/>
    <h3>5.2.2.What happens if you replace state after updating it</h3>
    <ReplaceStateAfterUpdatingIt />
  </StrictMode>
);