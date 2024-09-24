import React, { useState } from "react";
import { Button } from "react-bootstrap";

type holiday =
    | "Valentines"
    | "New Years"
    | "Christmas"
    | "Halloween"
    | "St. Paddy's";
export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<holiday>("Halloween");
    function byAlphabet(): void {
        holiday === "Christmas" ? setHoliday("Halloween")
        : holiday === "Halloween" ? setHoliday("New Years")
        : holiday === "New Years" ? setHoliday("St. Paddy's")
        : setHoliday("Valentines");
        holiday === "Valentines" ? setHoliday("Christmas") : holiday;
    }
    function byDate(): void {
        holiday === "Christmas" ? setHoliday("New Years")
        : holiday === "New Years" ? setHoliday("Valentines")
        : holiday === "Valentines" ? setHoliday("St. Paddy's")
        : setHoliday("Halloween");
        holiday === "Halloween" ? setHoliday("Christmas") : holiday;
    }

    function emoji(): string {
        let output: string;
        holiday === "Christmas" ? (output = "❄️")
        : holiday === "New Years" ? (output = "🥂")
        : holiday === "Valentines" ? (output = "❤️")
        : holiday === "St. Paddy's" ? (output = "🍀")
        : (output = "🎃");
        return output;
    }
    return (
        <div>
            Holiday: {emoji()}
            <div></div>
            <Button onClick={byAlphabet}>Advance by Alphabet</Button>
            <span></span>
            <Button onClick={byDate}>Advance by Year</Button>
        </div>
    );
}
