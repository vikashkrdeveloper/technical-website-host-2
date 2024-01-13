import React from 'react'

function AboutPageBox(props) {
    return (
        <>
            <div className='w-[100%] h-[auto] rounded-[10px] p-[10px] mt-[20px] transition ease-in-out  delay-1000'>
                <div className='w-[100%] h-[auto] transition ease-in-out  flex justify-center items-center border-[1px] border-[#18293e] delay-200 relative text-[#fff] shadow-inner  bg-[#121f38]  rounded-[10px]'>
                    <div className='w-[15%] h-[100%] flex justify-center items-center  rounded-tl-[10px] rounded-bl-[10px]'>
                        <iframe  className='w-[100px] h-[100px]' src={props.src} />
                    </div>
                    <div className=' w-[85%] h-[100%] rounded-tr-[10px] p-[8px] rounded-br-[10px]'>
                        <h1 className='text-[24px] ml-[10px] mb-[5px] font-[600]'>{props.heading}</h1>
                        <p className='text-[14px] text-[400]'>{props.content}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutPageBox
