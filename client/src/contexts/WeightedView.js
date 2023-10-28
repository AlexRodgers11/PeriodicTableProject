import React, {useContext, useState} from "react";

const WeightedViewContext = React.createContext();
const WeightedViewUpdateContext = React.createContext();

export function useWeightedView() {
    return useContext(WeightedViewContext);
}

export function useWeightedViewUpdate() {
    return useContext(WeightedViewUpdateContext);
}

export function WeightedViewProvider({ children }) {
    const [weightedView, setWeightedView] = useState();

    return (
        <WeightedViewContext.Provider value={weightedView}>
            <WeightedViewUpdateContext.Provider value={setWeightedView}>
                {children}
            </WeightedViewUpdateContext.Provider>
        </WeightedViewContext.Provider>
    );
}