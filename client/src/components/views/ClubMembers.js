import React from 'react'
import { NavLink } from 'react-router-dom'
import Data_Fetch_Api from '../contexts/Data_Fetch_Api';
import Loader from '../partials/Loader';
import MainHeader from '../partials/MainHeader';
import MainFooter from '../partials/MainFooter';
import ClubMemberBox from '../partials/Partials/ClubMemberBox';

function ClubMembers() {
    const [IsLoading, Error, data] = Data_Fetch_Api('https://api.github.com/users/vikashkrdeveloper');
    if (IsLoading) {
        return <Loader message="Loading.." />
    }
    if (Error) {
        return <h1>Some technical issue</h1>
    }
    return (
        <>
            <MainHeader />
            <div className=' w-[100%] h-[83.2vh]  bg-[#0a1921]'>
                <div className='w-[100%]  h-[120px] pt-[40px] space-y-4 '>
                    <h1 className=' text-[35px] text-center font-[600] text-[#ffffffe4]'>Check our <span className='text-[#fd0]'>Club Members</span></h1>
                </div>
                <div className=' w-[100%] h-[80%]   flex  justify-center overflow-auto'>
                    <div className='w-[80%] h-[auto]  pl-[30px]  overflow-auto pt-[10px] pb-[40px] '>
                        <ClubMemberBox avatar_url={data.avatar_url} html_url={data.html_url} name={data.name} />
                        <ClubMemberBox avatar_url={data.avatar_url} html_url={data.html_url} name={data.name} />
                        <ClubMemberBox avatar_url={data.avatar_url} html_url={data.html_url} name={data.name} />
                        <ClubMemberBox avatar_url={data.avatar_url} html_url={data.html_url} name={data.name} />
                        <ClubMemberBox avatar_url={data.avatar_url} html_url={data.html_url} name={data.name} />
                        <ClubMemberBox avatar_url={data.avatar_url} html_url={data.html_url} name={data.name} />
                        <ClubMemberBox avatar_url={data.avatar_url} html_url={data.html_url} name={data.name} />
                        <ClubMemberBox avatar_url={data.avatar_url} html_url={data.html_url} name={data.name} />
                        <ClubMemberBox avatar_url={data.avatar_url} html_url={data.html_url} name={data.name} />
                    </div>
                </div>
            </div>
            <MainFooter />
        </>
    )
}

export default ClubMembers
