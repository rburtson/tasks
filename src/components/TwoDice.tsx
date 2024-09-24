import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    function left(): void {
        setLeftDie(d6);
    }

    function right(): void {
        setRightDie(d6);
    }

    return (
        <div>
            <Button onClick={left}>Roll Left</Button>
            <div></div>
            Die 1s value is: <span data-testid="left-die">{leftDie}</span>
            <div></div>
            <Button onClick={right}>Roll Right</Button>
            <div></div>
            Die 2s value is: <span data-testid="right-die">{rightDie}</span>
            {leftDie === rightDie ?
                leftDie === 1 ?
                    <div>Snake Eyes! You Lose!</div>
                :   <div>Doubles! You Win</div>
            :   <div>Keep Rolling!</div>}
        </div>
    );
}
