import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DisplayedElementProvider } from "./contexts/DisplayedElement";
import { FilterProvider } from "./contexts/Filter";
import { WeightedViewProvider } from "./contexts/WeightedView";
import { ElementDataProvider } from "./contexts/ElementData";
import { DisplayAtomicNumberProvider } from "./contexts/DisplayAtomicNumber";

ReactDOM.render(
    <DisplayedElementProvider>
        <WeightedViewProvider>
            <FilterProvider>
                <DisplayAtomicNumberProvider>
                    <ElementDataProvider>
                        <App />
                    </ElementDataProvider>
                </DisplayAtomicNumberProvider>
            </FilterProvider>
        </WeightedViewProvider>
    </DisplayedElementProvider>
            
, document.getElementById("root"));