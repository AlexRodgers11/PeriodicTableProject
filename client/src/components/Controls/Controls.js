import React from "react";
import "./Controls.css";
import { useWeightedView, useWeightedViewUpdate } from "../../contexts/WeightedView";
import { useFilter, useFilterUpdate } from "../../contexts/Filter";
import { sortTable } from "../../utils";
import { useElementData, useElementDataUpdate } from "../../contexts/ElementData";


export default function Controls() {
    const filter = useFilter();
    const setFilter = useFilterUpdate();
    const weightedView = useWeightedView();
    const setWeightedView = useWeightedViewUpdate();
    const elementData = useElementData();
    const setElementData = useElementDataUpdate();

    const handleElementDataChange = evt => {
        setElementData(evt.target.value);
    }

    const handleFilterChange = evt => {
        setFilter(evt.target.value);
    }
    
    const handleWeightedViewChange = evt => {
        setWeightedView(evt.target.value);
        setElementData(evt.target.value);
    }

    return (
        <div className="Controls">
            <select value={elementData} onChange={handleElementDataChange}>
                <option value="">Additional Data Display</option>
                <option value="electron_affinity">Electron Affinity</option>
                <option value="boil">Boiling Point</option>
                <option value="melt">Melting Point</option>
                <option value="density">Density</option>
                <option value="molar_heat">Molar Heat</option>
                <option value="electronegativity_pauling">Electronegativity Pauling</option>
                <option value="atomic_mass">Atomic Mass</option>
                <option value="number">Atomic Number</option>
            </select>
            <select value={filter} onChange={handleFilterChange}>
                <option value="">Filter</option>
                <option value="discovered-by">Discovered By</option>
                <option value="discovery-decade">Discovery Decade</option>
            </select>
            <select value={weightedView} onChange={handleWeightedViewChange}>
                <option value="">Weighted View</option>
                <option value="electron_affinity">Electron Affinity</option>
                <option value="boil">Boiling Point</option>
                <option value="melt">Melting Point</option>
                <option value="density">Density</option>
                <option value="molar_heat">Molar Heat</option>
                <option value="electronegativity_pauling">Electronegativity Pauling</option>
                <option value="atomic_mass">Atomic Mass</option>
            </select>
        </div>
    );
}