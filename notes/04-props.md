# Props

## What it is:

Props (short for _properties_) are inputs passed from one component to another.
They allow components to receive data, similar to how function arguments[^1] work.

Props are **read-only**[^2], meaning a component cannot change the props it receives.

---

## Why it matters:

-   Props let you make components **dynamic and reusable**
-   They allow **communication from parent → child**
-   Most React UIs depend on props for passing data
-   Without props, every component would be static

Example use cases:

-   Passing text to a `Button`
-   Passing image URLs to a `Card`
-   Passing user data to a `Profile` component
-   Passing callbacks for events

---

## Syntax:

**Passing props:**

```jsx
<Welcome
    name="Adesh"
    age={21}
/>
```

**Receiving props:**[^3]

```jsx
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
```

**Destructuring props:**

```jsx
function Welcome({ name, age }) {
    return (
        <h2>
            {name} is {age} years old.
        </h2>
    );
}
```

[![Edit props-syntax-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/h3rhvy)

---

## Example:

**Parent Component:**

`App.jsx`

```jsx
import Greeting from "./Greeting";

function App() {
    return (
        <div>
            <Greeting
                name="Adesh"
                message="Welcome to React!"
            />
        </div>
    );
}

export default App;
```

**Child Component:**

`Greeting.jsx`

```jsx
function Greeting({ name, message }) {
    return (
        <h1>
            {message} {name}!
        </h1>
    );
}

export default Greeting;
```

[![Edit props-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/2dltnr)

Here:

-   `App` is sending data via props
-   `Greeting` is receiving and displaying it

---

## Common mistakes:

-   Trying to modify props (props are read-only)
    ```jsx
    props.name = "New Name"; // Not allowed
    ```
-   Forgetting to pass required props
-   Misspelling prop names (`massage` instead of `message`)
-   Passing string numbers without braces:
    ```jsx
    age="25" // string
    age={25} // ✔ number
    ```
-   Confusing **props** with **state**
    -   Props: external, read-only
    -   State: internal, changeable

---

## Summary:

Props are inputs to components and allow data to flow from parent to child.
They make components reusable, dynamic, and flexible.
Props are always read-only, and most React applications rely heavily on passing props between components.

---

## Footnotes

[^1]: **arguments**: are the actual values or expressions that are passed into a function when it is called. These values are then used by the function to perform its operations.
[^2]: Props are **read only**:

    1. Because React follows a one-way data flow: Data in React always flows **from parent → child**, never the other way. React avoids all this by making props immutable.
    2. Because props come from outside the component. A component does not own its props — the parent owns them.
    3. Immutable data makes UI predictable

[^3]:
    Props are received by a component as a single object, usually called `props`. Inside that object are all the values passed from the parent. Instead of receiving the whole `props` object, you can **pull out** specific values _(Object Destructuring)_
    `function Component({ prop1, prop2 }) { ... }`.
