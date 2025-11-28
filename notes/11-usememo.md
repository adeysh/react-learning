# `useMemo` Hook

## What it is:

`useMemo` is a React Hook that **memoizes a value** — meaning it remembers the result of a computation and reuses it until its dependencies change.

It is used to optimize performance by avoiding **expensive recalculations** on every render.[^1]

---

## Why it matters:

React re-renders components often, and each render recomputes everything inside the component function.

Most computations are cheap, but some are expensive:

-   Filtering a large list
-   Sorting data
-   Heavy mathematical calculations
-   Creating objects/arrays that break memoization in children
-   Computing derived state

If these computations run on every render, your app slows down.

`useMemo` prevents unnecessary recalculations and makes your app faster.

---

## Syntax:

**Basic form:**

```jsx
const memoizedValue = useMemo(() => computeSomething(), [dependency]);
```

**Recalculated ONLY when dependency changes**

```jsx
useMemo(() => {
    return value * 2;
}, [value]);
```

**Heavy calculation example:**

```jsx
const expensiveResult = useMemo(() => {
    return heavyMathFunction(input);
}, [input]);
```

---

## Example:

**Filtering a list efficiently**

```jsx
import { useMemo, useState } from "react";

function Users({ allUsers }) {
    const [query, setQuery] = useState("");

    const filteredUsers = useMemo(() => {
        return allUsers.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()));
    }, [allUsers, query]);

    return (
        <>
            <input onChange={(e) => setQuery(e.target.value)} />
            <ul>
                {filteredUsers.map((u) => (
                    <li key={u.id}>{u.name}</li>
                ))}
            </ul>
        </>
    );
}
```

[![Edit useMemo-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/sc4jpz)

Here:

-   The filtering runs ONLY when `allUsers` or `query` changes
-   Not on every keystroke or re-render
-   Improves performance for large data sets

---

## Common mistakes:

-   ❌ Using useMemo for everything

    ```jsx
    const x = useMemo(() => 5, []); // unnecessary
    ```

-   ❌ Thinking useMemo ALWAYS improves performance

    Memoization = extra overhead.
    Use ONLY when needed.

-   ❌ Forgetting dependencies

    ```jsx
    useMemo(() => expensiveFn(a, b), []); // wrong if a or b changes
    ```

-   ❌ Using unstable objects as dependencies

    ```jsx
    useMemo(() => compute(obj), [obj]); // obj recreated every render → ineffective
    ```

-   ❌ Passing inline objects to children instead of memoizing

    ```jsx
    <Child data={{ name: "A" }} /> // object recreated each render
    ```

---

## When to use useMemo:

-   When a calculation is expensive
    -   Sorting
    -   Filtering
    -   Heavy math
    -   Complex transformations
-   When passing objects/arrays to children
    to avoid breaking their memoization (`React.memo`)
-   When creating configuration objects for children
    like chart settings or theme overrides
-   When computing derived state
    that would otherwise recompute unnecessarily

---

## Summary:

`useMemo` memoizes the result of a computation and recomputes only when dependencies change.
It is used to optimize performance, especially for expensive calculations or when passing objects/arrays to memoized components.
Use it sparingly and only when necessary — premature optimization can hurt performance.

---

## Footnotes

[^1]:
    **Performance Optimization**:
    when `useMemo` is used:
    `const memoizedValue = useMemo(() => computeSomething(), [a, b]);`
    react remembers the **result** of your function AND the **dependencies** from the last render.

    hook is inside a fiber &rarr; `{memoizedValue: result of fn(),deps: [a, b]}` &rarr; when component re-renders &rarr; Are the new deps === previous deps ? &rarr; This is a shallow comparison &rarr; same number of items + each item === previous item &rarr; If dependencies DID NOT change &rarr; `return old.memoizedValue;` &rarr; If dependencies DID change &rarr; react does:

    ```jsx
    const newValue = fn();
    store newValue
    store new deps
    return newValue
    ```

    the function passed to `useMemo` runs only when needed.
    **useMemo = “remember this value unless dependencies change.”**
