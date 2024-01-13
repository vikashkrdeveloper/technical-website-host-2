import React from 'react'

function HalfLoader(props) {
    return (
        <>
            <div className='w-[84%] ml-[250px] absolute top-0 left-0 z-50 h-[90.2vh] flex justify-center items-center text-[#fff] bg-[#28344d]'>
                <div className='w-[20%] h-[auto] p-[10px]'>
                    <div className='w-[100%] h-[auto] flex justify-center items-center'><span className='animate-spin border-t-[4px] border-t-[#4981a1] w-[40px] h-[40px] rounded-[50%] border-[4px]'></span></div>
                    <div className='w-[100%] h-[auto] flex justify-center items-center'><h1 className=' text-[30px] font-[600]'>{props.message}</h1></div>
                </div>
            </div>
        </>
    )
}

export default HalfLoader
