import React, { useState } from "react";
import Form from "react-bootstrap/Form";
export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");
    const changeColor = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setColor(event.target.value);
    };
    const colors: string[] = [
        "red",
        "yellow",
        "green",
        "blue",
        "cyan",
        "purple",
        "violet",
        "grey"
    ];
    const components = colors.map((color_value: string) => {
        return (
            <Form.Check
                inline
                type="radio"
                onChange={changeColor}
                value={color_value}
                checked={color === color_value}
                key="color picker"
                label={
                    <span style={{ backgroundColor: color_value }}>
                        {color_value}
                    </span>
                }
            />
        );
    });
    return (
        <div>
            <h3>Change Color</h3>
            {components}
            <div>
                You have chosen:{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
