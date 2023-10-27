import React from "react";
import Controls from "./components/Controls/Controls";
import Table from "./components/Table/Table";
import DataDisplay from "./components/DataDisplay/DataDisplay";
import { useDisplayedElement } from "./contexts/DisplayedElement";

function App() {
    const displayedElement = useDisplayedElement();
    return (
        <>
            {!displayedElement &&
                <>
                    <Controls />
                    <Table />
                </>
            }

            {displayedElement && <DataDisplay />}
        </>
    )
}

export default App;