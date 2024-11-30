import { useRef, useState } from "react";
import { CharadePrompt } from "./components/CharadePrompt";
import { Header } from "./components/Header";
import { CountdownTimer } from "./components/CountdownTimer";
import { PointTracker } from "./components/PointTracker";

function Game() {
    const [isPromptVisible, setIsPromptVisible] = useState(false);
    const [canAddPoint, setCanAddPoint] = useState(false);
    const timerRef = useRef<{ resetTimer: () => void } | null>(null);

    const handleTimerStart = () => {
        setIsPromptVisible(false);
        setCanAddPoint(false);
    };

    const handleTimerStop = () => {
        setCanAddPoint(true);
    };

    const resetTimer = () => {
        timerRef.current?.resetTimer();
    };

    return (
        <div>
            <Header />
            <CharadePrompt isPromptVisible={isPromptVisible} setIsPromptVisible={setIsPromptVisible} />
            <CountdownTimer
                ref={timerRef}
                initialTime={60}
                onStart={handleTimerStart}
                onStop={handleTimerStop}
            />
            <PointTracker canAddPoint={canAddPoint} setCanAddPoint={setCanAddPoint} resetTimer={resetTimer} />
        </div>
    );
}

export default Game;
