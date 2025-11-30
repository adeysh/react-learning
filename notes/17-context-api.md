# Context API

## What it is:

The Context API is a built-in React system used to **share data globally** across multiple components without having to pass props manually through every intermediate level (avoiding prop drilling).[^1]
It provides a way to create a **centralized data source** that any component in the tree can subscribe to.

Context has two main parts:

-   **Provider** → gives the data
-   **Consumer (useContext)** → receives the data

---

## Why it matters:

Context solves the problem of prop drilling — when you have to pass the same data through many layers of components that don’t need it.

Use Context when:

-   Many components need the same data
-   The component tree is deep
-   You want global-like state (theme, user, settings)
-   Passing props manually becomes messy

Common use cases:

-   Authentication (current user)
-   Theme (dark/light mode)
-   Language (i18n)
-   Global settings
-   Cart or global UI state

Context makes your architecture cleaner and easier to maintain.

---

## Syntax:

**Creating a context**

```jsx
const ThemeContext = createContext();
```

**Providing the context**

```jsx
<ThemeContext.Provider value="dark">
    <App />
</ThemeContext.Provider>
```

**Consuming context**

```jsx
const theme = useContext(ThemeContext);
```

---

## Example:

**Theme context example**

`theme-context.js`

```jsx
import { createContext } from "react";
export const ThemeContext = createContext("light");
```

`App.jsx`

```jsx
import { ThemeContext } from "./theme-context";

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    );
}
```

`Toolbar.jsx`

```jsx
import { useContext } from "react";
import { ThemeContext } from "./theme-context";

function Toolbar() {
    const theme = useContext(ThemeContext);
    return <button className={theme}>Button</button>;
}
```

Here:

-   `App` provides `"dark"` to the whole subtree
-   `Toolbar` reads `"dark"` without any prop drilling

[![Edit context-api-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/5w2m49)

---

## Common mistakes:

-   ❌ Using context for everything
    Context is powerful, but global state everywhere harms maintainability.

-   ❌ Recreating context values on every render
    This causes unnecessary re-renders.

    ```jsx
    <Provider value={{ theme }}>  // object recreated every render ❌
    ```

    Solution:

    ```jsx
    const value = useMemo(() => ({ theme }), [theme]);
    <Provider value={value}> // stable object ✔
    ```

-   ❌ Too many large contexts
    Split context into smaller ones if many unrelated values exist.

-   ❌ Putting heavy logic inside providers
    Keep providers lightweight—logic belongs in hooks.

-   ❌ Not wrapping context usage into custom hooks
    Context becomes messy without abstraction.

---

## Summary:

The Context API allows React components to share data across the app without prop drilling.
It uses a Provider to supply data and useContext to consume it.
Context simplifies global state handling for themes, user data, settings, and shared UI state—but must be used carefully to avoid unnecessary re-renders and complexity.

---

## Footnotes

[^1]:
    **What actually happens in Context?**:
    createContext() creates a special object &rarr;

    ```jsx
    const ThemeContext = createContext("light");
    ```

    React creates an object like:

    ```jsx
    {
    Provider,
    Consumer,
    _currentValue,
    _currentValue2,
    _contextKey,
    }
    ```

    When you use <Provider value={...}>, React attaches context to the Fiber tree

    ```jsx
    <ThemeContext.Provider value="dark">
        <App />
    </ThemeContext.Provider>
    ```

    React attaches a linked list of subscribers under the Provider.

    When you call useContext(context), React subscribes the Fiber to that context

    ```jsx
    const theme = useContext(ThemeContext);
    ```
