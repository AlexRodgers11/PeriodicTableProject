import React from "react";
import "./Element.css";
import { useDisplayedElement, useDisplayedElementUpdate } from "../../contexts/DisplayedElement";

export default function Element(props) {
    console.log(props.element);
    const element = useDisplayedElement();
    const setElement = useDisplayedElementUpdate();

    const handleElementChange = evt => {
        setElement(evt.target.value);
    }
    return (
        <div className="Element" style={{gridRow: props.element.ypos, gridColumn: props.element.xpos}}>{props.element.symbol}</div>
    );
}