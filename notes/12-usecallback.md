# `useCallback` Hook

## What it is:

`useCallback` is a React Hook that memoizes a function, meaning it returns the same function instance between renders unless its dependencies change.

It prevents unnecessary re-creations of functions on every render, especially when passing callbacks to child components that rely on reference equality (like `React.memo`).[^1]

---

## Why it matters:

In React, functions are **recreated on every render**:

```jsx
const handleClick = () => console.log("clicked");
```

This creates a **new function** every time the component renders.

This causes problems when:

-   Passing functions to `React.memo`ized child components
-   Passing functions into `useEffect` dependencies
-   Passing callbacks to deeply nested components
-   Maintaining stable references for event handlers or subscriptions

`useCallback` ensures the function **does not change** unless its dependencies change.

This improves:

-   Performance
-   Stability
-   Avoiding unnecessary re-renders
-   Avoiding infinite loops in effects

---

## Syntax:

**Basic form:**

```jsx
const memoizedCallback = useCallback(() => {
    // function logic
}, [dependency]);
```

**With dependencies:**

```jsx
useCallback(() => doSomething(value), [value]);
```

**No dependencies (never changes):**

```jsx
const stableFn = useCallback(() => {
    console.log("always the same");
}, []);
```

---

## Example:

**Preventing unnecessary re-renders with React.memo**

```jsx
import { memo, useCallback, useState } from "react";

const Child = memo(function Child({ onClick }) {
    console.log("Child rendered");
    return <button onClick={onClick}>Click</button>;
});

function Parent() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("clicked");
    }, []);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Parent: {count}</button>
            <Child onClick={handleClick} />
        </>
    );
}
```

[![Edit useCallback-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/hy7rrn)

-   Without `useCallback`, `handleClick` is recreated each render
-   `Child` sees a new function and re-renders
-   With `useCallback`, `handleClick` remains stable
-   Child avoids re-render and performance improves

---

## Common mistakes:

-   ❌ Using useCallback everywhere

    ```jsx
    const fn = useCallback(() => {}, []); // unnecessary
    ```

-   ❌ Forgetting dependencies

    ```jsx
    useCallback(() => {
        doSomething(value);
    }, []); // missing "value"
    ```

-   ❌ Using unstable objects inside callbacks

    ```jsx
    useCallback(() => {
        console.log(obj);
    }, [obj]);
    ```

    If `obj` changes every render, memoization fails.

-   ❌ Assuming useCallback improves performance by itself

    It ONLY helps with:

    -   referential equality
    -   memoized child components
    -   stable dependencies for effects

---

## When to use useCallback:

-   When passing functions to memoized child components (`React.memo`)
-   When using functions inside `useEffect` dependency arrays
-   When passing callbacks through deeply nested props
-   When creating stable handler references for performance
-   When preventing unnecessary re-renders in big lists

---

## Summary:

`useCallback` memoizes a function so that it keeps the same identity between renders unless its dependencies change. It is useful for optimizing child components, avoiding unnecessary re-renders, and stabilizing functions passed to effects or props. Only use it when referential stability matters.

---

## Footnotes

[^1]:
    **useCallback**:
    when `useCallback` is used:
    `const handleClick = useCallback(() => {console.log("clicked");}, [a, b]);`
    React saves the **function** AND the **dependency** array inside the component’s fiber.
    Then on the next render, React checks if dependencies changed.
    If NOT changed → React returns the SAME function instance.
    If changed → React creates a NEW function.

    hook is inside a fiber &rarr; `Hook {memoizedState: the function,deps: [a, b],next: Hook | null}` &rarr; on next render &rarr; react compares depnd. &rarr; if not changed &rarr; reuse the existing function &rarr; `const handleClick = previousHook.memoizedState;` &rarr; if changed &rarr; create a new function &rarr;
