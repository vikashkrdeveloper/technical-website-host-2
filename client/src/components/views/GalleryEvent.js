import React, { useEffect, useState } from 'react'
import MainHeader from '../partials/MainHeader'
import MainFooter from '../partials/MainFooter'
import img1 from '../images/img6.jpeg';
import img2 from '../images/img10.jpeg';
import img3 from '../images/img9.jpeg';
import img4 from '../images/img8.jpeg';
import img5 from '../images/img7.jpeg';
import img6 from '../images/img3.jpeg';
import img7 from '../images/img5.jpeg';
import img8 from '../images/img4.jpeg';

function GalleryEvent(props) {
    const [galleryImage, setgalleryImage] = useState([]);
    const [galleryImages, SetgalleryImages] = useState([]);
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8
    ];
    useEffect(() => {
        setgalleryImage(images)
    }, [])
    const OnclickHandeldata = (image) => {
        SetgalleryImages(image)
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
                    <span className="material-symbols-outlined text-[#fff]  cursor-pointer text-[40px] font-[700]" onClick={OnclickHandeldata}>
                        close
                    </span>
                </div>
                <div className='w-[100%] h-[80%] flex justify-center items-center'>
                    <img src={galleryImages} className='w-[60%] h-[100%] max-[480px]:w-[90%] max-[480px]:h-[300px] rounded-[10px]' alt='Loading..' />
                </div>
            </div>
            <MainHeader />
            <div className=' w-[100%] h-[100%] overflow-auto bg-[#0f1627]'>
                <div className='w-[100%] h-[auto] bg-[rgba(20,5,5,0.03)] p-[5px]'>
                    <div className='w-[100%]  h-[160px] max-[1024px]:h-[120px] max-[800px]:h-[80px] mt-4 space-y-4 '>
                        <h1 className=' text-[35px]  text-center font-[600] text-[#ffffffe4] max-[1024px]:text-[30px] max-[800px]:text-[25px] max-[480px]:text-[15px]'>Check our <span className='text-[#fd0]'>Event Gallery</span></h1>
                        <div className='w-[100%] h-[auto] flex justify-center items-center'>
                            <p className=' text-[14px]  text-center font-[500] w-[700px] max-[1024px]:text-[12px]  text-[#ffffffe0] pl-[10px] max-[1024px]:w-[510px] max-[800px]:w-[400px]  max-[480px]:w-[100%] max-[480px]:text-[10px] pr-[10px]' >Glimpse of our Previous held Events in our College. 🏆✨</p>
                        </div>
                    </div>
                    <div className=' w-[100%] h-[100%] flex justify-center items-center'>
                        <div className=' w-[96%] h-[100%] space-y-8 flex justify-center items-center   max-[480px]:p-[20px] pt-0'>
                            <div className='w-[100%]  h-[auto] max-[1500px]:w-[1100px] max-[1150px]:w-[750px] max-[800px]:w-[350px]'>
                                {
                                    galleryImage.map((element, index) => (
                                        <div key={index} onClick={() => { OnclickHandeldata(element) }} className=' w-[330px]  m-[15px]  max-[480px]:m-0 max-[480px]:w-[100%] max-[480px]:mb-[30px]  space-y-4 hover:shadow-[1px_1px_20px_1px_rgba(214,216,216,0.2)] shadow-[1px_1px_6px_1px_rgba(214,216,216,0.2)] h-[250px] rounded-[10px] cursor-pointer  p-[12px] transition float-left ease-in-out delay-200 border-[1px] border-[#1b3040] bg-[#0a1a23]'>
                                            <div className=' w-[100%] h-[100%] flex justify-center items-center '>
                                                <img id='clickableImage' src={element} className='w-[100%] h-[100%] rounded-[10px]' alt="Loading...." />
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MainFooter />
        </>
    )
}

export default GalleryEvent
