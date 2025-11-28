# `useEffect` Hook

## What it is:

`useEffect` is a React Hook that lets your component run side effects after rendering.
Side effects are actions that affect something outside the React component.

React components should be pure (no side effects during render), so `useEffect`[^1] gives a safe place to handle them.

---

## Why it matters:

Real-world apps need to do things like:

-   Fetch data from an API
-   Update the document title
-   Store values in localStorage
-   Listen for browser events
-   Set up timers (setTimeout, setInterval)
-   Subscribe/unsubscribe from services

All of these are side effects, and React requires them to be handled inside `useEffect`.

`useEffect` ensures:

-   Side effects run after the DOM is updated
-   Cleanups happen when components unmount or re-run
-   React stays predictable and pure

---

## Syntax:

**Basic form:**

```jsx
useEffect(() => {
    // side effect here
});
```

**With dependency array:**

```jsx
useEffect(() => {
    // side effect here
}, [dependency]);
```

**Run only once on mount:**

```jsx
useEffect(() => {
    // runs once
}, []);
```

**Cleanup function (optional):**

```jsx
useEffect(() => {
    const id = setInterval(() => {
        console.log("running...");
    }, 1000);

    return () => {
        clearInterval(id); // cleanup
    };
}, []);
```

[![Edit useEffect-syntax](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/3l7s9r)

---

## Example:

**Fetching data on component mount:**

`Users.jsx`

```jsx
import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []); // runs once on mount

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

export default Users;
```

[![Edit useEffect-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/453p62)

What this does:

-   On first render: runs the fetch
-   When data arrives: sets state
-   Component re-renders with the new user list

---

## Common mistakes:

-   ❌ Running effects on every render unintentionally

    ```jsx
    useEffect(() => {
        console.log("Runs EVERY render");
    });
    ```

-   ❌ Missing dependency in the dependency array

    ```jsx
    useEffect(() => {
        doSomething(value);
    }, []); // value should be inside the array
    ```

-   ❌ Wrongly adding functions to dependency array

    ```jsx
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]); // fetchUsers recreated each render unless wrapped in useCallback
    ```

-   ❌ Fetching data in render instead of useEffect

    ```jsx
    const data = fetch(...); // ❌ causes infinite requests
    ```

-   ❌ Updating state inside effect without dependency array

    ```jsx
    useEffect(() => {
        setCount(count + 1); // infinite loop
    });
    ```

-   ❌ Not cleaning up subscriptions or intervals

Leads to memory leaks.

---

## Summary:

`useEffect` is used to run side effects—anything that touches the outside world.
It runs after the component renders, can depend on specific values, and can clean up when needed.
It’s essential for fetching data, setting up listeners, timers, subscriptions, and syncing React with external systems.

---

## Footnotes

[^1]: **useEffect**: for `useEffect`, when React renders a component, it registers the `useEffect` in the fiber node. it stores the dependencies. After rendering and painting the UI, React runs the effects. on next render, it compares the dependencies, if any values changed, and if the effect has any cleanup function it runs before running the effect again. after running the effect again, react runs the cleanup once again. In strict mode, the component is mounted twice so the effect runs twice too in development.
