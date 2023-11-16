import React from "react";
import Controls from "./components/Controls/Controls";
import Table from "./components/Table/Table";
import DataDisplay from "./components/DataDisplay/DataDisplay";
import { useDisplayedElement } from "./contexts/DisplayedElement";
import "./App.css";
import ColorPicker from "./components/ColorPicker/ColorPicker";


function App() {
    const displayedElement = useDisplayedElement();
    
    return (
        <div className="App">
            {!displayedElement &&
                <div>
                    <Controls />
                    <Table />
                    <ColorPicker />        
                </div>
            }

            {displayedElement && <DataDisplay />}
        </div>
    )
}

export default App;