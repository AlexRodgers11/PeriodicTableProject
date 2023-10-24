import React, { Component } from "react";
import Controls from "./components/Controls/Controls";
import Table from "./components/Table/Table";
import DataDisplay from "./components/DataDisplay/DataDisplay";
import { ElementProvider } from "./contexts/ElementContext";
import { FilterProvider } from "./contexts/Filter";
import { SortProvider } from "./contexts/Sort";

class App extends Component {

    render() {
        return (
            <ElementProvider>
            <SortProvider>
            <FilterProvider>
                <Controls />
                <Table />
                <DataDisplay />
            </FilterProvider>
            </SortProvider>
            </ElementProvider>
        )
    }

}

export default App;