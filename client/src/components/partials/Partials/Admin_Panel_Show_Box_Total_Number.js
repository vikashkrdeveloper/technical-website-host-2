import React from 'react'
import { NavLink } from 'react-router-dom'

function Admin_Panel_Show_Box_Total_Number(props) {
    return (
        <>
            <NavLink to={props.link} className="box box1">
                <div className="text">
                    <h2 className="topic-heading">{props.totalnumber}</h2>
                    <h2 className="topic">{props.text}</h2>
                </div>
                <img src={props.img} alt="Views" />
            </NavLink>

        </>
    )
}

export default Admin_Panel_Show_Box_Total_Number
