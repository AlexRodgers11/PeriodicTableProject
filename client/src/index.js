import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DisplayedElementProvider } from "./contexts/DisplayedElement";
import { FilterProvider } from "./contexts/Filter";
import { SortProvider } from "./contexts/Sort";

ReactDOM.render(
    <DisplayedElementProvider>
        <SortProvider>
            <FilterProvider>
                <App />
            </FilterProvider>
        </SortProvider>
    </DisplayedElementProvider>
            
, document.getElementById("root"));