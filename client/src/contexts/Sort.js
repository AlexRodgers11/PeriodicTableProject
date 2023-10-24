import React, {useContext, useState} from "react";

const SortContext = React.createContext();
const SortUpdateContext = React.createContext();

export function useSort() {
    return useContext(SortContext);
}

export function useSortUpdate() {
    return useContext(SortUpdateContext);
}

export function SortProvider({ children }) {
    const [sort, setSort] = useState();

    return (
        <SortContext.Provider value={sort}>
            <SortUpdateContext.Provider value={setSort}>
                {children}
            </SortUpdateContext.Provider>
        </SortContext.Provider>
    );
}