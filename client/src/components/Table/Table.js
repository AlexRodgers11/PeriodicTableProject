import React from "react";
import "./Table.css";
import Element from "../Element/Element";
import { useElement, useElementUpdate } from "../../contexts/ElementContext";
import { useSort } from "../../contexts/Sort";
import { useFilter } from "../../contexts/Filter";

export default function Table(props) {
    const element = useElement();
    const setElement = useElementUpdate();
    const filter = useFilter();
    const sort = useSort();

    return (
        <div>
            <p>Selected filter is {filter}</p>
            <p>Selected sort is {sort}</p>
            <p>Table goes here</p>
        </div>
    );
}