import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DisplayedElementProvider } from "./contexts/DisplayedElement";
import { FilterProvider } from "./contexts/Filter";
import { WeightedViewProvider } from "./contexts/WeightedView";
import { ElementDataProvider } from "./contexts/ElementData";
import { DisplayAtomicNumberProvider } from "./contexts/DisplayAtomicNumber";
import { HueProvider } from "./contexts/Hue";

ReactDOM.render(
    <DisplayedElementProvider>
        <WeightedViewProvider>
            <FilterProvider>
                <DisplayAtomicNumberProvider>
                    <HueProvider>
                        <ElementDataProvider>
                            <App />
                        </ElementDataProvider>
                    </HueProvider>
                </DisplayAtomicNumberProvider>
            </FilterProvider>
        </WeightedViewProvider>
    </DisplayedElementProvider>
            
, document.getElementById("root"));