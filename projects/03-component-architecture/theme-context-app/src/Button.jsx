import { useContext } from "react";
import { ThemeContext } from "./theme-context";
import "./Button.css";

export default function Button({ count, setCount }) {
    const theme = useContext(ThemeContext);
    return (
        <button
            className={theme}
            onClick={() => setCount((count) => count + 1)}
        >
            count is {count}
        </button>
    );
}
