import React from 'react'
import MainHeader from '../partials/MainHeader'
import MainFooter from '../partials/MainFooter'
import Data_Fetch_Api from '../contexts/Data_Fetch_Api'
import Loader from '../partials/Loader';
import { NavLink } from 'react-router-dom';

function ContactsPage() {
    const [IsLoading, Error, data] = Data_Fetch_Api('https://api.github.com/users/vikashkrdeveloper');
    if (IsLoading) {
        return <Loader message="Loading.." />
    }
    if (Error) {
        return <h1>Some Technical issue</h1>
    }
    return (
        <>
            <MainHeader />
            <div className='w-[100%] h-[83.3vh] overflow-auto overflow-x-hidden bg-[#1b263e]'>
                <div className='w-[100%] h-[auto] pb-[20px] p-[10px]'>
                    <h1 className=' text-center pt-[10px] pb-[10px] mt-4 font-[600] text-[#efa720] text-[36px]'>Contact Us</h1>
                    <div className='w-[100%] h-[auto] flex justify-center items-center'>

                        <p className='text-center p-[10px] text-[#ffffffd6] font-[500] w-[700px]'>Explore our location on the map below and drop by to say hello! We're conveniently situated and ready to assist you with any inquiries or guidance you may need.</p>
                    </div>
                    <div className='mt-[20px] w-[100%] h-[auto] gap-4 flex justify-center items-center'>

                        <div className=' w-[50%] h-[auto] flex justify-center items-center'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.1190703924985!2d84.32693107512615!3d26.225320377063557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992ff716c7b37ad%3A0x5737371d64c4aed1!2sGovernment%20Engineering%20College%20(GEC)%2CSiwan!5e0!3m2!1sen!2sin!4v1704661340943!5m2!1sen!2sin" width="700" height="450" style={{ border: "0", borderRadius: '20px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className='w-[45%] border-[1px] border-[#22344b] h-[450px] rounded-[20px] bg-[#0a121e] text-[#fffffff3]'>
                            <div className='w-[100%] h-[50%] flex justify-center items-center'>
                                <div className='w-[25%] h-[100%] rounded-tl-[20px]'></div>
                                <div className='w-[75%] h-[100%] space-y-5 rounded-tr-[20px] pt-[20px] pl-[20px]'>
                                    <h1 className='text-[24px] font-[600]'>Contact Us via <span className='text-[#ffb300]'>Whats'app</span> or <span className='text-[#ffc02c]'>Email Us</span></h1>
                                    <h4 className='font-[500] text-[13px]'>Text Us at <NavLink target='_' to='https://wa.me/+917352514546' className=' ml-1 mr-1 font-[600] text-[#00bbff]'>+917352514546</NavLink> on Whats'app.</h4>
                                    <h4>

                                        <NavLink to='mailto:technoveshgecsiwan' className='text-[13px] font-[600] text-[#00bbff]'>Email Us at technoveshgecsiwan@gmail.com</NavLink>
                                    </h4>
                                    <h4>

                                        <NavLink target='_' to='https://whatsapp.com/channel/0029VaJOMRBCnA7uvuG1z03d' className=' text-[13px] font-[600] text-[#00bbff]'>Click Here to Join Our Whats'app Channel for More Updates.</NavLink>
                                    </h4>

                                </div>
                            </div>
                            <div className='w-[100%] h-[50%] flex justify-center items-center'>
                                <div className='w-[25%] h-[100%] rounded-tl-[20px] flex justify-center items-center p-[10px] '>
                                    <iframe src="https://giphy.com/embed/3ofSB0IwUUJyp5zffa" width="100%" style={{ borderRadius: '5px' }} height="100%" className="giphy-embed" ></iframe>
                                </div>
                                <div className='w-[75%] h-[100%] space-y-4 rounded-tr-[20px] pt-[20px] pl-[20px]'>
                                    <h1 className='text-[24px] font-[600]'>Find Us Here <span className='text-[#ffb300]'>Your Event Destination </span></h1>
                                    <h4>

                                        <NavLink to='https://maps.app.goo.gl/1cUvNN4j2CRn7Q3u9' target='_' className='text-[13px] font-[600] text-[#00bbff]'>Government Engineering College , Siwan</NavLink>
                                    </h4>
                                    <h4 className='font-[500] text-[13px]'>Suta Factory, Bhada Khurd</h4>
                                    <h4 className='font-[500] text-[13px]'>Siwan, Pin -841226. </h4>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-[100%]  h-[50%] flex justify-center  items-center p-[10px] '>

                    <div className=' bg-[#0a121e] rounded-[10px] w-[35%] h-[90%] flex justify-center items-center'>
                        <div className='p-[10px] w-[30%] h-[100%] space-y-6'>
                            <h1 className='font-[] text-[#ffc934f0] font-[600] text-center'>Developed By</h1>
                            <div className='shadow-[0px_0px_16px_0px_#718096] p-[10px]  w-[150px]  h-[150px] flex justify-center items-center bg-slate-50 rounded-[50%] overflow-hidden'>
                                <img className=' w-[96%] h-[96%] scale-125 ' src={data.avatar_url} alt='Loading..' />
                            </div>
                        </div>
                        <div className='w-[64%] h-[100%]  pl-[10px]'>
                            <div className='w-[100%] h-[50%] space-y-2 mt-[40px]  pl-[20px]'>
                                <h1 className=' text-[20px] text-center  font-[600] uppercase text-[#e7f33cec]'>{data.name}</h1>
                                <h3 className=' text-[15px] text-center  font-[600]  text-[#fff]'>Learner</h3>
                                <h3 className=' text-[12px] text-center  font-[500]  text-[#fff]'>Full Stack Developer & Android App Developer</h3>
                                <h3 className=' text-[12px] text-center  font-[500]  text-[#fff]'>CSE With IOT ( 2k22 )</h3>
                            </div>
                            <div className=' w-[100%] h-[30%] gap-2  flex justify-center items-center'>
                                <NavLink to={data.html_url} target=' _ ' className=' w-[46px] h-[46px] border-[1px] border-[#1d3641] hover:bg-[#1d3b5d] transition ease-in-out delay-200  bg-[#111f27] rounded-[50%] flex justify-center items-center'>
                                    <i className="fa-brands  fa-github text-[#fff] text-[24px]"></i>
                                </NavLink>
                                <NavLink to='https://www.linkedin.com/in/vikash-kumar-8467b0253/' target=' _ ' className=' w-[46px] border-[1px] border-[#1d3641] hover:bg-[#1d3b5d] transition ease-in-out delay-200 h-[46px] bg-[#172730] rounded-[50%] flex justify-center items-center'>
                                    <i className="fa-brands fa-linkedin-in text-[#fff] text-[20px]"></i>
                                </NavLink>
                                <NavLink to='https://www.instagram.com/vikashkrdeveloper/' target=' _ ' className=' w-[46px] h-[46px] border-[1px] border-[#1d3641] hover:bg-[#1d3b5d] transition ease-in-out delay-200  bg-[#111f27] rounded-[50%] flex justify-center items-center'>
                                    <i className="fa-brands fa-instagram text-[#fff] text-[20px]"></i>
                                </NavLink>
                                <NavLink to={'https://easylearnvikash.tech'} target=' _ ' className=' w-[46px] h-[46px] border-[1px]  border-[#1d3641] hover:bg-[#1d3b5d] transition ease-in-out delay-200  bg-[#111f27] rounded-[50%] flex justify-center items-center'>
                                    <i className="fa-solid fa-user   text-[#fff] text-[18px]"></i>
                                </NavLink>
                                <NavLink to='mailto:developergecsiwan@gmail.com' className=' w-[46px] h-[46px]  border-[1px] border-[#1d3641] hover:bg-[#1d3b5d] transition ease-in-out delay-200  bg-[#111f27] rounded-[50%] flex justify-center items-center'>
                                    <i className="fa-solid fa-envelope  text-[#fff] text-[20px]"></i>
                                </NavLink>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <MainFooter />
        </>
    )
}

export default ContactsPage
