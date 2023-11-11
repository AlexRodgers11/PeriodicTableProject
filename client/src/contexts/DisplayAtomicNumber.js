import React,  { useContext, useState } from "react";

const DisplayAtomicNumberContext = React.createContext();
const DisplayAtomicNumberToggleContext = React.createContext();

export function useDisplayAtomicNumber() {
    return useContext(DisplayAtomicNumberContext);
}

export function useDisplayAtomicNumberToggle() {
    return useContext(DisplayAtomicNumberToggleContext);
}

export function DisplayAtomicNumberProvider({ children }) {
    const [displayAtomicNumber, setDisplayAtomicNumber] = useState(true);

    const toggleDisplayAtomicNumber = () => {
        setDisplayAtomicNumber(!displayAtomicNumber);
    }

    return (
        <DisplayAtomicNumberContext.Provider value={displayAtomicNumber}>
            <DisplayAtomicNumberToggleContext.Provider value={toggleDisplayAtomicNumber} >
                {children}
            </DisplayAtomicNumberToggleContext.Provider>
        </DisplayAtomicNumberContext.Provider>
    );
}