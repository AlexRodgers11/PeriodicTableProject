import React, {useEffect, useState } from "react";
import "./Element.css";
import { useDisplayedElement, useDisplayedElementUpdate } from "../../contexts/DisplayedElement";
import { useElementData } from "../../contexts/ElementData";
import { displayUnits, generateLightness } from "../../utils";
import periodicTableData from "../../periodic-table.json";
import { useWeightedView } from "../../contexts/WeightedView";
import { useDisplayAtomicNumber } from "../../contexts/DisplayAtomicNumber";
import { useHue } from "../../contexts/Hue";

export default function Element(props) {
    const elementData = useElementData();
    const weightedView = useWeightedView();
    const displayAtomicNumber = useDisplayAtomicNumber();
    const hue = useHue();
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
        <div className="Element" style={{gridRow: props.element.ypos, gridColumn: props.element.xpos, backgroundColor: weightedView? `hsl(${hue}deg, 100%, ${lightness}%)` : "white", color: lightness < 20 ? "white" : "black", opacity: props.element[weightedView] !== null ? "1" : ".2"}} onClick={handleElementChange}>
            {displayAtomicNumber &&
                <p className="Element_atomic_number">{props.element.number}</p>
            }
            {(elementData && props.element[elementData] !== null) &&
                <p className="Element_detail">{parseFloat(props.element[elementData]?.toFixed(1))}{displayUnits(weightedView)}</p>
            }
            <p>
                {props.element.symbol}
            </p>
        </div>
    );
}