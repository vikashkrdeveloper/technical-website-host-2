import React from 'react'

function AnswerWritPageLoader(props) {
    return (
        <>
            <div className='w-[100%]     z-50 h-[100vh] flex justify-center items-center text-[#fff] bg-[#0b1123]'>
                <div className='w-[20%] h-[auto] p-[10px]'>
                    <div className='w-[100%] h-[auto] flex justify-center items-center'><span className='animate-spin border-t-[4px] border-t-[#4981a1] w-[40px] h-[40px] rounded-[50%] border-[4px]'></span></div>
                    <div className='w-[100%] h-[auto] flex justify-center items-center'><h1 className=' text-[30px] font-[600]'>{props.message}</h1></div>
                </div>
            </div>

        </>
    )
}

export default AnswerWritPageLoader
