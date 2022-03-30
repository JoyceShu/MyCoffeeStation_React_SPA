import React from "react";

export default function Reorder({onReorder}) {
    return (
        <div>
        <button className="reorder-button" onClick={onReorder}>Reset</button>
        </div>
    )
}