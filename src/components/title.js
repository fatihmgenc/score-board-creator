import React from 'react'
import "../dist/css/main.css";

function title(props) {
    const { titleText } = props;
    return (
        <div className="title">
            <h1>{titleText}</h1>
        </div>
    )
}
export default title
