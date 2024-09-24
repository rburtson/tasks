import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ShoveBox(): React.JSX.Element {
    const [position, setPosition] = useState<number>(10);

    function MoveableBox({
        position,
        setPosition,
    }: {
        position: number;
        setPosition: (newPosition: number) => void;
    }): React.JSX.Element {
        return (
            <div
                data-testid="moveable-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "lightblue",
                    border: "1px solid blue",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: position + "px",
                }}
            ></div>
        );
    }

    function ShoveBoxButton({
        position,
        setPosition,
    }: {
        position: number;
        setPosition: (newPosition: number) => void;
    }) {
        return (
            <Button
                onClick={() => {
                    setPosition(4 + position);
                }}
            >
                Move Box
            </Button>
        );
    }

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton
                    position={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
                <div></div>
                <MoveableBox
                    position={position}
                    setPosition={setPosition}
                ></MoveableBox>
            </div>
        </div>
    );
}
