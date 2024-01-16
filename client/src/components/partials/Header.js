import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Loader from './Loader';

const Header = (props) => {
    const navigate = useNavigate();
    const [Isloader, SetLoader] = useState(false);
    const [Image, setimage] = useState('');
    const loginlinkpage = () => {
        navigate('/participant/login')
    }
    const clickevent = () => {
        const profilebox = document.querySelector('#profilebox');
        if (profilebox.classList.contains('hidden')) {
            profilebox.classList.remove('hidden');
        } else {
            profilebox.classList.add('hidden');
        }
    }

    const logout = async () => {
        try {
            const verify = window.confirm("Are you sure to Logout this Site");
            clickevent();
            if (verify) {
                SetLoader(true)
                const res = await fetch('/api/logout/', { method: 'GET' })
                if (res.status === 200) {
                    SetLoader(false)
                    if (props.datas.EventSelectParticipant === "quiz") {
                        navigate('/quiz/participant/login')
                        toast.success('Logout sucessfully Done');
                        return;
                    } else if (props.datas.EventSelectParticipant === "coding") {
                        navigate('/coding/participant/login')
                        toast.success('Logout sucessfully Done');
                        return;
                    }
                }

            }
        } catch (error) {
            SetLoader(false)
        }
    }
    useEffect(() => {
        if (props.datas.bufferData) {
            let arrayBuffer = props.datas.bufferData.data
            const base64Strings = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
            setimage(base64Strings);
        }
    }, [])
    if (Isloader) {
        return <Loader message="Loading.." />
    }
    return (
        <>
            <div className=' w-[100%] h-[60px] sticky top-0 bg-[#273a52] flex justify-center items-center'>
                <div className='w-[60%] h-[100%] bg-[#3e7e9a] flex justify-center items-center'>
                    <div className=' w-[60%] h-[100%]   flex justify-center items-center gap-1'>
                        <div className='w-[275px] h-[100%] flex justify-center items-center'>
                            <NavLink to='/' className='w-[300px] h-[auto] flex justify-center items-center  '>
                                <div className=' w-[80px] h-[auto] flex justify-center items-center'>
                                    <img src="https://imgs.search.brave.com/Er0gh71OnmWHzlTaxGe7vxoKS5RU5qM9vxgYD4-ef20/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1QvdG9reXUt/dGVjaG5vLXN5c3Rl/bS1sb2dvLTgyRkM0/QTcxQzgtc2Vla2xv/Z28uY29tLnBuZw" className='w-[60px] h-[50px]' alt="Loading.." />

                                </div>
                                <h1 className=' text-[30px] font-[700] text-[#fff]'>TECHKRITI</h1>
                            </NavLink>
                        </div>

                    </div>

                </div>
                {props.verify ? (
                    <div className='w-[40%] h-[100%]  flex justify-center items-center'>
                        <div className=' w-[50%] h-[100%]   flex justify-center items-center'>
                            <button type="button" onClick={loginlinkpage} className=' border-2 p-[10px] w-[120px] h-[80%]  text-[#fff] rounded-[10px] hover:bg-[#fff] font-[700] hover:text-[#000000] transition ease-in-out delay-150'>Login</button>
                        </div>
                    </div>
                ) : (
                    <div className='w-[40%] h-[100%]  flex justify-center items-center'>
                        <div className=' w-[50%] h-[100%]   flex justify-center items-center'>
                            <button type="button" onClick={clickevent} className=' w-[40px] h-[40px] flex justify-center items-center rounded-[50%] font-[700] transition ease-in-out delay-150 '>
                                <img className='w-[100%] h-[100%]  rounded-[10px]' src={`data:image/png;base64,${Image}`} alt="" />
                            </button>
                        </div>
                    </div>
                )}

            </div>
            <div id="profilebox" className='  hidden w-[200px] h-[auto] rounded-[5px] border-t-2  border-[#c6365f] bg-[#2a3154] absolute right-[13.4%] top-[60px] z-10'>

                <NavLink to="/participant/dashboard/profile/" onClick={clickevent} target='_' className='flex justify-start items-center p-[10px] cursor-pointer hover:bg-[#354077] rounded-tl-[5px] rounded-tr-[5px] '>
                    <span className="material-symbols-outlined text-[25px] mr-[5px] ml-[5px] text-[#fff]">
                        person
                    </span>
                    <span className=' ml-[5px] font-[600] text-[#fff] uppercase w-[130px] truncate'>{props.datas.name}</span>
                </NavLink>

                <div className='flex rounded-bl-[5px] rounded-br-[5px]  justify-start items-center p-[10px] cursor-pointer hover:bg-[#354077] ' onClick={logout}>
                    <span className="material-symbols-outlined text-[25px] mr-[5px] ml-[5px] text-[#fff]">
                        logout
                    </span>
                    <span className=' ml-[5px] font-[600] text-[#fff]'>Logout</span>
                </div>
            </div>
        </>
    )
}

export default Header
