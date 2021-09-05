import React, { useState } from "react";
import sky from "./images/sky.png";
import landscape from "./images/landscape.png";
import "./App.css";

const App = () => {
    const [value, setValue] = useState(-1);

    const onClick = () => {
        setValue(0);
    };

    const Click = () => {
        setValue(1);
    };

    return (
        <div>
            <div>
                <img
                    onClick={onClick}
                    className={value === 0 ? "sky img-t" : "sky img-rt"}
                    src={sky}
                    alt="sky"
                />
                <img
                    onClick={onClick}
                    className={
                        value === 0 ? "landscape img-t" : "landscape img-rt"
                    }
                    src={landscape}
                    alt="landscape"
                />
                <h1
                    onClick={onClick}
                    className={value === 0 ? "text text-t" : "text text-rt"}
                >
                    TREKK
                </h1>
            </div>
            <div onClick={Click} className="down"></div>
        </div>
    );
};

export default App;
