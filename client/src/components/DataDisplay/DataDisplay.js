import React, { useContext} from "react";
import "./DataDisplay.css";
import { useDisplayedElement, useDisplayedElementUpdate } from "../../contexts/DisplayedElement";

export default function DataDisplay() {
    const displayedElement = useDisplayedElement();
    const setDisplayedElement = useDisplayedElementUpdate();

    const close = () => {
        setDisplayedElement("");
    }
    
    return (
        <div className="DataDisplay">
            <p onClick={close}>Close</p>
            <p>The displayed element is: {displayedElement}</p>
        </div>
    );
}