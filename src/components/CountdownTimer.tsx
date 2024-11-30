import { useState, useEffect, forwardRef, useImperativeHandle } from "react";

interface CountdownTimerProps {
    initialTime: number;
    onStart: () => void;
    onStop: () => void;
}

export const CountdownTimer = forwardRef(({ initialTime, onStart, onStop }: CountdownTimerProps, ref) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    useEffect(() => {
        if (!isRunning || timeLeft <= 0) {
            if (timeLeft === 0) onStop();
            return;
        }

        const timer = setTimeout(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft, isRunning, onStop]);

    useImperativeHandle(ref, () => ({
        resetTimer: () => {
            setTimeLeft(initialTime);
            setIsRunning(false);
        },
    }));

    return (
        <div className="timer container">
            <h2>
                {minutes}:{seconds.toString().padStart(2, "0")}
            </h2>
            {!isRunning && timeLeft > 0 && (
                <button
                    onClick={() => {
                        setIsRunning(true);
                        onStart();
                    }}
                >
                    Start Timer
                </button>
            )}
            {isRunning && (
                <button
                    onClick={() => {
                        setIsRunning(false);
                        onStop();
                    }}
                >
                    Stop Timer
                </button>
            )}
        </div>
    );
});
