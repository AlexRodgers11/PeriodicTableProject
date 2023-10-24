import React, { useContext, useState } from "react";

const ElementContext = React.createContext();
const ElementUpdateContext = React.createContext();

export function useElement() {
    return useContext(ElementContext);
}

export function useElementUpdate() {
    return useContext(ElementUpdateContext);
}

export function ElementProvider({ children }) {
    const [element, setElement] = useState();

    return (
        <ElementContext.Provider value={element}>
            <ElementUpdateContext.Provider value={setElement}>
                {children}
            </ElementUpdateContext.Provider>
        </ElementContext.Provider>
    );
}