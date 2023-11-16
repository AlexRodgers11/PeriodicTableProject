import React, {useState} from "react";
import "./ColorPicker.css";
import { useHue, useHueUpdate } from "../../contexts/Hue";

export default function ColorPicker() {
    const setHue = useHueUpdate();
    const hue = useHue();

    const handleHueChange = (evt) => {
        setHue(evt.target.value);
    }

    return (
        <div className="ColorPicker" style={{position: "fixed", left: 0, bottom: "5%", width: "100%", textAlign: "center"}}>
            <input
                type="range"
                min="0"
                max="360"
                value={hue}
                onChange={handleHueChange}
                style={{width: "25%"}}
            />
        </div>
    );
}