import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Switch
                type="switch"
                checked={editMode}
                onChange={updateMode}
            />
            {editMode ? (
                <div>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label={
                            isStudent ? "is a student." : "is not a student."
                        }
                        checked={isStudent}
                        onChange={updateStudent}
                        disabled={!editMode}
                    />
                    <Form.Group>
                        <Form.Control
                            value={name}
                            onChange={updateName}
                            disabled={!editMode}
                        />
                    </Form.Group>
                </div>
            ) : (
                <div></div>
            )}
            <div>
                {name} {isStudent ? "is a student." : "is not a student."}
            </div>
        </div>
    );
}
