import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => {
            clearInterval(id);
        };
    }, [count]);

    return (
        <>
            <h1>Auto Counter</h1>
            <div className="card">
                <button>count is {count}</button>
            </div>
        </>
    );
}

export default App;
