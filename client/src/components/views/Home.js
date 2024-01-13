import React from 'react'
import videos from '../videos/video.mp4';
import BoxClub from '../partials/Partials/BoxClub';
import codingContestLogo from '../images/conding.webp';
import MainHeader from '../partials/MainHeader';
import MainFooter from '../partials/MainFooter';
import AboutPage from './AboutPage';
import { NavLink } from 'react-router-dom';
import GalleryEventBox from './GalleryEventBox';
import img1 from '../images/img6.jpeg';
import img2 from '../images/img10.jpeg';
import img3 from '../images/img9.jpeg';
import img4 from '../images/img8.jpeg';
import img5 from '../images/img7.jpeg';
import img6 from '../images/img3.jpeg';
import img7 from '../images/img5.jpeg';
import img8 from '../images/img4.jpeg';
function Home() {
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
    return (
        <>
            <MainHeader />
            <div className=' w-[100%] h-[100%] max-[800px]:bg-[#0c1321]'>
                <video className=' min-w-full min-h-full fixed max-[800px]:hidden  top-0 left-0 -z-30' autoPlay loop muted>
                    <source src={videos} className='w-[100%] h-[100%]' type="video/mp4" />
                </video>
                <div className='w-[100%] h-[91.6vh] bg-[#1513135a]'>
                    <div className=' w-[100%] h-[100%] flex justify-center items-center'>
                        <div className=' w-[700px] h-[200px] '>
                            <div className='w-[100%] h-[auto] flex justify-center items-center '>
                                <h1 className='text-[45px] text-[#fff] font-[700] not-italic max-[1024px]:text-[35px] max-[700px]:text-[25px] max-[480px]:text-[15px]' >WELCOME TO</h1>
                            </div>
                            <div className='w-[100%] h-[auto] flex justify-center items-center '>
                                <h1 className='text-[45px] text-[#ff0000] font-[600] not-italic max-[1024px]:text-[35px] max-[700px]:text-[25px] max-[480px]:text-[15px]'>INSTITUTE TECHNICAL COUNCIL</h1>
                            </div>
                            <div className='w-[100%] h-[auto] flex justify-center items-center '>
                                <h1 className='text-[25px] text-[#ffffff] font-[600] not-italic max-[1024px]:text-[20px] max-[700px]:text-[15px] max-[480px]:text-[10px]'>Innovate . Tinker . Create!</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <AboutPage /> */}
                <div className='w-[100%] h-[auto] bg-[#0d1526] p-[4px]'>
                    <div className='w-[100%]  h-[160px] mt-4 space-y-4 mb-8'>
                        <h1 className=' text-[35px]  text-center font-[600] text-[#ffffffe4] max-[1024px]:text-[30px] max-[800px]:text-[25px] max-[480px]:text-[15px]'>Check our <span className='text-[#fd0]'>Events</span></h1>
                        <div className='w-[100%] h-[auto] flex justify-center items-center'>

                            <p className=' text-[14px]  text-center font-[500] text-[#ffffffe0] max-[1024px]:w-[400px]  max-[1024px]:text-[12px] max-[800px]:w-[350px] max-[480px]:text-[10px] max-[480px]:w-[90%]' >All events are chargeable to cover the expenses and enhance the quality of the fest.</p>
                        </div>
                        <div className='w-[100%] h-[auto] flex justify-center items-center'>
                            <p className=' text-[14px]  text-center font-[500] w-[700px] max-[1024px]:text-[12px] max-[1024px]:w-[510px] max-[800px]:w-[400px]  text-[#ffffffe0] pl-[10px] max-[480px]:w-[100%] max-[480px]:text-[10px] pr-[10px]' >As a token of your victory, each winner will be presented with an exclusive and beautifully crafted certificate, recognizing your outstanding achievement. 🏆✨</p>
                        </div>
                    </div>
                    <div className=' w-[100%] h-[auto] flex justify-center items-center'>
                        <div className=' w-[93%] max-[480px]:w-[100%] h-[auto] flex justify-center items-center'>
                            <div className='w-[100%]  max-[1380px]:w-[1000px]  max-[950px]:w-[570px]  max-[650px]:w-[250px]  h-[auto] '>
                                <BoxClub image_Url={codingContestLogo} eventname="coding" description=" A coder closing their eyes and visualizing their coding goals" />
                                <BoxClub image_Url={codingContestLogo} eventname="bgmi" description="Survive. Conquer. Win. Join the Battle" />
                                <BoxClub image_Url={codingContestLogo} eventname="poetry" description="Rhyme Rendezvous: Paint Emotions with Words" />
                                <BoxClub image_Url={codingContestLogo} eventname="cricket" description="Unleash the passion in the ultimate cricket showdown" />
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] h-[auto] p-[30px] max-[480px]:pr-[2px]  pt-[40px] flex justify-end max-[480px]:justify-center items-center'>
                        <NavLink to='/government-engineering-college-siwan/total/events/list' className='w-[160px]   gap-2 h-[45px] mr-[150px] max-[480px]:mr-[0px] rounded-[5px] text-[14px] font-[600] hover:bg-[#182d3b]  transition ease-in-out delay-150  border-[#2a4651] text-[#fff] border-[1px] flex justify-center items-center'>
                            More Events
                            <span class="material-symbols-outlined animate-pulse text-[#ffdd00]">
                                read_more
                            </span>
                        </NavLink>
                    </div>
                </div>
                <GalleryEventBox images={images} />

            </div>
            <MainFooter />
        </>
    )
}

export default Home
