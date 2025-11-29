import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        if (savedTheme) {
            return savedTheme;
        }
    });

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <>
            <h1>Dark/Light Mode</h1>
            <div className="card">
                <button onClick={toggleTheme}>
                    Switch to {theme === "light" ? "Dark" : "Light"} Theme
                </button>
            </div>
        </>
    );
}

export default App;
