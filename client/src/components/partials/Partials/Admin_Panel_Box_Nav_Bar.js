import React from 'react'
import { NavLink } from 'react-router-dom'

function Admin_Panel_Box_Nav_Bar(props) {
    return (
        <>
            <NavLink to={props.link} className="nav-option option6">
                <span className="material-symbols-outlined">
                    {props.icon}
                </span>
                <div>
                    <h3>{props.text}</h3>
                </div>
            </NavLink>
        </>
    )
}

export default Admin_Panel_Box_Nav_Bar
