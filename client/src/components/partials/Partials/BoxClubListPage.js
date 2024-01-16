import React from 'react'
import { NavLink } from 'react-router-dom';

function BoxClubListPage(props) {


    return (
        <>
            <div className=' w-[320px]  m-[20px] max-[480px]:w-[100%] max-[480px]:m-0 max-[480px]:mb-[40px] space-y-4 hover:shadow-[1px_1px_20px_1px_rgba(214,216,216,0.2)] shadow-[1px_1px_6px_1px_rgba(214,216,216,0.2)] h-[400px] rounded-[10px]  cursor-default  p-[12px] transition float-left ease-in-out delay-200 border-[1px] border-[#1b3040] bg-[#0a1a23]'>
                <div className=' w-[100%] h-[50%] flex justify-center items-center '>
                    <img src={props.image_Url} className='w-[100%] h-[100%] rounded-[10px]' alt="Loading...." />
                </div>
                <h1 className=' text-center text-[#ffc71e] text-[26px] font-[600] mt-6 cursor-pointer uppercase'>{props.clubname}</h1>
                <p className='text-[14px] text-[#fff] text-center w-[100%]  h-[34px] truncate '>{props.clubdescription}</p>
                <div className=' w-[100%] h-[80px] flex   pr-[10px] justify-end  items-center'>
                    <NavLink  to="/read/details/club" className='w-[160px] gap-2 h-[45px] rounded-[5px] text-[14px] font-[600] hover:bg-[#182d3b]  transition ease-in-out delay-150  border-[#2a4651] text-[#fff] border-[1px] flex justify-center items-center'>
                        Read More
                        <span className="material-symbols-outlined animate-pulse text-[#ffdd00]">
                            read_more
                        </span>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default BoxClubListPage
