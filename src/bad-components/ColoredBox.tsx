import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(0);
    const COLORS = ["red", "blue", "green"];

    function ChangeColor(): void {
        setColorIndex(() => (colorIndex + 1) % COLORS.length);
    }

    function ColorPreview(): React.JSX.Element {
        return (
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: COLORS[colorIndex],
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px",
                }}
            ></div>
        );
    }

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <Button onClick={ChangeColor}>Change Color</Button>
                <ColorPreview></ColorPreview>
            </div>
        </div>
    );
}
