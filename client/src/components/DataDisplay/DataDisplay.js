import React, { useContext} from "react";
import "./DataDisplay.css";
import { useElement, useElementUpdate } from "../../contexts/ElementContext";

export default function DataDisplay() {
    const element = useElement();
    const setElement = useElementUpdate();
    
    return (
        <div>
            <p>The selected element is: {element}</p>
        </div>
    );
}