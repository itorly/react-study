import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App1 from "./1.Reacting to input with state/Step 1 Identify your components different visual states/App1";
import App2 from "./1.Reacting to input with state/Step 1 Identify your components different visual states/App2";
import DisplayingManyVisualStatesAtOnce from "./1.Reacting to input with state/Step 1 Identify your components different visual states/Deep Dive - Displaying many visual states at once/DisplayingManyVisualStatesAtOnce";
import ConnectTheEventHandlersToSetState from "./1.Reacting to input with state/Step 5 Connect the event handlers to set state/ConnectTheEventHandlersToSetState";
import AddAndRemoveCSSClass from "./1.Reacting to input with state/Challenges/1.Add and remove a CSS class/AddAndRemoveCSSClass";
import EditProfile from "./1.Reacting to input with state/Challenges/2.Profile editor/EditProfile";
import MovingDot from "./2.Choosing the state structure/2.2.Group related state/MovingDot";
import FeedbackForm from "./2.Choosing the state structure/2.3.Avoid contradictions in state/FeedbackForm";
import AvoidRedundantState from "./2.Choosing the state structure/2.4.Avoid redundant state/AvoidRedundantState";
import AppStateDuplicated from "./2.Choosing the state structure/2.5.Avoid duplication in state/2.5.1.State Duplicated/AppStateDuplicated";
import AppStateDuplicatedAndEditable from "./2.Choosing the state structure/2.5.Avoid duplication in state/2.5.2.Editable State Duplicated/AppStateDuplicatedAndEditable";
import AppEditable from "./2.Choosing the state structure/2.5.Avoid duplication in state/2.5.3.Editable State/AppEditable";
import TravelPlan from "./2.Choosing the state structure/2.6.Avoid deeply nested state/2.6.1.making nested state flat/TravelPlan";
import TravelPlanWithRemoval from "./2.Choosing the state structure/2.6.Avoid deeply nested state/2.6.2.remove a nested item/TravelPlanWithRemoval";
import TravelPlanImprovingMemoryUsage from "./2.Choosing the state structure/2.6.Avoid deeply nested state/2.6.2.remove a nested item/deep dive improving memory usage/TravelPlanImprovingMemoryUsage";
import NestedState from "./2.Choosing the state structure/2.6.Avoid deeply nested state/2.6.3-reduce state nesting by moving some of the nested state into the child components/2.6.3.1-Hover State Management/Nested State";
import MovingStateToChildComponent from "./2.Choosing the state structure/2.6.Avoid deeply nested state/2.6.3-reduce state nesting by moving some of the nested state into the child components/2.6.3.1-Hover State Management/refactor";
import NestedStateToggleVisibility from "./2.Choosing the state structure/2.6.Avoid deeply nested state/2.6.3-reduce state nesting by moving some of the nested state into the child components/2.6.3.2-Toggle Visibility/Nested State";
import RefactorToggleVisibility from "./2.Choosing the state structure/2.6.Avoid deeply nested state/2.6.3-reduce state nesting by moving some of the nested state into the child components/2.6.3.2-Toggle Visibility/refactor";
import TimeAndColor from "./2.Choosing the state structure/Challenge/1.Fix a component that’s not updating/TimeAndColorApp";
import AppTravelPlanFixingList from "./2.Choosing the state structure/Challenge/2.Fix a broken packing list/AppTravelPlanFixingList";
import AppMailClient from "./2.Choosing the state structure/Challenge/3.Fix the disappearing selection/AppMailClient";

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
    <h4>Challenge 2: Profile editor</h4>
    <EditProfile />
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
    <hr/>
    <h3>2.5.Avoid duplication in state</h3>
    <h4>2.5.1.State Duplicated</h4>
    <AppStateDuplicated />
    <h4>2.5.2.State Duplicated and Editable</h4>
    <AppStateDuplicatedAndEditable />
    <h4>2.5.3.State Editable</h4>
    <AppEditable />
    <hr/>
    <h3>2.6.Avoid deeply nested state</h3>
    <h4>2.6.1.Making nested state flat</h4>
    <TravelPlan />
    <hr/>
    <h4>2.6.2.Remove a nested item</h4>
    <TravelPlanWithRemoval />
    <hr/>
    <h4>Deep Dive: Improving Memory Usage</h4>
    <TravelPlanImprovingMemoryUsage />
    <hr/>
    <h3>2.6.3 Reduce state nesting by moving some of the nested state into the child components</h3>
    <h4>2.6.3.1 Hover State Management</h4>
    <NestedState />
    <hr/>
    <h4>Moving State to Child Component</h4>
    <MovingStateToChildComponent />
    <hr/>
    <h4>2.6.3.2 Toggle Visibility</h4>
    <NestedStateToggleVisibility />
    <hr/>
    <h4>Toggle Visibility Refactor</h4>
    <RefactorToggleVisibility />
    <hr/>
    <h3>Challenge 1: Fix a component that's not updating</h3>
    <TimeAndColor />
    <hr/>
    <h3>Challenge 2: Fix a broken packing list</h3>
    <AppTravelPlanFixingList />
    <hr/>
    <h3>Challenge 3: Fix the disappearing selection</h3>
    <AppMailClient />
    <hr/>
  </StrictMode>
);
