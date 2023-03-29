import React, { useState } from "react";
import Form from "react-bootstrap/Form";
export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group>
                <Form.Label>
                    <h2>Check Answer</h2>
                </Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            {answer === expectedAnswer ? <div>✔️</div> : <div>❌</div>}
        </div>
    );
}
