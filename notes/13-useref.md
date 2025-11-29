# `useRef` Hook

## What it is:

`useRef` is a React Hook that returns a mutable object whose `.current` property persists across renders **without causing re-renders**.[^1]

You can think of it as a small “box” that React gives you, where you can store **any value** that should survive re-renders.

It is commonly used for:

-   accessing DOM elements
-   storing values that don’t need state
-   keeping previous values
-   storing timers, intervals, or external objects
-   avoiding re-renders when a value changes

---

## Why it matters:

Unlike `useState`, updating a ref:

-   does **not** trigger a re-render
-   does **not** cause component updates
-   survives across renders
-   keeps the same object for the entire life of the component

This makes it perfect for:

-   reading/write values outside the UI
-   interacting with DOM nodes
-   storing mutable values
-   integrating with third-party libraries
-   solving “stale closure” issues in callbacks

Without `useRef`, you would be forced to use state, which would cause unnecessary renders.

---

## Syntax:

**Basic form:**

```jsx
const ref = useRef(initialValue);
```

**Accessing the value:**

```jsx
ref.current;
```

**Updating the value:**

```jsx
ref.current = newValue;
```

---

## Example:

**Accessing a DOM element**

```jsx
import { useRef } from "react";

function InputFocus() {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <input ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}
```

[![Edit useRef-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/p6fs7r)

Here:

-   `inputRef.current` refers to the actual DOM `<input />`
-   No re-renders happen when `.current` changes

---

## Common mistakes:

-   ❌ Thinking that updating a ref causes a re-render
    It does NOT. That is what makes `useRef` special.

-   ❌ Using useRef instead of state for UI-visible values
    If the UI must update → useState, NOT useRef.

-   ❌ Forgetting that `.current` can be anything
    You can store numbers, objects, arrays, functions, DOM nodes, timers, etc.

-   ❌ Using ref before it is attached
    During first render, `.current` is often `null`.

-   ❌ Confusing useRef with createRef
    `createRef` creates a new ref on **every render** → useRef does not.

---

## Summary:

`useRef` returns a persistent, mutable object whose `.current` property survives across renders without causing re-renders. It is used for accessing DOM elements, storing mutable values, holding previous values, and managing timers or subscriptions. It should not replace state for UI updates, but is perfect for non-render-related values.

---

## Footnotes

[^1]:
    **useRef**:
    when you write:
    `const ref = useRef(0);`
    **React creates a persistent object `{ current: initialValue }` and stores it inside the Fiber’s hook list.**

    hook is inside a fiber &rarr; on first render &rarr; react creates the ref object &rarr; `const ref = useRef(5);` &rarr; `{ current: 5 }` &rarr;

    ```jsx
    Hook {
    memoizedState: { current: 5 },
    next: Hook | null
    }
    ```

    on every re-render &rarr; `ref.current === the same object every render`

    `.current` is inside a mutable object, React does not track it &rarr; `useRef` is perfect for _values React should not react to_.
