import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./Table.css";
import Element from "../Element/Element";

//note, periodicTableData.json copied from https://github.com/muratkemaldar/periodic-table-css/blob/master/src/PeriodicTableJSON.json
import periodicTableData from "../../periodic-table.json";


export default function Table() {
    const elements = periodicTableData.elements;

    return (
        <div className="Table">
            {elements.map(element => <Element className="Element" element={element} key={uuidv4()}/>)}
        </div>
    );
}