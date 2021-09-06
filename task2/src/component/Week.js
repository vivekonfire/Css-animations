import React from "react";
import data from "../data.json";
import Weekbox from "./Weekbox";

const week = () => {
    return (
        <div className="subbox">
            {data.map((d) => (
                <Weekbox key={d.title} value={d} />
            ))}
        </div>
    );
};

export default week;
