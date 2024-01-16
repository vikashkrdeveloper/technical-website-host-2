import React from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
function BoxClub(props) {
    const navigate = useNavigate();
    const registernow = () => {
        navigate(`/${props.eventname}/event/registration/form`);
    }
    const downloadRulebook = () => {
        toast.success("File has been downloaded please check your download section");
        const a = document.createElement('a');
        a.href = props.rulebookpdf;
        a.download = props.rulebookpdf;
        a.click();
    };
    return (
        <>
            <div className=' w-[300px] m-[25px] max-[480px]:ml-0 max-[1480px]:m-[15px] max-[1200px]:w-[250px] hover:shadow-[1px_1px_20px_1px_rgba(214,216,216,0.2)] shadow-[1px_1px_6px_1px_rgba(214,216,216,0.2)] h-[380px] rounded-[10px]  cursor-default  p-[12px] transition float-left ease-in-out delay-200 border-[1px] border-[#1b3040] bg-[#0a1a23]'>
                <div className=' w-[100%] h-[50%] flex justify-center items-center '>
                    <img src={props.image_Url} className='w-[100%] h-[100%] rounded-[10px]' alt="Loading...." />
                </div>
                <h1 className=' text-center text-[#ffc71e] text-[26px] font-[600] mt-6 cursor-pointer uppercase max-[1200px]:text-[20px] '>{props.eventname}</h1>
                <p className='text-[12px] text-[#fff] text-center max-[1200px]:text-[10px]  '>{props.description}</p>
                <div className=' w-[100%] h-[80px] flex justify-center  max-[1200px]:gap-2 items-center gap-6'>
                    <button onClick={registernow} className='w-[120px] h-[45px] border-[1px] border-[#253955] rounded-[5px] text-[#ffffffcf] text-[13px] font-[700] bg-[#0a1b2dc4] hover:bg-[#206573]  hover:text-[#fff]  transition ease-in-out delay-150 max-[1200px]:w-[100px] max-[1200px]:text-[10px]  '>Register Now</button>
                    <button onClick={downloadRulebook} className='w-[100px] h-[45px] border-[1px] border-[#253955] rounded-[5px] text-[#ffffffcf] text-[13px] font-[700] bg-[#0a1b2dc4] hover:bg-[#a27332] hover:text-[#fff]  transition ease-in-out delay-150 max-[1200px]:text-[10px]'>RuleBook</button>
                </div>
            </div>
        </>
    )
}

export default BoxClub
