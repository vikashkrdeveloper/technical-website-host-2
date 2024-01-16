import React from 'react'
import { NavLink } from 'react-router-dom'

function Admin_Panel_Show_Box_Total_Number(props) {
    return (
        <>
            <NavLink to={props.link} className="w-[250px] hover:scale-105 transition ease-in-out delay-200  flex h-[150px] bg-[#5a2ce5] rounded-[20px] justify-center items-center  gap-6 float-left m-[20px]">
                <div className="text">
                    <h2 className="topic-heading font-[700] text-[#fff]">{props.totalnumber}</h2>
                    <h2 className="topic text-[#fff] font-[700px]" >{props.text}</h2>
                </div>
                <div >
                    <span className="material-symbols-outlined text-[50px] text-[#fff]">
                        {props.icon}
                    </span>
                </div>
            </NavLink>

        </>
    )
}

export default Admin_Panel_Show_Box_Total_Number
