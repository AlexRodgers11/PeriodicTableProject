import React from "react";
import "./Table.css";
import Element from "../Element/Element";
import { useDisplayedElement, useDisplayedElementUpdate } from "../../contexts/DisplayedElement";
import { useSort } from "../../contexts/Sort";
import { useFilter } from "../../contexts/Filter";

export default function Table(props) {
    const element = useDisplayedElement();
    const setElement = useDisplayedElementUpdate();
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