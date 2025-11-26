# React Components

## What it is:

A component is a reusable, independent piece of UI in React.
It’s like a function that returns JSX (UI).
Components allow you to break your interface into small, manageable parts.

In React, there are two types of components:

-   **Function Components** (modern, recommended)
-   **Class Components**[^1] (older, rarely used now)

---

## Why it matters:

Components are the **building blocks** of every React application.

-   Reuse UI pieces
-   Organize your code
-   Keep logic + UI together
-   Make applications scalable
-   Follow React’s “component-driven architecture”

Every React project consists of many small components combined together.

---

## Syntax:

**Function Component:**

```jsx
function Welcome() {
    return <h1>Hello World</h1>;
}
```

**Using a component inside another:**

```jsx
function App() {
    return (
        <div>
            <Welcome />
        </div>
    );
}
```

**Exporting a component:**

```jsx
export default Welcome;
```

**Importing a component:**

```jsx
import Welcome from "./Welcome";
```

[![Edit component-sytax-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/xjlhgr)

---

## Example:

**Button Component + App Component**

`Button.jsx`

```jsx
function Button() {
    return <button>Click me</button>;
}

export default Button;
```

`App.jsx`

```jsx
import Button from "./Button";

function App() {
    return (
        <div>
            <h2>My First React Component</h2>
            <Button />
            <Button />
            <Button />
        </div>
    );
}

export default App;
```

[![Edit welcome-component-basic-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/ggzwfy)

Here:

-   `<Button />` is reusable
-   You can render it multiple times
-   Every instance is independent

---

## Common mistakes:

-   Naming components with lowercase letters (`button` instead of `Button`)
-   Forgetting to **export** a component
-   Importing with the wrong path
-   Returning multiple elements without a wrapper (use `<>...</>` or `<div>` or `<Fragment>`)
-   Putting components inside the wrong folders (keep structure clean)

---

## Summary:

Components are small, reusable UI building blocks in React.
They are written as functions that return JSX and can be used repeatedly.
React apps are built by composing multiple components together.
Understanding components is the foundation for [props](04-props.md), [state](05-state-and-usestate.md), hooks, and advanced concepts.

---

## Footnotes

[^1]:
    **Class components**: They were the **old way** of writing components in React before Hooks were introduced in React 16.8 (2019). They still work, but modern React **uses function components + hooks** instead.

    Class components were components defined using JavaScript classes instead of functions.

    ```jsx
    class Welcome extends React.Component {
        render() {
            return <h1>Hello, {this.props.name}</h1>;
        }
    }
    ```

    They had:

    -   their own state
    -   lifecycle methods like componentDidMount()
    -   access to props using this.props
    -   event handlers using this.methodName
