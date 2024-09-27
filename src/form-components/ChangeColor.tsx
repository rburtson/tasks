import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("");
    const colorStyle = {
        backgroundColor: color,
    };

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(() => event.target.value);
    }

    return (
        <div>
            <label>
                <Form.Check
                    inline
                    type="radio"
                    name="red"
                    onChange={updateColor}
                    id="color-red"
                    value="red"
                    checked={color === "red"}
                />
                <span style={{ backgroundColor: "red" }}>Red</span>
            </label>

            <label>
                <Form.Check
                    inline
                    type="radio"
                    name="purple"
                    onChange={updateColor}
                    id="color-purple"
                    value="purple"
                    checked={color === "purple"}
                />
                <span style={{ backgroundColor: "purple" }}>Purple</span>
            </label>

            <label>
                <Form.Check
                    inline
                    type="radio"
                    name="yellow"
                    onChange={updateColor}
                    id="color-yellow"
                    value="yellow"
                    checked={color === "yellow"}
                />
                <span style={{ backgroundColor: "yellow" }}>Yellow</span>
            </label>

            <label>
                <Form.Check
                    inline
                    type="radio"
                    name="orange"
                    onChange={updateColor}
                    id="color-orange"
                    value="orange"
                    checked={color === "orange"}
                />
                <span style={{ backgroundColor: "orange" }}>Orange</span>
            </label>

            <label>
                <Form.Check
                    inline
                    type="radio"
                    name="blue"
                    onChange={updateColor}
                    id="color-blue"
                    value="blue"
                    checked={color === "blue"}
                />
                <span style={{ backgroundColor: "blue" }}>Blue</span>
            </label>

            <label>
                <Form.Check
                    inline
                    type="radio"
                    name="black"
                    onChange={updateColor}
                    id="color-black"
                    value="black"
                    checked={color === "black"}
                />
                <span style={{ backgroundColor: "black" }}>Black</span>
            </label>

            <label>
                <Form.Check
                    inline
                    type="radio"
                    name="teal"
                    onChange={updateColor}
                    id="color-teal"
                    value="teal"
                    checked={color === "teal"}
                />
                <span style={{ backgroundColor: "teal" }}>Teal</span>
            </label>
            <label>
                <Form.Check
                    inline
                    type="radio"
                    name="brown"
                    onChange={updateColor}
                    id="color-brown"
                    value="brown"
                    checked={color === "brown"}
                />
                <span style={{ backgroundColor: "brown" }}>Brown</span>
            </label>

            <h3>
                You have chosen:{" "}
                <h3 style={colorStyle} data-testid="colored-box">
                    {color}
                </h3>
            </h3>
        </div>
    );
}
