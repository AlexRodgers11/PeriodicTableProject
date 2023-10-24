import React from "react";
import "./Controls.css";
import { useSort, useSortUpdate } from "../../contexts/Sort";
import { useFilter, useFilterUpdate } from "../../contexts/Filter";


export default function Controls() {
    const filter = useFilter();
    const setFilter = useFilterUpdate();
    const sort = useSort();
    const setSort = useSortUpdate();

    const handleFilterChange = evt => {
        setFilter(evt.target.value);
    }
    
    const handleSortChange = evt => {
        setSort(evt.target.value);
    }

    return (
        <div>
            <select value={filter} onChange={handleFilterChange}>
                <option value=""></option>
                <option value="discovered-by">Discovered By</option>
                <option value="discovery-decade">Discovery Decade</option>
            </select>
            <select value={sort} onChange={handleSortChange}>
                <option value=""></option>
                <option value="date-discovered">Date Discovered</option>
                <option value="universal-percentage">Universal Percentage</option>
            </select>
        </div>
    );
}