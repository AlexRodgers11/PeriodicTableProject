import React from "react";
import "./Element.css";
import { useElement, useElementUpdate } from "../../contexts/ElementContext";

export default function Element(props) {
    const element = useElement();
    const setElement = useElementUpdate();

    const handleElementChange = evt => {
        setElement(evt.target.value);
    }
    return (
        <div></div>
    );
}