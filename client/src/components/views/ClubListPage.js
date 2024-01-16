import React from 'react'
import MainHeader from '../partials/MainHeader';
import MainFooter from '../partials/MainFooter';
import BoxClubListPage from '../partials/Partials/BoxClubListPage';

function ClubListPage() {
    return (
        <>
            <MainHeader />
            <div className=' w-[100%] h-[100%] overflow-auto bg-[#0f1627]'>
                <div className='w-[100%] h-[auto] bg-[#14050507] p-[5px]'>

                    <div className='w-[100%]  h-[160px] mt-4 space-y-4 mb-8 max-[480px]:mb-0'>
                        <h1 className=' text-[35px]  text-center font-[600] text-[#ffffffe4] max-[1024px]:text-[30px] max-[800px]:text-[25px] max-[480px]:text-[15px]'>Check our <span className='text-[#fd0]'>Clubs</span></h1>
                        <div className='w-[100%] h-[auto] flex justify-center items-center'>

                            <p className=' text-[14px]  text-center font-[500] text-[#ffffffe0] max-[1024px]:w-[400px]  max-[1024px]:text-[12px] max-[800px]:w-[350px] max-[480px]:text-[10px] max-[480px]:w-[90%]' >All events are chargeable to cover the expenses and enhance the quality of the fest.</p>
                        </div>
                        <div className='w-[100%] h-[auto] flex justify-center items-center'>
                            <p className=' text-[14px]  text-center font-[500] w-[700px] max-[1024px]:text-[12px] max-[1024px]:w-[510px] max-[800px]:w-[400px]  text-[#ffffffe0] pl-[10px] max-[480px]:w-[100%] max-[480px]:text-[10px] pr-[10px]' >As a token of your victory, each winner will be presented with an exclusive and beautifully crafted certificate, recognizing your outstanding achievement. 🏆✨</p>
                        </div>
                    </div>
                    <div className=' w-[100%] h-[85%] flex justify-center items-center '>
                        <div className=' w-[96%] h-[80%] space-y-8  max-[480px]:p-[20px] flex justify-center items-center'>
                            <div className='w-[100%]  h-[auto] max-[1500px]:w-[1100px]  max-[1150px]:w-[720px] max-[800px]:w-[350px] max-[480px]:w-[100%]'>
                                <BoxClubListPage image_Url={"https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2huaWNhbHxlbnwwfHwwfHx8MA%3D%3D"} clubname="technical" clubdescription="Calling all tech enthusiasts, gadget gurus, and coding wizards! The Government Engineering College, Siwan Technical Club is your one-stop shop to explore the fascinating world of technology. Whether you're a seasoned programmer or just starting your tech journey, we have something for everyone." />
                                <BoxClubListPage image_Url={"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2huaWNhbHxlbnwwfHwwfHx8MA%3D%3D"} clubname="sports" clubdescription="Calling all tech enthusiasts, gadget gurus, and coding wizards! The Government Engineering College, Siwan Technical Club is your one-stop shop to explore the fascinating world of technology. Whether you're a seasoned programmer or just starting your tech journey, we have something for everyone." />
                                <BoxClubListPage image_Url={" https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2huaWNhbHxlbnwwfHwwfHx8MA%3D%3D"} clubname="art" clubdescription="Calling all tech enthusiasts, gadget gurus, and coding wizards! The Government Engineering College, Siwan Technical Club is your one-stop shop to explore the fascinating world of technology. Whether you're a seasoned programmer or just starting your tech journey, we have something for everyone." />
                                <BoxClubListPage image_Url={"https://images.unsplash.com/photo-1564038057903-1d48b852b412?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5pY2FsfGVufDB8fDB8fHww"} clubname="literature" clubdescription="Calling all tech enthusiasts, gadget gurus, and coding wizards! The Government Engineering College, Siwan Technical Club is your one-stop shop to explore the fascinating world of technology. Whether you're a seasoned programmer or just starting your tech journey, we have something for everyone." />
                                <BoxClubListPage image_Url={" https://images.unsplash.com/photo-1563770660941-20978e870e26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5pY2FsfGVufDB8fDB8fHww"} clubname="gaming" clubdescription="Calling all tech enthusiasts, gadget gurus, and coding wizards! The Government Engineering College, Siwan Technical Club is your one-stop shop to explore the fascinating world of technology. Whether you're a seasoned programmer or just starting your tech journey, we have something for everyone." />
                                <BoxClubListPage image_Url={" https://images.unsplash.com/photo-1606206873764-fd15e242df52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5pY2FsfGVufDB8fDB8fHww"} clubname="dance" clubdescription="Calling all tech enthusiasts, gadget gurus, and coding wizards! The Government Engineering College, Siwan Technical Club is your one-stop shop to explore the fascinating world of technology. Whether you're a seasoned programmer or just starting your tech journey, we have something for everyone." />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MainFooter />

        </>
    )
}

export default ClubListPage
