import { useState } from "react";

const Button = () => {
    const [light, setLight] = useState(false);

    return (
        <button
            type="button"
            className={light ? "on" : "off"}
            onClick={() => setLight(!light)}
        >
            Toggle Light {light ? "OFF" : "ON"}
        </button>
    );
};

export default Button;
