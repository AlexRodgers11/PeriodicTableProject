import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DisplayedElementProvider } from "./contexts/DisplayedElement";
import { FilterProvider } from "./contexts/Filter";
import { WeightedViewProvider } from "./contexts/WeightedView";
import { ElementDataProvider } from "./contexts/ElementData";

ReactDOM.render(
    <DisplayedElementProvider>
        <WeightedViewProvider>
            <FilterProvider>
                <ElementDataProvider>
                    <App />
                </ElementDataProvider>
            </FilterProvider>
        </WeightedViewProvider>
    </DisplayedElementProvider>
            
, document.getElementById("root"));