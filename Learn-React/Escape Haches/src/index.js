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

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <h2>Referencing Values with Refs</h2>
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
