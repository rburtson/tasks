import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function EditMode(): React.JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [student, setStudent] = useState<boolean>(true);
    const [userName, setUserName] = useState<string>("Your Name");

    function updateName(event: ChangeEvent): void {
        setUserName(event.target.value);
    }

    return (
        <div>
            <div>
                <Form.Check
                    type="switch"
                    id="edit-switch"
                    label="Edit Mode:"
                    checked={mode}
                    onChange={() => {
                        setMode(!mode);
                    }}
                />
            </div>
            <div>
                {mode && (
                    <Form.Check
                        type="switch"
                        id="student-check"
                        label="Student?"
                        checked={student}
                        disabled={!mode}
                        onChange={() => {
                            setStudent(!student);
                        }}
                    />
                )}
                {mode && (
                    <Form.Group controlId="nameResponse">
                        <Form.Label>Enter Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={updateName}
                            disabled={!mode}
                        />
                    </Form.Group>
                )}
            </div>
            <div>
                {!mode && student && <div> {userName} is a student </div>}
                {!mode && !student && <div> {userName} is not a student </div>}
            </div>
        </div>
    );
}
