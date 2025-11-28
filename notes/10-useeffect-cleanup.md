# `useEffect` Cleanup

## What it is:

The cleanup function in `useEffect` is a special function that React calls to **clean up** or **undo** side effects before running the effect again or before unmounting the component.

Cleanup helps prevent:

-   memory leaks
-   duplicate event listeners
-   multiple intervals/timers
-   leftover subscriptions
-   stale data usage

Cleanup[^1] is returned from inside the `useEffect` callback.

---

## Why it matters:

Many side effects create connections to external systems that must be **removed** when the component updates or disappears.

Cleanup solves problems like:

-   “multiple API calls happening repeatedly”
-   “eventListener attached twice”
-   “timer running even after component is removed”
-   “scroll listener never removed”
-   “WebSocket still open after page change”

Without cleanup, apps become slow, buggy, and unpredictable.

---

## Syntax:

**Basic structure:**

```jsx
useEffect(() => {
    // side effect

    return () => {
        // cleanup
    };
}, []);
```

**Cleanup runs before effect re-runs:**

```jsx
useEffect(() => {
    console.log("Effect runs");

    return () => {
        console.log("Cleanup runs");
    };
}, [value]);
```

**Cleanup runs on unmount (component removed):**

```jsx
useEffect(() => {
    return () => {
        console.log("Component unmounted");
    };
}, []);
```

[![Edit useEffect-cleanup-syntax](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/2hjwhy)

---

## Example:

**Cleaning up an interval**

```jsx
useEffect(() => {
    // this will run indefinitely
    const id = setInterval(() => {
        console.log("running...");
    }, 1000);

    return () => {
        clearInterval(id); // cleanup
    };
}, []);
```

[![Edit useEffect-cleanup-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/25kfxf)

What happens:

-   Effect sets up an interval
-   Cleanup clears it before component unmounts
-   Prevents duplicated intervals, memory leaks

---

## Common mistakes:

-   ❌ Not cleaning up event listeners

    ```jsx
    useEffect(() => {
        window.addEventListener("resize", handleResize);
    });
    ```

    Attaches the listener repeatedly → big bug.

    Correct:

    ```jsx
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    ```

-   ❌ Not cleaning up intervals or timeouts

    ```jsx
    setInterval(...)  // ❌ no cleanup
    ```

-   ❌ Using stale closures
    If effect depends on state but cleanup does not update, results may become inconsistent.

-   ❌ Returning nothing for long-lasting side effects
    Never leave subscriptions or sockets open.

-   ❌ Running cleanup on every render unintentionally
    If no dependency array is provided, cleanup runs _before every render_.

---

## Summary:

The cleanup function inside `useEffect` removes or undoes side effects to keep components predictable and avoid memory leaks.

Cleanup runs when:

-   the effect re-runs (before the next effect)
-   the component unmounts
    It’s essential for handling event listeners, intervals, subscriptions, timeouts, and external resources safely.

---

## Footnotes

[^1]:
    **Cleanup**: when react sees effect, it does not run anything, but effect becomes and effect object inside fiber. something like this :

    ```jsx
    Effect {
    tag: Passive | Layout,
    create: the effect callback,
    destroy: the cleanup function (initially null),
    deps: [count],
    next: pointer to next effect in list
    }
    ```

    fiber &rarr; `fiber.updateQueue = linked list of effects`

    React renders the component (registers the effect, stores the effect callback, stores the dependencies) &rarr; react has a list of all the effects &rarr; it creates two phases &rarr; cleanup phase which execute all current cleanup functions before re-running effects &rarr; effect phase which run all new effect callbacks and store their cleanup returns &rarr; component unmounts &rarr; for every effect that had a cleanup, the cleanup is ran again, then the fiber gets deleted.
