import React from "react";

export default function Saludar(props) {
    const { saludar, userInfo } = props;
    const { name } = userInfo;
    const { color = "black" } = userInfo;

    return (
        <div>
            <h1>Saludar {name}, {userInfo.age}</h1>
            <button onClick={() => saludar(color)}>Saludar</button>
        </div>
    )
}