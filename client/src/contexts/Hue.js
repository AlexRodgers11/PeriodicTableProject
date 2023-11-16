import React, { useContext, useState } from "react";

const HueContext = React.createContext();
const HueUpdateContext = React.createContext();

export function useHue() {
    return useContext(HueContext);
}

export function useHueUpdate() {
    return useContext(HueUpdateContext);
}

export function HueProvider({ children }) {
    const [hue, setHue] = useState(136);

    return (
        <HueContext.Provider value={hue}>
            <HueUpdateContext.Provider value={setHue}>
                {children}
            </HueUpdateContext.Provider>
        </HueContext.Provider>
    );
}