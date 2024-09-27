import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [userAttempts, setAttempts] = useState<number>(3);
    const [reqAttempts, setReqAttempts] = useState<number>(0);

    function useAttempt(): void {
        setAttempts(() => userAttempts - 1);
    }

    function updateAdd(event: React.ChangeEvent<HTMLInputElement>): void {
        setReqAttempts(() => +event.target.value || 0);
    }

    function addAttempts(): void {
        setAttempts(() => userAttempts + +reqAttempts);
    }

    return (
        <div>
            <h3>Attempts Left: {userAttempts}</h3>
            <div></div>
            <Button
                disabled={userAttempts === 0 ? true : false}
                onClick={useAttempt}
            >
                Use
            </Button>
            <div></div>
            <Form.Group controlId="formAttempts">
                <Form.Label>Enter Number of Attempts to Add:</Form.Label>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    onChange={updateAdd}
                ></Form.Control>
            </Form.Group>
            <div></div>
            <Button onClick={addAttempts}>Gain</Button>
        </div>
    );
}
