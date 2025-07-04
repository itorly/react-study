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
import RequestTracker from './5.Queueing a Series of State Updates/challenges/Fix a request counter/App.js'
import StateQueueImpl from './5.Queueing a Series of State Updates/challenges/Implement the state queue/App.js'
import DotStay from './6.Updating Objects in State/6.2.Treat state as read-only/6.2.1.dot stay/App.js';
import DotMove from './6.Updating Objects in State/6.2.Treat state as read-only/6.2.2.dot move/App.js';
import PartialUpdate from './6.Updating Objects in State/6.3.Copying objects with the spread syntax/App.js';
import DynamicName from './6.Updating Objects in State/6.3.Copying objects with the spread syntax/6.3.1.Deep Dive - Using a single event handler for multiple fields/App.js';
import UpdatingANestedObject from './6.Updating Objects in State/6.4.Updating a nested object/App.js';
import TryImmer from './6.Updating Objects in State/6.5.Write concise update logic with Immer/App.js';
import Scoreboard from './6.Updating Objects in State/Challenges/1.Fix incorrect state updates/App.js';
import Canvas from './6.Updating Objects in State/Challenges/2.Find and fix the mutation/App.js';
import CanvasImmer from './6.Updating Objects in State/Challenges/3.Update an object with Immer/App.js';
import ArrayAppendOne from './7.Updating Arrays in State/7.1.Updating arrays without mutation/7.1.1.Adding to an array/App.js'
import Filter from './7.Updating Arrays in State/7.1.Updating arrays without mutation/7.1.2.Removing from an array/App.js'
import ShapeEditor from './7.Updating Arrays in State/7.1.Updating arrays without mutation/7.1.3.Transforming an array/ShapeEditor.js';
import CounterLst from './7.Updating Arrays in State/7.1.Updating arrays without mutation/7.1.4.Replacing items in an array/CounterLst.js';
import InsertAnElementIntoTheList from './7.Updating Arrays in State/7.1.Updating arrays without mutation/7.1.5.Inserting into an array/InsertAnElementIntoTheList.js';
import ReverseList from './7.Updating Arrays in State/7.1.Updating arrays without mutation/7.1.6.Making other changes to an array/ReverseList.js';
import BucketList from './7.Updating Arrays in State/7.2.Updating objects inside arrays/BucketList.js';
import BucketListImmer from './7.Updating Arrays in State/7.2.Updating objects inside arrays/7.2.1.Write concise update logic with Immer/BucketListImmer.js';
import ShoppingCartUpdating from './7.Updating Arrays in State/Challenges/1.Update an item in the shopping cart/ShoppingCartUpdating.js';
import ShoppingCartRemoving from './7.Updating Arrays in State/Challenges/2.Remove an item from the shopping cart/ShoppingCartRemoving.js';
import TaskApp from './7.Updating Arrays in State/Challenges/3.Fix the mutations using non-mutative methods/TaskApp.js';
import TaskAppImmer from './7.Updating Arrays in State/Challenges/4.Fix the mutations using Immer/TaskAppImmer.js';

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
    <h2>1.Responding to events</h2>
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
    <h4>5.2.1.What happens if you update state after replacing it</h4>
    <UpdateStateAfterReplacingIt />
    <hr/>
    <h4>5.2.2.What happens if you replace state after updating it</h4>
    <ReplaceStateAfterUpdatingIt />
    <hr/>
    <h3>Challenges</h3>
    <h4>Fix a request counter</h4>
    <RequestTracker />
    <hr/>
    <h4>Implement the state queue</h4>
    <StateQueueImpl />
    <hr/>
    <h2>6.Updating Objects in State</h2>
    <h3>6.2.Treat state as read-only</h3>
    <h4>6.2.1.dot stay</h4>
    <DotStay />
    <hr/>
    <h4>6.2.2.dot move</h4>
    <DotMove />
    <hr/>
    <h3>6.3.Copying objects with the spread syntax</h3>
    <PartialUpdate />
    <hr/>
    <h4>6.3.1.Deep Dive - Using a single event handler for multiple fields</h4>
    <DynamicName />
    <hr/>
    <h3>6.4.Updating a nested object</h3>
    <UpdatingANestedObject />
    <hr/>
    <h3>6.5.Write concise update logic with Immer</h3>
    <TryImmer />
    <hr/>
    <h3>Challenges</h3>
    <h4>1.Fix incorrect state updates</h4>
    <Scoreboard />
    <hr/>
    <div className="canvas-container">
      <div className="canvas-wrapper">
        <h4>2.Find and fix the mutation</h4>
        <Canvas />
      </div>
      <div className="canvas-wrapper">
        <h4>3.Update an object with Immer</h4>
        <CanvasImmer />
      </div>
    </div>
    <div className="section-separator"></div>
    <hr/>
    <h2>7.Updating Arrays in State</h2>
    <h3>7.1.Updating arrays without mutation</h3>
    <h4>7.1.1.Adding to an array</h4>
    <ArrayAppendOne />
    <hr/>
    <h4>7.1.2.Removing from an array</h4>
    <Filter />
    <hr/>
    <h4>7.1.3.Transforming an array</h4>
    <ShapeEditor />
    <hr/>
    <h4>7.1.4.Replacing items in an array</h4>
    <CounterLst />
    <hr/>
    <h4>7.1.5.Inserting into an array</h4>
    <InsertAnElementIntoTheList />
    <hr/>
    <h4>7.1.6.Making other changes to an array</h4>
    <ReverseList />
    <hr/>
    <h3>7.2.Updating objects inside arrays</h3>
    <BucketList />
    <hr/>
    <h4>7.2.1.Write concise update logic with Immer</h4>
    <BucketListImmer />
    <hr/>
    <h3>Challenges</h3>
    <h4>1.Update an item in the shopping cart</h4>
    <ShoppingCartUpdating />
    <hr/>
    <h4>2.Remove an item from the shopping cart</h4>
    <ShoppingCartRemoving />
    <hr/>
    <h4>3.Fix the mutations using non-mutative methods</h4>
    <TaskApp />
    <hr/>
    <h4>4.Fix the mutations using Immer</h4>
    <TaskAppImmer />
  </StrictMode>
);
