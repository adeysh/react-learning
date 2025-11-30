# Prop Drilling

## What it is:

Prop drilling is when you have to pass data or functions through **multiple layers of components** that do not actually need them—just so a deeply nested child can access the value.[^1]
It happens when data must move from a top-level component to a deeply nested one, but React only allows data to be passed **down** via props.

---

## Why it matters:

Prop drilling becomes a problem when:

-   Many layers pass the same props unnecessarily
-   Components become “middlemen”
-   File readability gets worse
-   Refactoring becomes harder
-   Components get bloated with irrelevant props

Prop drilling is common in small apps but becomes **unmanageable** in medium or large apps.
It usually signals the need for **Context, custom hooks**, or better architecture.

---

## Syntax:

**Prop drilling example (conceptual):**

```jsx
// Level 1
function App() {
    return <Parent user={"Bob"} />;
}

// Level 2
function Parent({ user }) {
    return <Child user={user} />;
}

// Level 3
function Child({ user }) {
    return <GrandChild user={user} />;
}

// Level 4 (actual user of data)
function GrandChild({ user }) {
    return <p>{user}</p>;
}
```

Even though only GrandChild needs `user`, every component must receive and pass it.

---

## Example:

**Passing callbacks down multiple levels**

```jsx
function App() {
    function handleLogout() {
        console.log("Logged out");
    }

    return <Navbar onLogout={handleLogout} />;
}

function Navbar({ onLogout }) {
    return <Menu onLogout={onLogout} />;
}

function Menu({ onLogout }) {
    return <MenuItem onLogout={onLogout} />;
}

function MenuItem({ onLogout }) {
    return <button onClick={onLogout}>Logout</button>;
}
```

[![Edit prop-drilling-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/7n2dmx)

Lots of unnecessary passing just so the button can call the function.

---

## Common mistakes:

-   **Passing too many props unnecessarily**
    Components become difficult to maintain.

-   **Not using Context when many components need the same data**
    This creates deeply nested prop tunnels.

-   **Mixing unrelated props in intermediate components**
    Leads to bloated component signatures.

-   **Not splitting components properly**
    Good architecture reduces prop drilling.

---

## Summary:

Prop drilling is when data is passed through components that don’t need it, just to reach a deeply nested child.
It hurts readability, maintainability, and scalability.
When prop drilling becomes excessive, you should consider using Context, better component structure, or extracting shared logic into hooks.

---

## Footnotes

[^1]:
    **Prop Drilling**:
    Prop drilling is just passing arguments through multiple function calls.

    Internally, React stores props inside the fiber node for each component:
    `fiber.pendingProps,fiber.memoizedProps`
