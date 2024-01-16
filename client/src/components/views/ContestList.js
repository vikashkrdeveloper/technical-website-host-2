import React from 'react'
import MainHeader from '../partials/MainHeader'
import MainFooter from '../partials/MainFooter'
import ContestListBox from '../partials/Partials/ContestListBox'

function ContestList() {
    if (0) {
        return <>
            <MainHeader />
            <div className='w-[100%] h-[83.3vh] flex justify-center items-center bg-[#0f1627] text-[]'>

                <h1 className=' uppercase text-[50px] font-[700] animate-pulse text-[#ffdd00] max-[480px]:text-[20px] max-[300px]:text-[12px] max-[700px]:text-[30px]'>Coming Soon...</h1>

            </div>
            <MainFooter />

        </>
    }
    return (
        <>
            <MainHeader />
            <div className=' w-[100%] h-[100%] overflow-auto bg-[#0f1627]'>
                <div className='w-[100%] h-[auto] bg-[#14050507] p-[5px]'>
                    <div className='w-[100%]  h-[160px] mt-4 space-y-4 mb-8'>
                        <h1 className=' text-[35px]  text-center font-[600] text-[#ffffffe4]'>Check our <span className='text-[#fd0]'>Contest</span></h1>
                        <p className=' text-[14px]  text-center font-[500] text-[#ffffffe0]' >All events are chargeable to cover the expenses and enhance the quality of the fest.</p>
                        <div className='w-[100%] h-[auto] flex justify-center items-center'>
                            <p className=' text-[14px]  text-center font-[500] w-[700px] text-[#ffffffe0]' >As a token of your victory, each winner will be presented with an exclusive and beautifully crafted certificate, recognizing your outstanding achievement. 🏆✨</p>
                        </div>
                    </div>
                    <div className=' w-[100%] h-[85%] flex justify-center items-center '>
                        <div className=' w-[96%] h-[80%] space-y-8'>
                            <div className='w-[100%]  h-[auto] '>
                                <ContestListBox url="/technical/events/coding/contest/" image_Url={"https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2huaWNhbHxlbnwwfHwwfHx8MA%3D%3D"} contestname="coding" clubdescription="Calling all tech enthusiasts, gadget gurus, and coding wizards! The Government Engineering College, Siwan Technical Club is your one-stop shop to explore the fascinating world of technology. Whether you're a seasoned programmer or just starting your tech journey, we have something for everyone." />
                                <ContestListBox url="/technical/events/quiz/contest/" image_Url={"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2huaWNhbHxlbnwwfHwwfHx8MA%3D%3D"} contestname="quess" clubdescription="Calling all tech enthusiasts, gadget gurus, and coding wizards! The Government Engineering College, Siwan Technical Club is your one-stop shop to explore the fascinating world of technology. Whether you're a seasoned programmer or just starting your tech journey, we have something for everyone." />
                                <ContestListBox image_Url={"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2huaWNhbHxlbnwwfHwwfHx8MA%3D%3D"} contestname="Test" clubdescription="Calling all tech enthusiasts, gadget gurus, and coding wizards! The Government Engineering College, Siwan Technical Club is your one-stop shop to explore the fascinating world of technology. Whether you're a seasoned programmer or just starting your tech journey, we have something for everyone." />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MainFooter />

        </>
    )
}

export default ContestList
