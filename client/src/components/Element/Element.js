import React from "react";
import "./Element.css";
import { useDisplayedElement, useDisplayedElementUpdate } from "../../contexts/DisplayedElement";

export default function Element(props) {
    const element = useDisplayedElement();
    const setElement = useDisplayedElementUpdate();

    const handleElementChange = evt => {
        setElement(evt.target.value);
    }
    return (
        <div></div>
    );
}