import React, { useState } from 'react'
import MainHeader from '../partials/MainHeader'
import MainFooter from '../partials/MainFooter'
import Data_Fetch_Api from '../contexts/Data_Fetch_Api';
import { useNavigate } from 'react-router-dom';
import Loader from '../partials/Loader';

function TestPageHome() {
    const [isFullScreen, setFullScreen] = useState(false);
    const navigate = useNavigate();
    const [IsLoadingUser, ErrorUser, data] = Data_Fetch_Api('/users/data');
    if (IsLoadingUser) {
        return <Loader message="Loading.." />

    }
    if (ErrorUser) {
        navigate('/participant/login')
    }
    const enterFullScreen = () => {
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
            document.fullscreenEnabled = true;
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
            document.fullscreenEnabled = true;
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
            document.fullscreenEnabled = true;
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
            document.fullscreenEnabled = true;
        }
    };
    const onHandelClickEvent = () => {
        let conformation = window.confirm(`Are you sure ${data.name} to enter test page`);
        if (conformation) {
            navigate('/technical/events/coding/contest/terms/conditions');
            setFullScreen(!isFullScreen);
            if (!isFullScreen) {
                enterFullScreen();
            } else {

            }
        }
    }

    return (
        <>
            <MainHeader />
            <div className='w-[100%] h-[83.2vh] bg-[#0e1b2f] flex justify-center items-center'>
                <div className=' h-[300px] space-y-4'>
                    <h1 className=' w-[800px] text-center uppercase bg-gradient-to-r from-[#436397] font-[600] to-slate-100 bg-clip-text text-transparent   text-[50px]'>WELCOME BACK <span>{data.name} </span>TEAM </h1>
                    <div className=' w-[100%] flex justify-center items-center'>
                        <button onClick={onHandelClickEvent} className='w-[150px] h-[50px] border-[1px] border-[#152e4e] shadow-inner bg-[#102834] font-[600] text-[14px] text-[#ffffffdb] rounded-[5px]'>Enter Test Page</button>
                    </div>
                </div>
            </div>
            <MainFooter />
        </>
    )
}

export default TestPageHome
