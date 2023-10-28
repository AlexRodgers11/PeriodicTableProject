import React from "react";
import "./Table.css";
import Element from "../Element/Element";
import { useDisplayedElement, useDisplayedElementUpdate } from "../../contexts/DisplayedElement";
import { useWeightedView } from "../../contexts/WeightedView";
import { useFilter } from "../../contexts/Filter";
//note, periodicTableData.json copied from https://github.com/muratkemaldar/periodic-table-css/blob/master/src/PeriodicTableJSON.json
import periodicTableData from "../../periodic-table.json";


export default function Table(props) {
    const elements = periodicTableData.elements;
    const element = useDisplayedElement();
    const setElement = useDisplayedElementUpdate();
    const filter = useFilter();
    const weightedView = useWeightedView();

    return (
        <div>
            <p>Selected filter is {filter}</p>
            <p>Selected weightedView is {weightedView}</p>
            <div className="Table">
                {elements.map(element => <Element className="Element" element={element} />)}
            </div>
        </div>
    );
}