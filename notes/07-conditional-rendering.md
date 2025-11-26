# Conditional Rendering

## What it is:

Conditional rendering means showing or hiding parts of the UI based on certain conditions (like [state](05-state-and-usestate.md) or [props](04-props.md)).
It works just like conditions in JavaScript (`if`, `? :`, `&&`), but used inside JSX to decide what React should display.

---

## Why it matters:

Conditional rendering lets you build **dynamic, interactive UIs**.

You can:

-   Show “Login” or “Logout”
-   Display loaders or error messages
-   Toggle UI elements
-   Switch between components
-   Change content based on data

Almost every React component uses conditional rendering.

---

## Syntax:

**If statement (outside JSX):**

```jsx
if (loggedIn) {
    return <h1>Welcome Back!</h1>;
}
return <h1>Please Log In</h1>;
```

**Ternary operator (inside JSX):**

```jsx
{
    loggedIn ? <Dashboard /> : <Login />;
}
```

**Logical AND (show something only if true):**

```jsx
{
    isLoading && <p>Loading...</p>;
}
```

**Logical OR (fallback content):**

```jsx
{
    name || "Guest";
}
```

**Ternary for text:**

```jsx
<button>{isOn ? "Turn Off" : "Turn On"}</button>
```

---

## Example:

**Toggle Component (show/hide text)**

`ToggleMessage.jsx`

```jsx
import { useState } from "react";

function ToggleMessage() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"} Message</button>

            {show && <p>This is a secret message!</p>}
        </div>
    );
}

export default ToggleMessage;
```

[![Edit conditional-rendering-syntax](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/txh6jc)

What happens:

-   Button toggles `show` state
-   When `show` is true → message appears
-   When false → message disappears

---

## Common mistakes:

-   ❌ Writing JavaScript statements inside JSX:

    ```jsx
    {
        if (loggedIn) {
            <h1>Hi</h1>; // wrong
        }
    }
    ```

-   ✔ Only expressions work inside `{}`:

    ```jsx
    {
        loggedIn && <h1>Hi</h1>; // correct
    }
    ```

-   ❌ Forgetting a fallback in a ternary:

    ```jsx
    isDark ? <DarkMode /> // wrong
    isDark ? <DarkMode /> : <LightMode /> // ✔ correct
    ```

-   ❌ Using too many nested ternaries (makes code hard to read)

---

## Summary:

Conditional rendering lets React components show different UI based on state or props.
You can conditionally display components using if-statements, ternaries, and logical operators.
It’s essential for toggles, loaders, forms, dashboards, and most interactive UIs.

---

## Footnotes
