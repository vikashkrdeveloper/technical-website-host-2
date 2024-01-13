import React from 'react'
import { NavLink } from 'react-router-dom'
function MainFooter() {
    return (
        <>
            <footer className=' w-[100%] z-50 cursor-default h-[60px] border-t-[1px] border-[#162237] max-[1024px]:block    max-[1024px]:h-[auto] flex justify-center items-center bg-[#0c0f1e] text-[#fff]'>
                <div className=' w-[76%] max-[1024px]:w-[100%] h-[100%] max-[1024px]:block max-[1024px]:space-y-3 flex items-center'>
                    <div className=' w-[30%] h-[100%] max-[1024px]:hidden flex justify-center items-center'>
                        <span className=' text-[14px] font-[600] flex justify-start  items-center gap-2'>Copy right &#169; ITC, <NavLink to='https://www.gecsiwan.org/' className=' hover:text-[#83b1b4] transition ease-in-out delay-200 text-[#c03e69]' target=' ' >Gec Siwan</NavLink></span>
                    </div>
                    <div className='w-[30%] max-[1024px]:w-[100%] max-[480px]:gap-3 mt-4 max-[1024px]:justify-center h-[100%] max-[1024px]:flex hidden justify-end items-center gap-4 '>
                        <NavLink to='mailto:developer@vikash.com' className='w-[15px]  flex justify-center items-center '>
                            <span className="fa-solid fa-envelope transition ease-in-out max-[480px]:text-[14px] delay-150 hover:text-[#ff4f49]"></span>
                        </NavLink>
                        <NavLink className='w-[15px]  flex justify-center items-center ' to='tel:1234567891'>
                            <span className="fa-solid fa-phone transition ease-in-out   max-[480px]:text-[14px]delay-150 hover:text-[#ff4f49]"></span>
                        </NavLink>
                        <NavLink className='w-[15px] flex justify-center items-center '>
                            <span className="fa-brands fa-facebook-f transition ease-in-out max-[480px]:text-[14px]  delay-150 hover:text-[#ff4f49]"></span>
                        </NavLink>
                        <NavLink className='w-[15px] flex justify-center items-center '>
                            <span className="fa-brands fa-instagram transition ease-in-out max-[480px]:text-[14px] delay-150 hover:text-[#ff4f49]"  ></span>
                        </NavLink>
                        <NavLink className='w-[15px] flex justify-center items-center '>
                            <span className="fa-brands fa-twitter transition ease-in-out max-[480px]:text-[14px]  delay-150 hover:text-[#ff4f49]"></span>
                        </NavLink>
                    </div>
                    <div className=' w-[40%] max-[1024px]:w-[100%]  h-[100%] flex justify-center   items-center'>
                        <div className=' text-[13px] font-[500] flex justify-start max-[480px]:text-[10px]  items-center gap-1'>Developed By <NavLink to='https://www.linkedin.com/in/vikash-kumar-8467b0253/' style={{ fontFamily: "'Cedarville Cursive', cursive" }} className=' hover:text-[#82e6ee] text-[16px] font-[400]  text-[#ff6c6c] transition ease-in-out delay-200' target=' '> @VikashKumar</NavLink></div>
                    </div>
                    <div className=' w-[30%] max-[1024px]:w-[100%] max-[480px]:gap-0 h-[100%] max-[1024px]:flex hidden  justify-center items-center'>
                        <span className=' text-[13px] font-[600]  max-[480px]:text-[11px] flex justify-start  items-center gap-2 mb-4'>Copy right &#169; ITC, <NavLink to='https://www.gecsiwan.org/' className=' hover:text-[#83b1b4] transition ease-in-out delay-200 text-[#c03e69]' target=' ' >Gec Siwan</NavLink>All rights reserved</span>
                    </div>
                    <div className='w-[30%] h-[100%] max-[1024px]:hidden flex justify-end items-center gap-4'>
                        <NavLink to='mailto:developer@vikash.com' className='w-[15px]  flex justify-center items-center '>
                            <span className="fa-solid fa-envelope transition ease-in-out  delay-150 hover:text-[#ff4f49]"></span>
                        </NavLink>
                        <NavLink className='w-[15px]  flex justify-center items-center ' to='tel:1234567891'>
                            <span className="fa-solid fa-phone transition ease-in-out  delay-150 hover:text-[#ff4f49]"></span>
                        </NavLink>
                        <NavLink className='w-[15px] flex justify-center items-center '>
                            <span className="fa-brands fa-facebook-f transition ease-in-out  delay-150 hover:text-[#ff4f49]"></span>
                        </NavLink>
                        <NavLink className='w-[15px] flex justify-center items-center '>
                            <span className="fa-brands fa-instagram transition ease-in-out  delay-150 hover:text-[#ff4f49]"  ></span>
                        </NavLink>
                        <NavLink className='w-[15px] flex justify-center items-center '>
                            <span className="fa-brands fa-twitter transition ease-in-out  delay-150 hover:text-[#ff4f49]"></span>
                        </NavLink>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default MainFooter
