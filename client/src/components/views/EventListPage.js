import React from 'react'
import MainHeader from '../partials/MainHeader'
import MainFooter from '../partials/MainFooter'
import codingContestLogo from '../images/conding.webp';
import BoxClubAll from '../partials/Partials/BoxClubAll';


function EventListPage() {
    return (
        <>
            <MainHeader />
            <div className=' w-[100%] h-[83.3vh] overflow-auto bg-[#0f1627]'>
                <div className='w-[100%] h-[auto] bg-[#14050507] p-[5px]'>
                    <div className='w-[100%]  h-[160px] mt-4 space-y-4 mb-8'>
                        <h1 className=' text-[35px]  text-center font-[600] text-[#ffffffe4]'>Check our <span className='text-[#fd0]'>Events</span></h1>
                        <p className=' text-[14px]  text-center font-[500] text-[#ffffffe0]' >All events are chargeable to cover the expenses and enhance the quality of the fest.</p>
                        <div className='w-[100%] h-[auto] flex justify-center items-center'>
                            <p className=' text-[14px]  text-center font-[500] w-[700px] text-[#ffffffe0]' >As a token of your victory, each winner will be presented with an exclusive and beautifully crafted certificate, recognizing your outstanding achievement. 🏆✨</p>
                        </div>
                    </div>
                    <div className=' w-[100%] h-[85%] flex justify-center items-center p-[30px]'>
                        <div className='w-[100%]  h-[auto] '>
                            <BoxClubAll image_Url={codingContestLogo} eventname="coding" description=" A coder closing their eyes and visualizing their coding goals" />
                            <BoxClubAll image_Url={codingContestLogo} eventname="bgmi" description="Survive. Conquer. Win. Join the Battle" />
                            <BoxClubAll image_Url={codingContestLogo} eventname="logo design" description="Rhyme Rendezvous: Paint Emotions with Words" />
                            <BoxClubAll image_Url={codingContestLogo} eventname="quiz" description="Unleash the passion in the ultimate cricket showdown" />
                            <BoxClubAll image_Url={codingContestLogo} eventname="hackaton" description="Unleash the passion in the ultimate cricket showdown" />
                        </div>
                    </div>
                </div>
            </div>
            <MainFooter />
        </>
    )
}

export default EventListPage
