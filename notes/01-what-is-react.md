# What is React?

## What it is:

React is a JavaScript library[^1] for building user interfaces. It helps developers create reusable UI components and efficiently update only the parts of a web page that change, using a virtual representation of the DOM called the Virtual DOM.[^2]

---

## Why it matters:

React makes building complex, interactive interfaces easier and faster. It allows you to:

-   Manage UI [components](03-components.md) cleanly
-   Handle [state](05-state-and-usestate.md) changes efficiently
-   Build scalable, reusable UI pieces
-   Improve performance using Virtual DOM updates

React is used by companies like Meta, Netflix, Uber, Airbnb, and thousands of startups.

---

## Syntax:

React uses [**JSX**](02-jsx-and-rendering.md), a syntax that lets you write HTML-like code inside JavaScript.

```jsx
// function that represents a component
function App() {
    return (
        {/* Return JSX */}
        <div>
            <h1>Hello React</h1>
        </div>
    );
}
```

[![Edit jsx-basic-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/xytfw6)

JSX gets compiled into `React.createElement()` calls in the background.

---

## Example:

A simple React component:

`Welcome.jsx`

```jsx
function Welcome() {
    return <h2>Welcome to React!</h2>;
}

export default Welcome;
```

Rendered in a main file:

`index.js`

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Welcome from "./Welcome";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Welcome />
    </StrictMode>
);
```

[![Edit welcome-component-basic-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/ggzwfy)

---

## Common mistakes:

-   Using lowercase component names (`welcome` instead of `Welcome`)
-   Forgetting to wrap JSX in a single parent element
-   Trying to use HTML attributes instead of React [props](04-props.md) (e.g., `class` instead of `className`)
-   Mutating state directly instead of using state setters

---

## Summary:

React is a UI library focused on building reusable, interactive components using JSX. It updates the UI efficiently through the Virtual DOM and encourages a component-driven architecture. React is powerful, scalable, and forms the foundation of most modern front-end development today.

---

## Footnotes

-   **Strict Mode** (`StrictMode`): Strict Mode is a development-only tool in React that helps you find potential problems in your code early. It does not affect production builds and does not render in the UI.

-   `createRoot`: createRoot is the new way to render a React application introduced in React 18.
    It is used to create a root where your entire React app gets mounted inside the browser DOM.

[^1]:
    **library**: A library is a collection of pre-written code that you can use in your program to avoid writing everything from scratch.
    A library provides functions, tools, and features that **you can call whenever you need** them, but **it does NOT control your application.**

[^2]:
    **Virtual DOM**: The Virtual DOM (VDOM) is a lightweight, in-memory copy of the actual browser DOM that React uses to figure out what changed in your UI.
    Think of it like a **scratchpad** where React tries ideas before touching the real page.
