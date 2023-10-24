import React, { useContext, useState} from "react";

const FilterContext = React.createContext();
const FilterUpdateContext = React.createContext();

export function useFilter() {
    return useContext(FilterContext);
}

export function useFilterUpdate() {
    return useContext(FilterUpdateContext);
}

export function FilterProvider({ children }) {
    const [filter, setFilter] = useState();

    return (
        <FilterContext.Provider value={filter}>
            <FilterUpdateContext.Provider value={setFilter}>
                {children}
            </FilterUpdateContext.Provider>
        </FilterContext.Provider>
    );
}