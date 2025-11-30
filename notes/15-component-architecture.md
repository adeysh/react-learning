# Component Architecture

## What it is:

Component Architecture is the way you **design, organize, and structure** your React components so they remain clean, scalable, maintainable, and easy to understand.

It defines:

-   how many components your app should have
-   how components are split
-   how they communicate
-   where logic lives
-   where state lives
-   how data flows
-   how components are grouped in folders

Good component architecture makes even large apps easy to build and maintain.

---

## Why it matters:

React is unopinionated.
You can build components in many ways—but most ways become messy as your app grows.

Good component architecture helps you:

-   avoid “Big App.jsx syndrome”
-   avoid deeply nested components
-   avoid prop drilling
-   separate UI from logic
-   split reusable vs page-specific components
-   scale from 5 components to 500+
-   make code readable to any developer
-   avoid bugs caused by unclear data flow
-   keep concerns separated

Without architecture, React projects become spaghetti—even with hooks.

---

## Syntax:

**Component Types**

There are 3 major component types:

-   Pure UI / Presentational Components

    -   Only render UI
    -   Receive props
    -   No business logic
    -   No side effects

-   Container / Smart Components

    -   Manage state
    -   Contain logic
    -   Fetch data
    -   Call APIs
    -   Pass data to UI components

-   Layout Components
    -   Structure the page
    -   Provide layout (navbar, sidebar, footer)

**Component Naming Pattern**

Component files use **PascalCase**:

```jsx
Button.jsx;
ProductCard.jsx;
TodoItem.jsx;
Navbar.jsx;
```

Hooks use **camelCase** and start with use:

```jsx
useFetch.js;
useLocalStorage.js;
useAuth.js;
```

**Component Folder Structure**

Simple apps:

```jsx
src / components / Button.jsx;
Card.jsx;
App.jsx;
```

Growing apps:

```jsx
src/
  components/
    ui/
      Button.jsx
      Card.jsx
    features/
      todos/
        TodoItem.jsx
        TodoList.jsx
        AddTodo.jsx
      products/
        ProductCard.jsx
  hooks/
  context/
  services/
  utils/
  pages/
```

Large apps:

Feature-based structure:

```jsx
src/
  features/
    auth/
      components/
      hooks/
      services/
    todos/
      components/
      hooks/
      services/
```

This keeps related logic together.

**Data Flow Structure**

React enforces **unidirectional data flow**:

```jsx
Parent → Child (via props)
Child → Parent (via callbacks)
Global → All (via context)
```

Rules:

-   State must live where it’s owned
-   Props pass data down
-   Callbacks pass events up
-   Context/global state avoids prop drilling

**Smart vs Presentational Pattern**

Example:

Smart component (logic):

```jsx
function TodoListContainer() {
    const [todos, setTodos] = useState([]);

    return (
        <TodoList
            todos={todos}
            onDelete={deleteTodo}
        />
    );
}
```

Presentational component (UI only):

```jsx
function TodoList({ todos, onDelete }) {
    return todos.map((todo) => (
        <TodoItem
            todo={todo}
            onDelete={onDelete}
        />
    ));
}
```

Benefits:

-   clear separation of logic & UI
-   easier to test
-   reusability
-   cleaner code

**Where State Should Live**

State should live in the **lowest common parent** that needs it.

Rules:

-   If only one component uses it → keep it local.
-   If siblings use it → lift to parent.
-   If many components need it → use context.
-   If global → use global state or context.

**Component Granularity**

React encourages breaking UI into meaningful pieces.

You create a new component when:

-   UI is reusable
-   UI is large
-   UI is repeated
-   UI has its own state
-   UI is logically separate
-   The component is easily describable in 1 sentence

Avoid over-splitting tiny components—balance is key.

---

## Common mistakes:

-   ❌ Dumping all logic into one huge component
    Leads to unreadable and fragile code.

-   ❌ Over-nesting components
    10 nested divs with unnecessary children → hard to maintain.

-   ❌ Prop Drilling
    Passing props through 5 levels → use context instead.

-   ❌ Mixing UI and logic
    Component becomes bloated and unreadable.

-   ❌ Creating too many tiny components
    A button inside a button inside a tiny wrapper → over-architecture.

-   ❌ Putting unrelated components in same folder
    Hurts scalability.

---

## Summary:

Component Architecture defines how to structure, split, and organize your React components so they remain clean, scalable, and manageable.
It includes component types, folder organization, state ownership, props/callback structure, splitting logic and UI, and creating reusable vs feature-specific parts.
Good architecture prevents complexity and helps apps scale from small projects to large systems.
