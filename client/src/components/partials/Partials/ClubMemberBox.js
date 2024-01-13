import React from 'react'
import { NavLink } from 'react-router-dom'

function ClubMemberBox(props) {
    return (
        <>
            <div className=' bg-[#0a121e] rounded-[10px] float-left m-[20px] hover:shadow-[1px_1px_20px_1px_rgba(214,216,216,0.2)] shadow-[1px_1px_6px_1px_rgba(214,216,216,0.2)] w-[470px] h-[250px] flex justify-center items-center'>
                <div className='p-[10px] w-[30%] h-[100%] space-y-6'>
                    <h1 className='font-[] text-[#ffc934f0] font-[600] text-center'>Developed By</h1>
                    <div className='shadow-[0px_0px_16px_0px_#718096] p-[10px]  w-[150px]  h-[150px] flex justify-center items-center bg-slate-50 rounded-[50%] overflow-hidden'>
                        <img className=' w-[96%] h-[96%] scale-125 ' src={props.avatar_url} alt='Loading..' />
                    </div>
                </div>
                <div className='w-[64%] h-[100%]  pl-[10px]'>
                    <div className='w-[100%] h-[50%] space-y-2 mt-[40px]  pl-[20px]'>
                        <h1 className=' text-[20px] text-center  font-[600] uppercase text-[#e7f33cec]'>{props.name}</h1>
                        <h3 className=' text-[15px] text-center  font-[600]  text-[#fff]'>Learner</h3>
                        <h3 className=' text-[12px] text-center  font-[500]  text-[#fff]'>Full Stack Developer & Android App Developer</h3>
                        <h3 className=' text-[12px] text-center  font-[500]  text-[#fff]'>CSE With IOT ( 2k22 )</h3>
                    </div>
                    <div className=' w-[100%] h-[30%] gap-2  flex justify-center items-center'>
                        <NavLink to={props.html_url} target=' _ ' className=' w-[46px] h-[46px] border-[1px] border-[#1d3641] hover:bg-[#1d3b5d] transition ease-in-out delay-200  bg-[#111f27] rounded-[50%] flex justify-center items-center'>
                            <i className="fa-brands  fa-github text-[#fff] text-[24px]"></i>
                        </NavLink>
                        <NavLink to='https://www.linkedin.com/in/vikash-kumar-8467b0253/' target=' _ ' className=' w-[46px] border-[1px] border-[#1d3641] hover:bg-[#1d3b5d] transition ease-in-out delay-200 h-[46px] bg-[#172730] rounded-[50%] flex justify-center items-center'>
                            <i className="fa-brands fa-linkedin-in text-[#fff] text-[20px]"></i>
                        </NavLink>
                        <NavLink to='https://www.instagram.com/vikashkrdeveloper/' target=' _ ' className=' w-[46px] h-[46px] border-[1px] border-[#1d3641] hover:bg-[#1d3b5d] transition ease-in-out delay-200  bg-[#111f27] rounded-[50%] flex justify-center items-center'>
                            <i className="fa-brands fa-instagram text-[#fff] text-[20px]"></i>
                        </NavLink>
                        <NavLink to={'https://easylearnvikash.tech'} target=' _ ' className=' w-[46px] h-[46px] border-[1px]  border-[#1d3641] hover:bg-[#1d3b5d] transition ease-in-out delay-200  bg-[#111f27] rounded-[50%] flex justify-center items-center'>
                            <i className="fa-solid fa-user   text-[#fff] text-[18px]"></i>
                        </NavLink>
                        <NavLink to='mailto:developergecsiwan@gmail.com' className=' w-[46px] h-[46px]  border-[1px] border-[#1d3641] hover:bg-[#1d3b5d] transition ease-in-out delay-200  bg-[#111f27] rounded-[50%] flex justify-center items-center'>
                            <i className="fa-solid fa-envelope  text-[#fff] text-[20px]"></i>
                        </NavLink>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ClubMemberBox
