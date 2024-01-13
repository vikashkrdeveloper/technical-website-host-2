import React from 'react'
import { NavLink } from 'react-router-dom'

function Admin_PanelHeader() {
    return (
        <>
            <header>

                <div className="logosec">
                    <NavLink to='/' className="logo">TECHKRITI</NavLink>
                </div>

                <div className="message">
                    <div className="circle"></div>
                    <span className="material-symbols-outlined">
                        notifications
                    </span>
                    <div className="dp">
                        <span className="material-symbols-outlined">
                            person
                        </span>
                    </div>
                </div>



            </header>

        </>
    )
}

export default Admin_PanelHeader
