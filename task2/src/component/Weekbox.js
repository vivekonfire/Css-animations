import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Weekbox = ({ value }) => {
    const [check, setCheck] = useState(false);

    const onClick = () => {
        if (check === true) setCheck(false);
        else setCheck(true);
    };

    const { title, lists } = value;

    return (
        <>
            <div className="head" onClick={onClick}>
                <h2 className="heading">{title}</h2>
                <i
                    className={
                        check === false
                            ? "fas fa-chevron-down fa-x arrow arrow-r"
                            : "fas fa-chevron-down fa-x arrow"
                    }
                ></i>
            </div>
            {check === true ? (
                <ul>
                    {lists.map((list) => (
                        <li key={uuidv4()} className="list">
                            <h3>{list}</h3>
                        </li>
                    ))}
                </ul>
            ) : (
                <></>
            )}
        </>
    );
};

export default Weekbox;
