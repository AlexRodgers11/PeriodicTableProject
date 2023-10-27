import React, { useContext} from "react";
import "./DataDisplay.css";
import { useDisplayedElement, useDisplayedElementUpdate } from "../../contexts/DisplayedElement";

export default function DataDisplay() {
    const displayedElement = useDisplayedElement();
    const setDisplayedElement = useDisplayedElementUpdate();
    
    return (
        <div>
            <p>The displayed element is: {displayedElement}</p>
        </div>
    );
}