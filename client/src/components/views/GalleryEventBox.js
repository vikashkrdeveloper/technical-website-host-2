import React, { useState } from 'react';
function GalleryEventBox({ images }) {
    const [ImageData, SetImageData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const fullimageview = () => {
        const profilebox = document.querySelector('#imagebox');
        if (profilebox.classList.contains('hidden')) {
            profilebox.classList.remove('hidden');
        } else {

            profilebox.classList.add('hidden');
        }

    }
    return (
        <>
            <div id='imagebox' className='w-[100%] hidden fixed top-0 left-0 z-50 h-[100vh] bg-[#000000e0] '>
                <div className=' w-[100%] h-[40px] flex justify-end items-center  p-[50px]'>
                    <span className="material-symbols-outlined text-[#fff]  cursor-pointer text-[40px] font-[700]" onClick={fullimageview}>
                        close
                    </span>
                </div>
                <div className='w-[100%] h-[80%] max-[480px]:h-[40%] flex justify-center items-center'>
                    <img className='w-[60%] max-[480px]:w-[90%] max-[480px]:h-[300px] rounded-[10px]' src={images[currentIndex]} alt='Loading..' />
                </div>
            </div>
            <div className=' w-[100%] h-[86vh]   bg-[#0f1627]'>
                <div className='w-[100%] h-[80vh]  p-[5px]'>
                    <div className='w-[100%]  h-[160px] mt-4 space-y-4 '>
                        <h1 className=' text-[35px]  text-center font-[600] text-[#ffffffe4] max-[1024px]:text-[30px] max-[800px]:text-[25px] max-[480px]:text-[15px]'>Check our <span className='text-[#fd0]'>Event Gallery</span></h1>
                        <div className='w-[100%] h-[auto] flex justify-center items-center'>
                            <p className=' text-[14px]  text-center font-[500] w-[700px] max-[1024px]:text-[12px] max-[1024px]:w-[510px] max-[800px]:w-[400px]  text-[#ffffffe0] pl-[10px] max-[480px]:w-[100%] max-[480px]:text-[10px] pr-[10px]' >Glimpse of our Previous held Events in our College. 🏆✨</p>
                        </div>
                    </div>
                    <div className=' w-[100%] h-[85%] flex justify-center items-center '>
                        <div className=' w-[96%] h-[80%] '>
                            <div className='w-[100%]   h-[400px]'>
                                <div className=' absolute left-[10%] flex max-[1024px]:hidden cursor-not-allowed max-[1300px]:left-[30%]'>
                                    <div className=' bg-opacity-50  w-[330px]  h-[250px] rounded-[10px]   max-[1300px]:hidden   p-[12px] transition float-left ease-in-out delay-200 border-[1px] border-[#1b3040] bg-[#0a1a23]'>
                                        <div className=' w-[100%] h-[100%] flex justify-center items-center'>
                                            <img id='clickableImage' src={images[currentIndex - 2]} className='w-[100%] blur-[3px] h-[100%] rounded-[10px]' alt="Loading...." />
                                        </div>
                                    </div>
                                    <div className=' w-[330px] relative right-[150px] h-[250px] rounded-[10px]   p-[12px] transition float-left ease-in-out delay-200 border-[1px] border-[#1b3040] bg-[#0a1a23]'>
                                        <div className=' w-[100%] h-[100%] flex justify-center items-center '>
                                            <img id='clickableImage' src={images[currentIndex - 1]} className='w-[100%] blur-[1px] h-[100%] rounded-[10px]' alt="Loading...." />
                                        </div>
                                    </div>
                                </div>

                                <div className=' min-[1020px]:absolute w-[300px] h-[250px]  min-[1024]:left-[39%] z-40 scale-125 max-[1020px]:flex left-[40%]  max-[1020px]:w-[100%]  justify-center items-center'>
                                    <div className=' w-[330px] h-[250px] max-[480px]:w-[300px]  rounded-[10px]  flex justify-center items-center cursor-pointer  p-[12px] transition float-left ease-in-out delay-200 border-[1px] border-[#1b3040] bg-[#0a1a23]'>
                                        <div className=' w-[100%] h-[100%] flex justify-center items-center '>
                                            <img id='clickableImage' src={images[currentIndex]} onClick={fullimageview} className='w-[100%] h-[100%] rounded-[10px]' alt="Loading...." />
                                        </div>
                                    </div>
                                </div>

                                <div className=' max-[1024px]:hidden  absolute left-[55%] flex cursor-not-allowed max-[1300px]:left-[60%]'>
                                    <div className=' bg-opacity-50  z-30 w-[330px]  h-[250px] rounded-[10px] cursor-not-allowed   p-[12px] transition float-left ease-in-out delay-200 border-[1px] border-[#1b3040] bg-[#0a1a23]'>
                                        <div className=' w-[100%] h-[100%] flex justify-center items-center '>
                                            <img id='clickableImage' src={images[currentIndex + 1]} className=' w-[100%] blur-[1px] h-[100%] rounded-[10px]' alt="Loading...." />
                                        </div>
                                    </div>
                                    <div className='  w-[330px] relative right-[150px] h-[250px] rounded-[10px] max-[1300px]:hidden p-[12px] transition float-left ease-in-out delay-200 border-[1px] border-[#1b3040] bg-[#0a1a23]'>
                                        <div className=' w-[100%] h-[100%] flex justify-center items-center '>
                                            <img id='clickableImage' src={images[currentIndex + 2]} className=' blur-[3px] w-[100%] h-[100%] rounded-[10px]' alt="Loading...." />
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className=' w-[100%] h-[200px] mt-4 flex justify-center items-end gap-[100px] pb-[40px]'>
                        <button onClick={handlePrev} className=' border-[1px] text-[#ffffffd1] text-[14px] font-[700] p-[10px] w-[120px] max-[480px]:w-[100px]  max-[480px]:text-[10px] flex justify-center items-center gap-[10px] border-[#244258] rounded-[5px]'>
                            <span className="material-symbols-outlined text-[15px] font-[700]">
                                arrow_back_ios
                            </span>
                            Previous
                        </button>
                        <button onClick={handleNext} className='border-[1px] text-[#ffffffd1] text-[14px] font-[700] p-[10px] w-[110px] flex justify-center items-center gap-[10px]  max-[480px]:w-[100px]  max-[480px]:text-[10px] border-[#244258] rounded-[5px]'>
                            Next
                            <span className="material-symbols-outlined text-[15px] font-[700]">
                                arrow_forward_ios
                            </span>
                        </button>
                    </div>
                </div>

            </div>
        </>
    )

}


export default GalleryEventBox
