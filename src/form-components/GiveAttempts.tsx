import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");
    function request(event: React.ChangeEvent<HTMLInputElement>) {
        return setRequestedAttempts(event.target.value);
    }
    const updateAttempts = (): void => {
        const num: number = parseInt(requestedAttempts) || 0;
        setAttempts(attempts + num);
    };

    return (
        <div>
            <Form.Group>
                <Form.Label>
                    <h3>Request Attempts:</h3>
                </Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={request}
                />
            </Form.Group>
            <Button onClick={updateAttempts}>gain</Button>
            <Button
                onClick={(): void => setAttempts(attempts - 1)}
                disabled={attempts === 0}
            >
                use
            </Button>
            <div>Attempts: {attempts}</div>
        </div>
    );
}
