# Render Props

## What it is:

Render Props is a design pattern in React where a component accepts a **function** as a prop, and uses that function to determine what UI to render.

The idea: **a component provides logic, and the consumer decides the UI**.

This moves control of the UI from the reusable component to the component that uses it.

A render-prop function looks like: `(props) => JSX`

Render props were one of the earliest solutions to:

-   sharing stateful logic
-   avoiding code duplication
-   making reusable logic components

(Custom Hooks replaced most use cases, but render props are still useful.)

---

## Why it matters:

Render Props helps when:

-   You want to reuse complex logic (state, effects, calculations)
-   You want the parent to decide how the UI looks
-   You don’t want to tightly couple logic + UI inside a single component
-   You want full control over how the output is rendered

Render props are especially useful for:

-   animations
-   mouse/scroll/resize tracking
-   form logic
-   fetching APIs
-   reusable logic components

Even though Hooks now dominate, render props still appear in libraries (Framer Motion, downshift, react-spring, etc.).

---

## Syntax:

**Basic pattern:**

```jsx
<MyComponent render={(data) => <UI data={data} />} />
```

**Or using children as a function:**

```jsx
<MyComponent>{(data) => <UI data={data} />}</MyComponent>
```

The component calls the function internally to render UI.

---

## Example:

**Logic provider component:**

```jsx
function MouseTracker({ children }) {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    function handleMove(e) {
        setPos({ x: e.clientX, y: e.clientY });
    }

    return <div onMouseMove={handleMove}>{children(pos)}</div>;
}
```

**Using the component:**

```jsx
<MouseTracker>
    {(pos) => (
        <h1>
            Mouse at {pos.x}, {pos.y}
        </h1>
    )}
</MouseTracker>
```

[![Edit render-props-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/7hr6wj)

Here:

-   `MouseTracker` handles logic
-   Parent decides the UI

This makes logic **reusable and flexible**.

---

## Common mistakes:

-   ❌ Using render props when a normal component is enough
    Overengineering makes code hard to follow.

-   ❌ Creating deeply nested render function wrappers

    This leads to the “wrapper hell” problem.

-   ❌ Using render props when a custom hook is simpler
    Hooks often replace render props cleanly.

-   ❌ Forgetting to memoize heavy logic
    Passing inline functions everywhere can hurt performance.

-   ❌ Mixing UI and logic inside the render prop provider
    Defeats the purpose of separation.

---

## Summary:

Render Props is a pattern where a component receives a function that returns JSX.
It separates logic from UI and allows the parent to fully control rendering.
While modern React uses custom hooks for most shared logic, render props remain a powerful pattern used in many libraries and complex UI scenarios.
