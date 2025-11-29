# Custom Hooks

## What it is:

A **custom hook**[^1] is a JavaScript function that uses one or more built-in React hooks (`useState`, `useEffect`, `useRef`, `useMemo`, etc.) and encapsulates reusable logic.
It always begins with the prefix `use`, so React can treat it like a hook and apply rules of hooks.

Custom hooks allow you to **extract logic** from components so they become cleaner, reusable, and easier to test.

---

## Why it matters:

Custom hooks solve several real problems:

-   Reusing logic across components
    Example: fetching data, form handling, timers, scrolling, localStorage sync, etc.

-   Cleaning large components
    Move logic out of UI → into a hook.

-   Separating concerns
    UI stays in the component, logic stays in the hook.

-   Sharing side-effect behavior
    Multiple components can use the same effect logic.

-   Better organization
    Custom hooks help build a scalable and maintainable codebase.

-   Avoiding duplication
    Write logic once → reuse everywhere.

Custom hooks _do not_ render UI. They only contain logic.

---

## Syntax:

**Basic pattern:**

```jsx
function useSomething() {
    // useState
    // useEffect
    // useRef
    // return values
}
```

**Usage:**

```jsx
const value = useSomething();
```

**Hooks must start with "use":**

```jsx
function useTimer() { ... }   // ✔ valid
function timerHook() { ... }  // ❌ React won't treat it as a hook
```

---

## Example:

**A custom hook for window width**

`useWindowWidth.js`

```jsx
import { useState, useEffect } from "react";

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}

export default useWindowWidth;
```

**In a component:**

```jsx
function App() {
    const width = useWindowWidth();

    return <p>Window width: {width}</p>;
}
```

This logic can now be reused in multiple components.

[![Edit custom-hook-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/82hfcv)

---

## Common mistakes:

-   ❌ Writing a function that uses hooks but doesn’t start with "use"
    React won’t enforce hook rules → bugs.

-   ❌ Returning JSX
    Hooks should return **data or functions**, not UI.

-   ❌ Using hooks conditionally inside a custom hook
    Rules of Hooks still apply.

-   ❌ Over-abstracting small logic
    Not everything needs to be a custom hook.

-   ❌ Not putting dependencies correctly
    Effects inside custom hooks still need correct dependency arrays.

---

**When to create a custom hook:**

-   You see duplicated logic in different components
    (e.g., fetching data, handling forms)

-   You have complex logic inside a component
    Move it into a hook to simplify UI code.

-   You need reusable side effects
    scroll, resize, visibility, timers, etc.

-   You want to return a reusable behavior
    “Use timer”, “use fetch”, “use toggle”, etc.

-   You want to organize large apps
    Move backend/API logic into hooks.

---

## Summary:

A custom hook is a reusable function that contains React hook logic.
It starts with “use”, can use other hooks, and returns values or functions—never JSX.
Custom hooks help share logic, simplify components, follow clean separation of concerns, and create more scalable and maintainable codebases.

---

## Footnotes

[^1]:
    **Custom Hook**:
    React only knows about built-in hooks:
    `useState`,`useEffect`,`useRef`,`useCallback`,`useMemo`

    custom hook &rarr; normal js function &rarr; calls built-in hooks

    when a custom hook is called, react jumps to the custom hook (function) and executes its hooks.
    then regular execution of hooks happen.

    The custom hook itself **does not get its own hook storage**.

    Custom hook **does not have its own state**.

    React stores all hook state in the calling component’s fiber.
