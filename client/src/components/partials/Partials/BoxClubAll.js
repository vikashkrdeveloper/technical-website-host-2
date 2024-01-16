import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
function BoxClubAll(props) {
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
            <div className=' w-[320px] max-[480px]:w-[100%] max-[480px]:m-0 max-[480px]:mb-[40px]  m-[20px]  space-y-4 hover:shadow-[1px_1px_20px_1px_rgba(214,216,216,0.2)] shadow-[1px_1px_6px_1px_rgba(214,216,216,0.2)] h-[450px] rounded-[10px]  cursor-default  p-[12px] transition float-left ease-in-out delay-200 border-[1px] border-[#1b3040] bg-[#0a1a23]'>
                <div className=' w-[100%] h-[50%] flex justify-center items-center '>
                    <img src={props.image_Url} className='w-[100%] h-[100%] rounded-[10px]' alt="Loading...." />
                </div>
                <h1 className=' text-center text-[#ffc71e] text-[26px] font-[600] mt-6 cursor-pointer uppercase'>{props.eventname}</h1>
                <p className='text-[12px] text-[#fff] text-center '>{props.description}</p>
                <div className=' w-[100%] h-[80px] flex justify-center  items-center gap-6'>
                    <button onClick={registernow} className='w-[120px] h-[45px] border-[1px] border-[#253955] rounded-[5px] text-[#ffffffcf] text-[13px] font-[700] bg-[#0a1b2dc4] hover:bg-[#206573]  hover:text-[#fff]  transition ease-in-out delay-150'>Register Now</button>
                    <button onClick={downloadRulebook} className='w-[100px] h-[45px] border-[1px] border-[#253955] rounded-[5px] text-[#ffffffcf] text-[13px] font-[700] bg-[#0a1b2dc4] hover:bg-[#a27332] hover:text-[#fff]  transition ease-in-out delay-150'>RuleBook</button>
                </div>
            </div>
        </>
    )
}

export default BoxClubAll
