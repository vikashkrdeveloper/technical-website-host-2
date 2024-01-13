import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CodingEventTermsAndConditions() {
    const navigate = useNavigate();
    const [checkbox, setcheckbox] = useState(false);
    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Control' || event.key === 'F11' || event.key === 'Alt' || event.key === 'Escape' || event.key === 'Tab' || event.key === 'F1' || event.key === 'F2' || event.key === 'F3' || event.key === 'F4' || event.key === 'F5' || event.key === 'F6' || event.key === 'F7' || event.key === 'F8' || event.key === 'F9' || event.key === 'F10' || event.key === 'F12') {
                event.preventDefault();

            }

        })
    })
    const checkBoxOneHandel = () => {
        const verify = document.querySelector('#checkbox').checked;
        if (verify) {
            setcheckbox(true);

        } else {
            setcheckbox(false);
        }
    }
    const onclickHandeldata = () => {
        if (checkbox) {
            navigate('/technical/events/coding/contest/test/start-page');
        }
    }
    console.log(checkbox);
    return (
        <>
            <div className=' w-[100%] h-[100vh] bg-[#0b1220]'>
                <h1 className=' text-center text-[40px] font-[700] italic p-[20px] pt-[30px] text-[#fff]'>TERMS  & CONDITIONS</h1>
                <hr />
                <div className='w-[100%] h-[84.6%] overflow-auto'>
                    <div className='w-[100%] h-[100vh] bg-slate-500'></div>
                    <div className='w-[100%] h-[70px] flex justify-center items-center'>
                        <div className='w-[50%] h-[100%] flex justify-start items-center gap-2 text-[#fff]'>
                            <input type='checkbox' onClick={checkBoxOneHandel} id='checkbox' className=' ml-[26px]' />
                            <label htmlFor='checkbox' className=''>I have agree to terms and conditions</label>
                        </div>
                        <div className='w-[50%] h-[100%] flex justify-end items-center '>
                            {
                                checkbox ? (

                                    <button onClick={onclickHandeldata} className='text-[#fff] w-[150px] h-[45px] border-[1px] mr-[40px] border-[#2c4962] bg-[#1d2e43] rounded-[5px]'>Start Test</button>
                                ) : (
                                    <button onClick={onclickHandeldata} className='text-[#ffffff79] cursor-no-drop w-[150px] h-[45px] border-[1px] mr-[40px] border-[#1c354b] bg-[#0e1b2b] rounded-[5px]'>Start Test</button>

                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CodingEventTermsAndConditions
