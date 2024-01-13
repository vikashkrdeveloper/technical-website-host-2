import React from 'react'
import { NavLink } from 'react-router-dom'
import Data_Fetch_Api from '../contexts/Data_Fetch_Api';
import Loader from './Loader';

function MainHeader() {
    const [IsLoading, Error] = Data_Fetch_Api('/api/auth/admin/data');
    if (IsLoading) {
        return <Loader message="Loading.." />
    }
    const mainheaderslidehandel = () => {
        const mainheader = document.querySelector('#mainheader');
        if (mainheader.classList.contains('max-[1024px]:hidden')) {
            mainheader.classList.remove('max-[1024px]:hidden');
        } else {

            mainheader.classList.add('max-[1024px]:hidden');
        }
    }
    return (
        <>
            <div className=' w-[100%] h-[60px] z-40 sticky top-0 bg-[#0c0f1e] border-b-[1px] border-[#2b3148] flex justify-center items-center'>
                <div className='w-[24%] h-[auto] flex justify-center items-center max-[1024px]:w-[90%] max-[1024px]:justify-start'>

                    <NavLink to='/' className='flex justify-center items-center' >
                        <div className=' w-[70px] h-[auto] flex justify-center items-center'>
                            <img src="https://imgs.search.brave.com/Er0gh71OnmWHzlTaxGe7vxoKS5RU5qM9vxgYD4-ef20/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1QvdG9reXUt/dGVjaG5vLXN5c3Rl/bS1sb2dvLTgyRkM0/QTcxQzgtc2Vla2xv/Z28uY29tLnBuZw" className='w-[50px] h-[40px] max-[800px]:w-[40px] max-[800px]:h-[34px]' alt="Loading.." />

                        </div>
                        <h1 className=' text-[30px] font-[700] text-[#fff] max-[800px]:text-[25px] max-[480px]:text-[20px]'>TECHKRITI</h1>
                    </NavLink>

                </div>
                <div className='hidden w-[5%] h-[100%] max-[1024px]:flex justify-end items-center  '>
                    <span onClick={mainheaderslidehandel} className=" material-symbols-outlined text-[#fff] max-[480px]:text-[30px] text-[36px] cursor-pointer">
                        menu
                    </span>
                </div>
                <nav id='mainheader' className='w-[76%] h-[100%] flex justify-center max-[1024px]:h-[100%] max-[1024px]:w-[70%] max-[480px]:w-[80%] max-[1024px]:bg-[#0c0f1e]     max-[1024px]:fixed top-[60px] left-0  max-[1024px]:hidden items-center '>
                    <ul className='w-[100%] h-[100%] max-[1024px]:mt-[50px]   flex justify-center items-center gap-8 max-[1280px]:gap-4  max-[1024px]:overflow-y-auto  max-[1024px]:w-[200px] max-[1024px]:space-x-6    max-[1024px]:block'>
                        <NavLink onClick={mainheaderslidehandel} to={`/government-engineering-college-siwan/events/team-list/2024-25`} className='text-[#fff] max-[1024px]:mb-[10px] text-center text-[14px] transition-all ease-in-out delay-200 font-[600]  hover:text-[red]'>
                            <li> TEAM 2024-25</li>
                        </NavLink>
                        <NavLink onClick={mainheaderslidehandel} to='/government-engineering-college-siwan/total/events/list' className='text-[#fff] text-center text-[14px] transition-all ease-in-out delay-200 font-[600]  hover:text-[red]'>
                            <li>EVENTS</li>
                        </NavLink>
                        <NavLink onClick={mainheaderslidehandel} to="/government-engineering-college-siwan/total/clubs/list" className='text-[#fff]  text-center text-[14px] transition-all ease-in-out delay-200 font-[600]  hover:text-[red]'>
                            <li> CLUBS</li>
                        </NavLink>
                        <NavLink to='/government-engineering-college-siwan/contest/lists' className='text-[#fff] text-center text-[14px] transition-all ease-in-out delay-200 font-[600]  hover:text-[red]'>
                            <li>CONTEST</li>
                        </NavLink>
                        <NavLink onClick={mainheaderslidehandel} to="/government-engineering-college-siwan/technical-club/total/member/list" className='text-[#fff]  text-center text-[14px] transition-all ease-in-out delay-200 font-[600]  hover:text-[red]'>
                            <li> CLUB MEMBERS</li>
                        </NavLink>
                        <NavLink onClick={mainheaderslidehandel} to="/government-engineering-college-siwan/event/gallery/" className='text-[#fff] text-[14px]     text-center transition-all ease-in-out delay-200 font-[600]  hover:text-[red]'>
                            <li>EVENTS GALLERY</li>
                        </NavLink>
                        <NavLink onClick={mainheaderslidehandel} to='/government-engineering-college-siwan/technical-club/contacts' className='text-[#fff] text-center text-[14px] transition-all ease-in-out delay-200 font-[600]  hover:text-[red]'>
                            <li> CONTACT US</li>
                        </NavLink>
                        {
                            Error ? (
                                <NavLink to='/admin/dashboard/login' onClick={mainheaderslidehandel} className='text-[#fff] text-[14px] text-center transition-all ease-in-out delay-200 font-[600]  hover:text-[red]'>
                                    <li> ADMIN LOGIN</li>
                                </NavLink>
                            ) : (
                                <NavLink to='/admin/dashboard/' onClick={mainheaderslidehandel} className='text-[#fff] text-[14px] text-center transition-all ease-in-out delay-200 font-[600]  hover:text-[red]'>
                                    <li> Dashboard</li>
                                </NavLink>
                            )
                        }

                    </ul>
                </nav>
            </div>

        </>
    )
}

export default MainHeader
