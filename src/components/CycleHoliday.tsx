import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type tHoliday =
        | "Halloween"
        | "Thanksgiving"
        | "Christmas"
        | "NewYears"
        | "Holi";
    const [holiday, setHoliday] = useState<tHoliday>("Holi");

    const nextHoliday: Record<tHoliday, tHoliday> = {
        Halloween: "Thanksgiving",
        Thanksgiving: "Christmas",
        Christmas: "NewYears",
        NewYears: "Holi",
        Holi: "Halloween"
    };
    const nextHolidayAlpha: Record<tHoliday, tHoliday> = {
        Christmas: "Halloween",
        Halloween: "Holi",
        Holi: "NewYears",
        NewYears: "Thanksgiving",
        Thanksgiving: "Christmas"
    };
    const holidayEmoji: Record<tHoliday, JSX.Element> = {
        Christmas: <h3>Holiday: 🎄</h3>,
        Halloween: <h3>Holiday: 🎃</h3>,
        Holi: <h3>Holiday: 🇮🇳</h3>,
        NewYears: <h3>Holiday: 🎆</h3>,
        Thanksgiving: <h3>Holiday: 🦃</h3>
    };

    return (
        <div>
            <Button onClick={() => setHoliday(nextHoliday[holiday])}>
                Advance by Year
            </Button>
            <Button onClick={() => setHoliday(nextHolidayAlpha[holiday])}>
                Advance by Alphabet
            </Button>
            {holidayEmoji[holiday]}
        </div>
    );
}
