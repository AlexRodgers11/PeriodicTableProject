import React, {useEffect, useState } from "react";
import "./Element.css";
import { useDisplayedElement, useDisplayedElementUpdate } from "../../contexts/DisplayedElement";
import { useElementData } from "../../contexts/ElementData";
import { generateLightness } from "../../utils";
import periodicTableData from "../../periodic-table.json";
import { useWeightedView } from "../../contexts/WeightedView";
import { useDisplayAtomicNumber } from "../../contexts/DisplayAtomicNumber";

export default function Element(props) {
    const elementData = useElementData();
    const weightedView = useWeightedView();
    const displayAtomicNumber = useDisplayAtomicNumber();
    const [lightness, setLightness] = useState(100);

    useEffect(() => {
        let lightness = generateLightness(props.element[weightedView], periodicTableData.categories[weightedView]?.low, periodicTableData.categories[weightedView]?.range)
        setLightness(lightness);
    }, [weightedView]);

    const setDisplayedElement = useDisplayedElementUpdate();

    const handleElementChange = () => {
        setDisplayedElement(props.element.number);
    }
    return (
        <div className="Element" style={{gridRow: props.element.ypos, gridColumn: props.element.xpos, backgroundColor: weightedView? `hsl(136deg, 100%, ${lightness}%)` : "white", color: lightness < 20 ? "white" : "black"}} onClick={handleElementChange}>
            {displayAtomicNumber &&
                <p className="Element_atomic_number">{props.element.number}</p>
            }
            {elementData &&
                <p className="Element_detail">{props.element[elementData]}</p>
            }
            <p>
                {props.element.symbol}
            </p>
        </div>
    );
}