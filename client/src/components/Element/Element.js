import React from "react";
import "./Element.css";
import { useDisplayedElement, useDisplayedElementUpdate } from "../../contexts/DisplayedElement";

export default function Element(props) {
    const setDisplayedElement = useDisplayedElementUpdate();

    const handleElementChange = () => {
        console.log(props.element.name);
        setDisplayedElement(props.element.name);
    }
    return (
        <div className="Element" style={{gridRow: props.element.ypos, gridColumn: props.element.xpos}} onClick={handleElementChange}>{props.element.symbol}</div>
    );
}