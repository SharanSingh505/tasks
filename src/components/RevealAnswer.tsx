import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isVisible, setVisible] = useState<boolean>(false);

    function flipVisibility(): void {
        setVisible(!isVisible);
    }

    return (
        // reveals answer
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {isVisible && <div>42</div>}
        </div>
    );
}
