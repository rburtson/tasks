import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    function startQuiz(): void {
        setInProgress(!inProgress);
        setAttempts(attempts - 1);
        setIsDisabled(!isDisabled);
    }

    function stopQuiz(): void {
        setInProgress(!inProgress);
        setIsDisabled(!isDisabled);
    }

    function addAttempt(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            Attempts: {attempts}
            <div></div>
            <Button
                disabled={attempts > 0 ? isDisabled : true}
                onClick={startQuiz}
            >
                Start Quiz
            </Button>
            <Button disabled={!isDisabled} onClick={stopQuiz}>
                Stop Quiz
            </Button>
            <Button disabled={isDisabled} onClick={addAttempt}>
                Mulligan
            </Button>
        </div>
    );
}
