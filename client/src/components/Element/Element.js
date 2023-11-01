import React from "react";
import "./Element.css";
import { useDisplayedElement, useDisplayedElementUpdate } from "../../contexts/DisplayedElement";
import { useElementData } from "../../contexts/ElementData";

export default function Element(props) {
    const elementData = useElementData();
    const setDisplayedElement = useDisplayedElementUpdate();

    const handleElementChange = () => {
        console.log(props.element.name);
        setDisplayedElement(props.element.name);
    }
    return (
        <div className="Element" style={{gridRow: props.element.ypos, gridColumn: props.element.xpos}} onClick={handleElementChange}>
            {elementData &&
                <p className="Element_detail">{props.element[elementData]}</p>
            }
            <p>
                {props.element.symbol}
            </p>
        </div>
    );
}