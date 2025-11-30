import { useState } from "react";
import "./App.css";
import { ThemeContext } from "./theme-context";
import Button from "./Button";

function App() {
    const [count, setCount] = useState(0);

    return (
        <ThemeContext.Provider value="light">
            <h1>Theme Context</h1>
            <div className="card">
                <Button
                    count={count}
                    setCount={setCount}
                />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
