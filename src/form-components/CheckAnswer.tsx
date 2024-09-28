import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(() => event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="formAnswer">
                <Form.Label>Type your Answer:</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            <h3>
                Answer:{" "}
                {(
                    answer.toLowerCase().replace(/ /g, "") ===
                    expectedAnswer.toLowerCase().replace(/ /g, "")
                ) ?
                    "✔️"
                :   "❌"}
            </h3>
        </div>
    );
}
