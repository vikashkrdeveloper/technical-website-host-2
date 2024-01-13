import React from 'react'

function ParticipantProfile() {
    const handelclickbutton = () => {
            window.location.assign('/technical/events/coding/contest/');
    }
    return (
        <>
            <div className=' bg-[#0f182d] w-[100%] h-[100vh] text-[#fff]  flex justify-center items-center'>
                <div>
                    <h1 className='text-[40px] text-center w-[800px]'>This Time Your Profile Not Visible Please visit After some time</h1>
                    <br /><div className=' text-center w-[100%] flex justify-center items-center'><button onClick={handelclickbutton} className='w-[100px] h-[40px] bg-[#16293e] rounded-[10px] border-[1px] border-[#263f56] shadow-inner'>Go back</button></div>
                </div>
            </div>

        </>
    )
}

export default ParticipantProfile
