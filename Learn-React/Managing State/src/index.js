import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App1 from "./1.Reacting to input with state/Step 1 Identify your components different visual states/App1";
import App2 from "./1.Reacting to input with state/Step 1 Identify your components different visual states/App2";
import DisplayingManyVisualStatesAtOnce from "./1.Reacting to input with state/Step 1 Identify your components different visual states/Deep Dive - Displaying many visual states at once/DisplayingManyVisualStatesAtOnce";
import ConnectTheEventHandlersToSetState from "./1.Reacting to input with state/Step 5 Connect the event handlers to set state/ConnectTheEventHandlersToSetState";
import AddAndRemoveCSSClass from "./1.Reacting to input with state/Challenges/1.Add and remove a CSS class/AddAndRemoveCSSClass";
import MovingDot from "./2.Choosing the state structure/2.2.Group related state/MovingDot";
import FeedbackForm from "./2.Choosing the state structure/2.3.Avoid contradictions in state/FeedbackForm";
import AvoidRedundantState from "./2.Choosing the state structure/2.4.Avoid redundant state/AvoidRedundantState";

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
    <h4>Deep Dive</h4>
    <h5>Displaying many visual states at once</h5>
    <DisplayingManyVisualStatesAtOnce />
    <hr/>
    <h4>Step 5: Connect the event handlers to set state</h4>
    <ConnectTheEventHandlersToSetState />
    <hr/>
    <h4>Challenge 1: Add and remove a CSS class</h4>
    <AddAndRemoveCSSClass />
    <hr/>
    <h2>2.Choosing the State Structure</h2>
    <h3>2.2.Group related state</h3>
    <MovingDot />
    <hr/>
    <h3>2.3.Avoid contradictions in state</h3>
    <FeedbackForm />
    <hr/>
    <h3>2.4.Avoid redundant state</h3>
    <AvoidRedundantState />
  </StrictMode>
);
