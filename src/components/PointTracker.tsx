import { useState } from "react";

export function PointTracker({ canAddPoint, setCanAddPoint, resetTimer }: {
    canAddPoint: boolean;
    setCanAddPoint: (visible: boolean) => void;
    resetTimer: () => void;
}) {
    const [points, setPoints] = useState(0);

    const handleGuessed = () => {
        setPoints((prevPoints) => prevPoints + 1);
        setCanAddPoint(false);
        resetTimer();
    };

    const handleDidNotGuess = () => {
        setCanAddPoint(false);
        resetTimer();
    };
    const handleOtherTeamGuessed = () => {
        setPoints((prevPoints) => prevPoints - 1);
        setCanAddPoint(false);
        resetTimer();
    };


    return (
        <div className="points container">
            <h2>Points: {points}</h2>
            {canAddPoint && (
                <div>
                    <button onClick={handleGuessed}>GUESSED</button>
                    <button onClick={handleDidNotGuess}>DIDN'T GUESS</button>
                    <button onClick={handleOtherTeamGuessed}>OTHER TEAM GUESSED</button>
                </div>
            )}
        </div>
    );
}
