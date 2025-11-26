# Events & Handlers

## What it is:

Events in React are actions that occur in the UI—like clicks, typing, mouse movement, or form submissions.
Handlers (event handlers) are **functions** that run when these events happen.

React uses **camelCase** event names and passes functions instead of strings.

---

## Why it matters:

Events allow your app to **respond to user actions**[^1], making it interactive.
You use event handlers to:

-   Handle button clicks
-   Capture input typing
-   Submit forms
-   Toggle UI elements
-   Open/close modals
-   Build dynamic interactions

Almost every component needs event handling.

---

## Syntax:

**Basic click handler:**[^2]

```jsx
function App() {
    function handleClick() {
        console.log("Button clicked!");
    }

    return <button onClick={handleClick}>Click Me</button>;
}
```

**Inline handler:**

```jsx
<button onClick={() => console.log("Clicked!")}>Click</button>
```

**Input event:**

```jsx
<input onChange={(e) => console.log(e.target.value)} />
```

**Prevent default (e.g., form submission):**

```jsx
function handleSubmit(e) {
    e.preventDefault();
}
```

[![Edit events-handlers-syntax-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/5fk8zx)

---

## Example:

**Example: Updating state with events**

`NameInput.jsx`

```jsx
import { useState } from "react";

function NameInput() {
    const [name, setName] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                onChange={handleChange}
            />
            <h2>Hello, {name}</h2>
        </div>
    );
}

export default NameInput;
```

[![Edit events-handlers-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/cwmtzy)

What happens:

1. Typing triggers `onChange`
2. Handler receives the event
3. `name` state updates
4. UI re-renders automatically

---

## Common mistakes:

-   ❌ Calling the handler instead of passing it:

    ```jsx
    onClick={handleClick()}  // wrong
    onClick={handleClick} // ✔ correct
    ```

-   ❌ Using lowercase event names:

    ```jsx
    onclick = {}; // wrong
    onClick = {}; // ✔ correct
    ```

-   ❌ Forgetting to access the event object:

    ```jsx
    e.target.value; // correct for input fields
    ```

-   ❌ Doing heavy logic directly inside JSX:

    ```jsx
    onClick={() => { /* complex logic */ }} // avoid
    ```

-   ❌ Not preventing form reload:
    ```jsx
    e.preventDefault();
    ```

---

## Summary:

Events represent user actions, and handlers are functions that run when those actions occur.
React event handling uses camelCase syntax and passes functions, not strings.
Events are essential for building interactive UIs that respond to clicks, typing, and input changes.

---

## Footnotes

[^1]:
    **What does actually happen?**:
    App Starts &rarr; 1 listener of every type of event is added to `root` DOM node. The listener listens for any event. &rarr; Event happens &rarr; browser fires DOM event &rarr; bubbling up &rarr; reaches root event listener &rarr; creates SyntheticEvent object &rarr; React determines which component should receive it &rarr; React calls handler function

[^2]: _For a button click:_ button clicked &rarr; browser fires `click` event &rarr; event bubbles to root &rarr; react root listener catches &rarr; it creates synthetic event object &rarr; looks up the Fiber node of the element &rarr; calls `onClick` function &rarr; places state update in a queue &rarr; schedules a re-render &rarr; updates the virtual DOM &rarr; patches the real DOM selectively.
