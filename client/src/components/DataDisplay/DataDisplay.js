import React, { useContext} from "react";
import "./DataDisplay.css";
import { useDisplayedElement, useDisplayedElementUpdate } from "../../contexts/DisplayedElement";
import periodicTableData from "../../periodic-table.json";

export default function DataDisplay() {
    const displayedElement = useDisplayedElement();
    const setDisplayedElement = useDisplayedElementUpdate();

    const close = () => {
        setDisplayedElement("");
    }
    
    return (
        <div className="DataDisplay">
            <p onClick={close}>Close</p>
            <p>The displayed element is: {periodicTableData.elements[displayedElement - 1].name}</p>
        </div>
    );
}