import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import AppAddARef from "./1.Referencing Values with Refs/1.1.Adding a ref to your component/AppAddARef";
import AppStopWatch from "./1.Referencing Values with Refs/1.2.Example- building a stopwatch/AppStopWatch";
import AppStopWatchWithStop from "./1.Referencing Values with Refs/1.2.Example- building a stopwatch/AppStopWatchWithStop";
import AppCounterWithState from "./1.Referencing Values with Refs/1.3.Differences between refs and state/AppCounterWithState";
import AppCounterWithRef from "./1.Referencing Values with Refs/1.3.Differences between refs and state/AppCounterWithRef";
import AppFixBrokenChatInput from "./1.Referencing Values with Refs/Challenge/1.Fix a broken chat input/AppFixBrokenChatInput";
import AppFixComponentFailingToReRender from "./1.Referencing Values with Refs/Challenge/2.Fix a component failing to re-render/AppFixComponentFailingToReRender";
import AppFixDebouncing from "./1.Referencing Values with Refs/Challenge/3.Fix debouncing/AppFixDebouncing";
import AppReadTheLatestState from "./1.Referencing Values with Refs/Challenge/4.Read the latest state/AppReadTheLatestState";

import AppForm from "./2.Manipulating the DOM with Refs/2.1.Getting a ref to the node/2.1.1.Example- Focusing a text input/App- Focusing a text input";
import AppCatFriends from "./2.Manipulating the DOM with Refs/2.1.Getting a ref to the node/2.1.2.Example- Scrolling to an element/App- Scrolling to an element";
import AppRefCallback from "./2.Manipulating the DOM with Refs/2.1.Getting a ref to the node/DEEP DIVE- How to manage a list of refs using a ref callback/App- manage a list of refs using a ref callback";
import AppAccessingDOMNodesOfAnotherComponent from "./2.Manipulating the DOM with Refs/2.2.Accessing another component’s DOM nodes/AppAccessingDOMNodesOfAnotherComponent";
import AppExposeImperativeHandle from "./2.Manipulating the DOM with Refs/2.2.Accessing another component’s DOM nodes/DEEP DIVE- Exposing a subset of the API with an imperative handle/Exposing a subset of the API with an imperative handle.js";
import AppScrollingLagsBehind from "./2.Manipulating the DOM with Refs/2.3.When React attaches the refs/DEEP DIVE- Flushing state updates synchronously with flushSync/scrolling always lags behind by one item.js";
import AppFlushSync from "./2.Manipulating the DOM with Refs/2.3.When React attaches the refs/DEEP DIVE- Flushing state updates synchronously with flushSync/Flushing state updates synchronously with flushSync.js";
import AppBestPracticesForDOMManipulationWithRefs from "./2.Manipulating the DOM with Refs/2.4.Best practices for DOM manipulation with refs/Best practices for DOM manipulation with refs.js";
import AppPlayPauseVideo from "./2.Manipulating the DOM with Refs/Challenge/1.Play and pause the video/Play and pause the video.js";
import AppFocusSearchField from "./2.Manipulating the DOM with Refs/Challenge/2.Focus the search field/Focus the search field.js";
import AppScrollingImageCarousel from "./2.Manipulating the DOM with Refs/Challenge/3.Scrolling an image carousel/Scrolling an image carousel.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>

    <h2>2.Manipulating the DOM with Refs</h2>
    <h3>2.1.Getting a ref to the node</h3>
    <h4>2.1.1.Example- Focusing a text input</h4>
    <AppForm />
    <h4>2.1.2.Example- Scrolling to an element</h4>
    <AppCatFriends />
    <h4>DEEP DIVE: How to manage a list of refs using a ref callback</h4>
    <AppRefCallback />
    <h4>2.2.Accessing another component’s DOM nodes</h4>
    <AppAccessingDOMNodesOfAnotherComponent />
    <h4>DEEP DIVE: Exposing a subset of the API with an imperative handle</h4>
    <AppExposeImperativeHandle />
    <h3>2.3.When React attaches the refs</h3>
    <h4>DEEP DIVE: Flushing state updates synchronously with flushSync</h4>
    <AppScrollingLagsBehind />
    <AppFlushSync />
    <h3>2.4.Best practices for DOM manipulation with refs</h3>
    <AppBestPracticesForDOMManipulationWithRefs />
    <h4>Challenge 1: Play and pause the video</h4>
    <AppPlayPauseVideo />
    <h4>Challenge 2: Focus the search field</h4>
    <AppFocusSearchField />
    <h4>Challenge 3: Scrolling an image carousel</h4>
    <AppScrollingImageCarousel />
    <br />
    <br />
    <br />
    <hr />
    <h2>1.Referencing Values with Refs</h2>
    <h3>1.1.Adding a ref to your component</h3>
    <AppAddARef />
    <h3>1.2.Example- building a stopwatch</h3>
    <AppStopWatch />
    <AppStopWatchWithStop />
    <h3>1.3.Differences between refs and state</h3>
    <AppCounterWithState />
    <AppCounterWithRef />
    <h3>Challenge</h3>
    <h4>1.Fix a broken chat input</h4>
    <AppFixBrokenChatInput />
    <h4>2.Fix a component failing to re-render</h4>
    <AppFixComponentFailingToReRender />
    <h4>3.Fix debouncing</h4>
    <AppFixDebouncing />
    <h4>4.Read the latest state</h4>
    <AppReadTheLatestState />
  </StrictMode>
);
