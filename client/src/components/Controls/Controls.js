import React from "react";
import "./Controls.css";
import { useWeightedView, useWeightedViewUpdate } from "../../contexts/WeightedView";
import { useFilter, useFilterUpdate } from "../../contexts/Filter";


export default function Controls() {
    const filter = useFilter();
    const setFilter = useFilterUpdate();
    const weightedView = useWeightedView();
    const setSort = useWeightedViewUpdate();

    const handleFilterChange = evt => {
        setFilter(evt.target.value);
    }
    
    const handleWeightedViewChange = evt => {
        setSort(evt.target.value);
    }

    return (
        <div>
            <select value={filter} onChange={handleFilterChange}>
                <option value=""></option>
                <option value="discovered-by">Discovered By</option>
                <option value="discovery-decade">Discovery Decade</option>
            </select>
            <select value={weightedView} onChange={handleWeightedViewChange}>
                <option value=""></option>
                <option value="date-discovered">Date Discovered</option>
                <option value="universal-percentage">Universal Percentage</option>
            </select>
        </div>
    );
}