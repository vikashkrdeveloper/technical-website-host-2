import React from 'react'

function Loader(props) {
    return (
        <>
            <div className='w-[100%] fixed top-0 left-0 z-50 h-[100vh] flex justify-center items-center text-[#fff] bg-[#131c2e]'>
                <div className='w-[20%] h-[auto] p-[10px]'>
                    <div className='w-[100%] h-[auto] flex justify-center items-center'><span className='animate-spin border-t-[6px] border-t-[#4981a1] w-[50px] h-[50px] rounded-[50%] border-[6px]'></span></div>
                    <div className='w-[100%] h-[auto] flex justify-center items-center'><h1 className=' text-[30px] font-[600]'>{props.message}</h1></div>
                </div>
            </div>
        </>
    )
}

export default Loader
