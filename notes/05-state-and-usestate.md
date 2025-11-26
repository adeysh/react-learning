# State & `useState` Hook

## What it is:

**State** is React’s way of storing dynamic data inside a component.
When state changes, the component **automatically re-renders** and updates the UI.

`useState`[^1] is a React hook that lets you create and manage state inside **function components.**

---

## Why it matters:

State allows your app to be **interactive** and **dynamic.**
Anything that changes over time should be stored in state, such as:

-   Form inputs
-   Buttons (toggle on/off)
-   Counters
-   Theme (dark/light)
-   API data
-   Tabs, modals, dropdowns
-   Game or app progress

Without state, React apps would be static.

---

## Syntax:

**Declaring state:**

```jsx
const [count, setCount] = useState(0);
```

Meaning:

-   `count` → current value
-   `setCount` → function to update the value
-   `0` → initial value

**Updating state:**[^2]

```jsx
setCount(count + 1);
```

**For strings:**

```jsx
const [name, setName] = useState("Adesh");
```

**For objects:**

```jsx
const [user, setUser] = useState({ name: "Adesh", age: 21 });
```

**For arrays:**

```jsx
const [items, setItems] = useState([]);
```

[![Edit state-syntax-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/lr4r4j)

---

## Example:

**Counter Component:**

`Counter.jsx`

```jsx
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;
```

[![Edit state-counter-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/hdqmx9)

What happens:

1. `count` starts at `0`
2. Button click → `setCount` updates state
3. React re-renders → new value appears instantly

---

## Common mistakes:

-   ❌ Mutating state directly:

    ```jsx
    count = count + 1; // wrong
    user.age = 22; // wrong
    ```

-   ❌ Expecting state to update immediately:

    ```jsx
    console.log(count); // old value
    ```

    React batches updates for performance.

-   ❌ Forgetting to import `useState`

    ```jsx
    import { useState } from "react"; // required
    ```

-   ❌ Using wrong updater for previous state:

    ```jsx
    setCount(count + 1); // okay for simple cases
    setCount((prev) => prev + 1); // ✔ recommended
    ```

---

## Summary:

State holds dynamic data inside components.
The `useState` hook creates and updates that data.
When state changes, React automatically re-renders the UI.
Understanding state is essential because almost every interactive component depends on it.

---

## Footnotes

[^1]:
    **`useState`**:
    React state is implemented using a data structure called the **Fiber Tree** + an internal **linked list of hooks** for each component.
    Component &rarr; Fiber (internal object) &rarr; component's `type`, `props`, `state`, `hooks`, child Fibers, `effects`, refs to prev. & next Fibers.
    Initial Render &rarr; `hook.state = initialState`, `hook.queue = []` &rarr; _returns_ current state value, a setter function tied to this hook

[^2]:
    **`setState()`**:
    React does NOT immediately update the state.
    It adds the update to a queue inside the hook:
    `hook.queue.push(newUpdate)`
    Then React schedules a re-render.
    Next Render &rarr; `hook.state = previousState`,
    `for each update in queue: hook.state = apply(update, hook.state)`
