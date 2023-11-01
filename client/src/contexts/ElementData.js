import React, { useContext, useState } from "react";

const ElementDataContext = React.createContext();
const ElementDataUpdateContext = React.createContext();

export function useElementData() {
    return useContext(ElementDataContext);
}

export function useElementDataUpdate() {
    return useContext(ElementDataUpdateContext);
}

export function ElementDataProvider({ children }) {
    const [elementData, setElementData] = useState();

    return (
        <ElementDataContext.Provider value={elementData}>
            <ElementDataUpdateContext.Provider value={setElementData}>
                {children}
            </ElementDataUpdateContext.Provider>
        </ElementDataContext.Provider>
    );
}