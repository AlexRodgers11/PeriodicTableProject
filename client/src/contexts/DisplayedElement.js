import React, { useContext, useState } from "react";

const DisplayedElementContext = React.createContext();
const DisplayedElementUpdateContext = React.createContext();

export function useDisplayedElement() {
    return useContext(DisplayedElementContext);
}

export function useDisplayedElementUpdate() {
    return useContext(DisplayedElementUpdateContext);
}

export function DisplayedElementProvider({ children }) {
    const [displayedElement, setDisplayedElement] = useState();

    return (
        <DisplayedElementContext.Provider value={displayedElement}>
            <DisplayedElementUpdateContext.Provider value={setDisplayedElement}>
                {children}
            </DisplayedElementUpdateContext.Provider>
        </DisplayedElementContext.Provider>
    );
}