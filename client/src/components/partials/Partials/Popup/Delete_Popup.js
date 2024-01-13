import React from 'react'
import Popupchange from './Popupchange'
function Delete_Popup() {
    const cancelboxbutton = () => {
        Popupchange()

    }

    const bodyclickcancelelement = (event) => {

        // if (event.target) {
        //   chartlistmenushow();
        // }
    }
    return (
        <>
            <div className='w-[100%] h-[100vh] hidden   absolute top-[0px] z-20 left-[0px] bg-[#00000012]' id='chartshowmessage'>
                <div className='  w-[100%] h-[100vh] flex items-center justify-center   bg-[#00000012]' >
                    <div className=' bg-[#fff] w-[500px] h-[200px] rounded-[10px] '>
                        <div className='w-[100%] h-[80px] flex justify-center items-center '>
                            <p className=' text-[20px] font-[700]'>Are you sure to delete data ?</p>
                        </div>
                        <div className='w-[100%] h-[100px] flex justify-center items-center  gap-6'>
                            <button type="button" onClick={cancelboxbutton} className='w-[100px] h-[50px] shadow-inner  flex justify-center items-center bg-[#f79f34] rounded-[5px]'>
                                <span className=' font-[600] text-[#ffffff]'>Cancel</span>
                                <span className="material-symbols-outlined  font-[600] text-[#ffffff]">
                                    close
                                </span>
                            </button>

                            <button type="button" className=' w-[100px] h-[50px] shadow-inner flex justify-center items-center bg-[#f43131] rounded-[5px]'>
                                <span className=' font-[600] text-[#fff]'>Delete</span>
                                <span className="material-symbols-outlined   text-[#fff]">
                                    delete_forever
                                </span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Delete_Popup
