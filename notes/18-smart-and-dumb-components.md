# Smart and Dumb Components

## What it is:

Smart and Dumb Components is a classic React architecture pattern that separates **logic** from **presentation**.

It splits components into two categories:

**Smart Components (Container components):**

-   Handle logic
-   Manage state
-   Fetch data
-   Connect to context/API
-   Decide _what_ to show

**Dumb Components (Presentational components):**

-   Only display UI
-   Receive props
-   Don’t manage state or side effects
-   Don’t know where data comes from
-   Decide _how_ to show it

This separation keeps your UI clean and your app scalable.

---

## Why it matters:

This pattern improves:

-   Reusability → presentational components can be reused anywhere
-   Maintainability → complex logic stays separate from UI
-   Readability → UI and business logic don’t mix
-   Testability → dumb components are easy to unit-test
-   Separation of concerns → “data vs display” becomes clean

As apps grow, mixing UI and logic makes components large, messy, and harder to modify.
Smart/Dumb architecture prevents that.

---

## Syntax:

**Smart component (manages logic):**

```jsx
function TodoListContainer() {
    const [todos, setTodos] = useState([]);
    const completed = todos.filter((t) => t.done);

    return (
        <TodoList
            todos={completed}
            onToggle={(id) => toggleTodo(id)}
        />
    );
}
```

**Dumb component (renders UI only):**

```jsx
function TodoList({ todos, onToggle }) {
    return (
        <ul>
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    onClick={() => onToggle(todo.id)}
                >
                    {todo.text}
                </li>
            ))}
        </ul>
    );
}
```

Smart handles:

-   data
-   filtering
-   callbacks
-   transformations

Dumb handles:

-   layout
-   styling
-   rendering

---

## Example:

**Smart Component:**

```jsx
function UserProfileContainer() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUser().then(setUser);
    }, []);

    return <UserProfile user={user} />;
}
```

**Dumb Component:**

```jsx
function UserProfile({ user }) {
    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <img src={user.avatar} />
            <h2>{user.name}</h2>
        </div>
    );
}
```

Here:

-   `UserProfileContainer` fetches data
-   `UserProfile` displays it

[![Edit smart-and-dumb-components-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/cf7hvp)

---

## Common mistakes:

-   ❌ Putting API calls inside UI components
    This mixes logic with presentation.

-   ❌ Making dumb components manage their own state

    Dumb components should be stateless or use only local UI state.

-   ❌ Passing too many props to dumb components
    Keep dumb components simple and focused.

-   ❌ Over-splitting into too many small components
    Don’t create unnecessary components.

-   ❌ Putting business logic in deeply nested UI components
    Keep logic at higher levels (smart components).

---

## Summary:

Smart and Dumb Components is a pattern that separates state and logic from UI and layout.
Smart components handle data, side effects, and decisions; dumb components handle display and layout.
This leads to cleaner architecture, reusable UI components, and more maintainable code as your React app grows.
