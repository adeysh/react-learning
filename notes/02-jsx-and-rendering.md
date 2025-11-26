# JSX & Rendering

## What it is:

**JSX** (JavaScript XML) is a syntax that lets you write HTML-like code inside JavaScript.
It makes UI code easier to read and write.
React uses JSX to describe what the UI should look like.

Example JSX:

```jsx
<h1>Hello React</h1>
```

This gets converted into JavaScript under the hood.
Rendering means telling React **what to display on the screen** and **where to display it.**

---

## Why it matters:

-   JSX helps you build UI using components & HTML-like syntax
-   Rendering decides _which [component](03-components.md) appears on the page_
-   JSX keeps the UI and logic inside one file
-   It improves readability, maintainability, and developer speed

Without JSX, React code becomes long and hard to read.

## Syntax:

**JSX/React Component:**

```jsx
export default function App() {
    return (
        <div>
            <h2>Hello JSX</h2>
            <p>This is rendered by React</p>
        </div>
    );
}
```

**Rendering to the DOM:**

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
```

## Example:

**Full example using JSX + rendering:**

`App.jsx`

```jsx
function App() {
    const name = "Adesh";

    return (
        <div>
            <h1>Welcome, {name}!</h1>
            <p>React is rendering this with JSX.</p>
        </div>
    );
}

export default App;
```

`main.jsx`

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
```

[![Edit jsx+rendering-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/njxt2r)

React takes the JSX → converts it → updates the DOM.

---

## Common mistakes:

-   Forgetting to **return** JSX in a component
-   Not wrapping multiple JSX elements in a single parent

    ```jsx
    return (
        <>
            {" "}
            {/* fragment */}
            <h1>Hello</h1>
            <p>World</p>
        </>
    );
    ```

-   Using `class` instead of `className`
-   Writing JSX inside loops incorrectly
-   Using lowercase component names (`app` instead of `App`)

---

## Summary:

JSX is a readable, HTML-like syntax used to define React UI.
Rendering is the process where React takes JSX and updates the DOM.
React re-renders only the parts of the UI that change, thanks to Virtual DOM.
Together, JSX + rendering form the foundation of how React displays interactive UIs.

---

## Footnotes

-   `{}`: In React, curly braces `{}` is used inside **JSX** to insert **JavaScript** into your UI.

    -   You can put any JavaScript expression, such as:

    ```jsx
    <h1>{name}</h1>
    <p>{2 + 3}</p>
    <p>{getMessage()}</p>
    <p>{isLoggedIn ? "Welcome!" : "Please log in"}</p>
    <ul>
        {items.map(item => <li>{item}</li>)}
    </ul>
    <p>{count}</p>
    ```

-   `<>...</>` (`<React.Fragment>`): It is the short syntax for React Fragments. A **Fragment** lets you return **multiple JSX elements** _without adding an extra wrapper like `<div>`_. A component cannot return two sibling elements. React requires a **single parent element**. `<React.Fragment>` cannot take props but can take keys.
