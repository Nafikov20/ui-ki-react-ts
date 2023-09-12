import React from "react";
import { Button } from "ui-kit";
import "./ButtonPage.scss";

export const ButtonPage: React.FC = () => {
    const handleButtonClick = (event: React.MouseEvent) => {
        event.preventDefault();
       alert('button click event')
    };

    return (
        <div className="ButtonPage">
            <h2>Button</h2>
            <Button
                isDisabled={false}
                onClick={handleButtonClick}
            >
                Send
            </Button>
        </div>
    )
};