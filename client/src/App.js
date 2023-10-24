import React, { Component } from "react";
import Table from "./components/Table/Table";
import Controls from "./components/Controls/Controls";
import DataDisplay from "./components/DataDisplay/DataDisplay";

class App extends Component {

    render() {
        return (
            <>
                <Controls />
                <Table />
                <DataDisplay />
            </>
        )
    }

}

export default App;