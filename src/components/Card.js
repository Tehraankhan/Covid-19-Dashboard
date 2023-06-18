import React from "react";
import './C.css';
import Dashboard from "./Dashboard";

function Card(props) {

    return (
        <>
            <div className='card'>
                <h1>{props.title}</h1>
                <span>{props.value}</span>

            </div>

        </>
    )


}
export default Card;