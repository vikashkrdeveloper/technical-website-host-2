import React from 'react'
import { NavLink } from 'react-router-dom'
import AboutPageBox from './AboutPageBox'
import AboutPageBoxList from './AboutPageBoxList'
import calender from '../images/icons8-calendar.gif'
import AnnualSport from '../images/AnnualSport.jpeg';
function AboutPage() {
    return (
        <>
            <div className='w-[100%] h-[auto] p-[10px] bg-[#0d1526]'>
                <div className='w-[100%] h-[30px] mt-[40px] flex justify-center items-center'><h1 className='text-[#fff] text-[34px] font-[700]'>ABOUT EVENT</h1></div>
                <div className='w-[100%] h-[90px] flex justify-center mb-2 items-center'><h2 className='text-[#fff] text-[28px] font-[500]'>Find Out More About <NavLink to='/' className='text-[36px] text-[#d5337f] cursor-pointer'>Techkriti</NavLink></h2></div>
                <div className='w-[100%] h-[40px] flex justify-center mt-[10px] p-[10px] mb-2 items-end'><p className="text-center font-[500] text-[16px] text-[#fff] w-[650px] space-y-6">It is an inter-college cultural extravaganza to be held in Siwan, Open to boys, girls, and faculty from various colleges.</p></div>
                <div className='w-[100%] h-[700px] flex justify-center items-center gap-8   '>
                    <div className='w-[46%] h-[90%] flex  justify-center items-center  rounded-[40px] p-[10px]'>
                        <img className=' w-[100%] h-[100%] rounded-[40px] hover:scale-105 transition delay-150  ease-in-out' src={AnnualSport} alt='Loading' />
                    </div>
                    <div className='w-[46%] h-[90%] '>
                        <div className=' w-[100%] h-[auto] p-[10px]'>
                            <h1 className=' text-[26px] text-[#fff] font-[600]'>All events are <span className='text-[#ffe343]'>chargeable</span> to cover the expenses and enhance the quality of the fest.</h1>
                        </div>
                        <div className=' w-[100%] h-[auto] p-[10px]'>
                            <p className='text-[#ffffffd0] font-[400] italic text-[15px]'>Conduct intra-college competitions to select representatives for each event, These competitions will serve as qualifiers for participants from different colleges.</p>
                        </div>
                        <AboutPageBox src="https://lottie.host/embed/584324ca-c423-4b42-b928-535681a35e50/Khd1XiyGh3.json" heading="Ticketing" content="Implement an online ticketing system for ease of entry and revenue collection, Offer early bird discounts to encourage early registrations." />
                        <AboutPageBox src="https://lottie.host/embed/584324ca-c423-4b42-b928-535681a35e50/Khd1XiyGh3.json" heading="Prizes and Recognition" content="Acknowledge and reward winners with certificates, trophies, and attractive prizes, Encourage sponsors to provide gifts and vouchers for winners." />
                        <AboutPageBox src="https://lottie.host/embed/584324ca-c423-4b42-b928-535681a35e50/Khd1XiyGh3.json" heading="Participation" content="Invite participation from 38 Government Engineering Colleges and 31 Polytechnic Colleges. Encourage a diverse range of events to cater to different interests and talents." />
                    </div>

                </div>
                <div className='w-[100%] h-[auto] p-[10px] flex justify-center items-center gap-6'>
                    <AboutPageBoxList name="Total Events" count="12" icon={calender} />
                    <AboutPageBoxList name="Colleges" count="38" icon={calender} />
                    <AboutPageBoxList name="Days" count="7" icon={calender} />
                    <AboutPageBoxList name="Hours of Fun" count="124" icon={calender} />
                </div>
            </div>

        </>
    )
}

export default AboutPage
