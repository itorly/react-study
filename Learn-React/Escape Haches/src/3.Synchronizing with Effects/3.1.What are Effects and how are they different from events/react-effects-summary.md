# React Effects vs Events - Summary

## Overview
React components contain two main types of logic that handle different scenarios:

## Component Logic Types

### 1. Rendering Code
- **Location**: Top level of components
- **Purpose**: Pure calculations that transform props and state into JSX
- **Characteristics**: 
  - Must be pure (no side effects)
  - Like a math formula - calculates results without doing anything else
  - Returns what should be displayed on screen

### 2. Event Handlers
- **Location**: Nested functions inside components
- **Purpose**: Perform actions in response to specific user interactions
- **Characteristics**:
  - Contain side effects (change program state)
  - Triggered by specific user actions (clicks, typing, etc.)
  - Examples: updating input fields, submitting HTTP requests, navigation

## The Need for Effects

### Problem Scenario
Some components need to perform actions that don't fit the above categories:

**Example**: A `ChatRoom` component that must connect to a chat server whenever it's visible
- Connecting to server is a side effect (not pure calculation)
- Can't happen during rendering
- No specific user event triggers the connection

### Solution: Effects
- **Purpose**: Specify side effects caused by rendering itself, not by particular events
- **Key Distinction**:
  - **Event**: Sending a message (caused by user clicking send button)
  - **Effect**: Setting up server connection (should happen regardless of which interaction caused component to appear)

## Effect Execution
- Effects run at the end of a commit after screen updates
- Perfect timing for synchronizing React components with external systems
- Common use cases: network operations, third-party library integration

## Key Takeaway
Effects bridge the gap between React's declarative rendering model and the imperative world of side effects, allowing components to synchronize with external systems based on their presence in the UI rather than specific user interactions.