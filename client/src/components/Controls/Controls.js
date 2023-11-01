import React from "react";
import "./Controls.css";
import { useWeightedView, useWeightedViewUpdate } from "../../contexts/WeightedView";
import { useFilter, useFilterUpdate } from "../../contexts/Filter";
import { useElementData, useElementDataUpdate } from "../../contexts/ElementData";


export default function Controls() {
    const filter = useFilter();
    const setFilter = useFilterUpdate();
    const weightedView = useWeightedView();
    const elementData = useElementData();
    const setElementData = useElementDataUpdate();
    const handleElementDataChange = evt => {
        setElementData(evt.target.value);
    }

    const handleFilterChange = evt => {
        setFilter(evt.target.value);
    }
    
    const handleWeightedViewChange = evt => {
        setSort(evt.target.value);
    }

    return (
        <div className="Controls">
            <select value={elementData} onChange={handleElementDataChange}>
                <option value="">Additional Data Display</option>
                <option value="atomic_mass">Atomic Mass</option>
                <option value="boil">Boiling Point</option>
                <option value="melt">Melting Point</option>
            </select>
            <select value={filter} onChange={handleFilterChange}>
                <option value="">Filter</option>
                <option value="discovered-by">Discovered By</option>
                <option value="discovery-decade">Discovery Decade</option>
            </select>
            <select value={weightedView} onChange={handleWeightedViewChange}>
                <option value="">Weighted View</option>
                <option value="date-discovered">Date Discovered</option>
                <option value="universal-percentage">Universal Percentage</option>
            </select>
        </div>
    );
}