import { useState } from "react";
import "./App.css";
import useLocalStorage from "./useLocalStorage";

function App() {
    const [value, setValue] = useState("");

    const { setItem, getItem, removeItem } = useLocalStorage("value");

    return (
        <>
            <h1>
                Custom hook: <code>useLocalStorage</code>
            </h1>
            <div className="card">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={() => setItem(value)}>Set</button>
                <button onClick={() => console.log(getItem())}>Get</button>
                <button onClick={removeItem}>Remove</button>
            </div>
        </>
    );
}

export default App;
