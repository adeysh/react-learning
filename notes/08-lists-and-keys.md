# Lists & Keys

## What it is:

Lists in React are created by converting arrays into groups of JSX elements using `.map()`.[^1]
Keys are special attributes you must add to list items to help React identify which items change, get added, or get removed.[^2]

Keys make list rendering efficient and predictable.

---

## Why it matters:

-   Lists allow you to display dynamic data (users, products, posts, todos, etc.)
-   Keys help React track items and update only what’s necessary
-   Without keys, React can mix up list items during updates
-   Most real-world apps involve rendering dynamic lists from APIs or user input

---

## Syntax:

**Rendering a list:**

```jsx
const items = ["Apple", "Banana", "Orange"];

return (
    <ul>
        {items.map((item) => (
            <li>{item}</li>
        ))}
    </ul>
);
```

**Adding keys:**

```jsx
{
    items.map((item) => <li key={item}>{item}</li>);
}
```

**Rendering objects:**

```jsx
const users = [
    { id: 1, name: "Adesh" },
    { id: 2, name: "Rohan" },
];

return (
    <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
    </ul>
);
```

[![Edit lists-and-key-syntax](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/vrnjhj)

---

## Example:

**Todo List Example**

`TodoList.jsx`

```jsx
import { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn React" },
        { id: 2, text: "Build Projects" },
    ]);

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
}

export default TodoList;
```

[![Edit lists-and-key-todo-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/n4y4l4)

Why it works:

-   `.map()` creates one `<li>` for every todo
-   Each `<li>` has a `key` tied to its unique `id`
-   If a todo is added/removed, React updates only that part

---

## Common mistakes:

-   ❌ Using array index as a key:

    ```jsx
    key = { index }; // avoid unless list never changes
    ```

-   ❌ Missing keys entirely:

    ```jsx
    <li>Item</li> // React warns
    ```

-   ❌ Using non-unique keys:

    ```jsx
    key={user.name} // wrong if names can repeat
    ```

-   ❌ Putting the key on the wrong element:

    ```jsx
    <div>
        <li key={id}>Item</li> // key must be on the outermost element of the loop
    </div>
    ```

-   ❌ Forgetting to return inside `.map()`:

    ```jsx
    users.map((u) => {
        <li>{u.name}</li>;
    }); // wrong (missing 'return')

    users.map((u) => <li key={u.id}>{u.name}</li>); // correct
    ```

---

## Summary:

Lists convert arrays into JSX elements using `.map()`.
Keys help React track items in a list and optimize updates.
Always use unique, stable keys — preferably IDs from your data.
List rendering + keys is essential for working with dynamic content and APIs.

---

## Footnotes

[^1]:
    **How lists are actually created:**:
    React loops through the array &rarr; for each item &rarr; a Fiber node &rarr; each Fiber has `key` (should have) &rarr; if keys are not provided &rarr; uses array index as keys &rarr; renders

[^2]:
    **Keys**:
    keys help react match by identity. react re-renders &rarr; compares old fibers <-> new virtual dom fibers &rarr; updates positions (if it was changed) without re-rendering all other items
