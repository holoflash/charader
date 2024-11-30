import { useState } from "react";
import prompts from "../assets/charades.json";

interface CharadePromptProps {
    isPromptVisible: boolean;
    setIsPromptVisible: (visible: boolean) => void;
}

export function CharadePrompt({ isPromptVisible, setIsPromptVisible }: CharadePromptProps) {
    const [randomPrompt, setRandomPrompt] = useState<{
        Swedish: string;
        English: string;
    } | null>(null);

    const getRandomPrompt = () => {
        const randomIndex = Math.floor(Math.random() * prompts.length);
        const selectedPrompt = prompts[randomIndex];
        setRandomPrompt(selectedPrompt);
        setIsPromptVisible(true);
    };

    return (
        <div className="charades container">
            {isPromptVisible && randomPrompt && (
                <div>
                    <span className="prompt">{randomPrompt.Swedish}</span>
                    <span className="prompt-trans">{randomPrompt.English}</span>

                </div>
            )}
            <button onClick={getRandomPrompt}>Get New Word</button>
        </div>
    );
}
