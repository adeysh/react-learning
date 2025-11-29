import { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    const handleStart = () => {
        if (!isRunning) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        }
    };

    const handleStop = () => {
        if (isRunning) {
            setIsRunning(false);
            clearInterval(intervalRef.current);
        }
    };

    const handleReset = () => {
        setIsRunning(false);
        clearInterval(intervalRef.current);
        setTime(0);
    };

    const formatTime = (milliseconds) => {
        const hours = Math.floor(milliseconds / 3600000);
        const minutes = Math.floor((milliseconds % 3600000) / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        const ms = Math.floor((milliseconds % 1000) / 10);

        return (
            `${hours.toString().padStart(2, "0")}:` +
            `${minutes.toString().padStart(2, "0")}:` +
            `${seconds.toString().padStart(2, "0")}:` +
            `${ms.toString().padStart(2, "0")}`
        );
    };

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>{formatTime(time)}</p>
            <div className="btn-container">
                <button
                    onClick={handleStart}
                    disabled={isRunning}
                >
                    Start
                </button>
                <button
                    onClick={handleStop}
                    disabled={!isRunning}
                >
                    Stop
                </button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default Stopwatch;
