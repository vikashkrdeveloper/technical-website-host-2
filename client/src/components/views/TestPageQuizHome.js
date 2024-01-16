import React, { useEffect, useState } from 'react'
import MainHeader from '../partials/MainHeader'
import MainFooter from '../partials/MainFooter'
import { useNavigate } from 'react-router-dom';
import Loader from '../partials/Loader';

function TestPageQuizHome() {
    const [isFullScreen, setFullScreen] = useState(false);
    const [base64String, setbase64string] = useState('');
    const [ErrorUser, SetErrorUser] = useState(false);
    const [IsLoadingUser, SetIsLoadingUser] = useState(false);
    const [data, setdata] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        Datafetch();
    }, [])
    const Datafetch = async () => {
        try {
            SetIsLoadingUser(true);
            SetErrorUser(false);
            const res = await fetch('/participant/quiz/auth/data', {
                method: 'GET',
            })
            if (res.status === 200) {
                const datas = await res.json();
                setdata(datas);
                if (datas.bufferData) {
                    let arrayBuffer = datas.bufferData.data
                    const base64Strings = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
                    setbase64string(base64Strings);
                }
                SetIsLoadingUser(false)
            } else if (res.status === 403) {
                navigate('/quiz/participant/login')
            }
        } catch (error) {
            SetErrorUser(true);
            SetIsLoadingUser(false)
        }

    }

    if (IsLoadingUser) {
        return <Loader message="Loading.." />

    }
    if (ErrorUser) {
        navigate('/quiz/participant/login')
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
            navigate('/technical/events/quiz/contest/terms/conditions');
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
                <div className=' h-[auto] space-y-4'>
                    <div className='w-[100%] h-[150px] p-[10px] flex justify-center items-center'>
                        <div className='w-[130px] h-[100%] rounded-[5px] border-[1px] border-[#315b66] flex justify-center items-center'>
                            <img className='w-[100%] h-[100%]  rounded-[5px]' src={`data:image/png;base64,${base64String}`} alt="Loading.." />
                        </div>
                    </div>
                    <h1 className=' w-[700px] text-center uppercase bg-gradient-to-r italic animate-pulse from-[#436397] font-[600] to-slate-100 bg-clip-text text-transparent   text-[50px] max-[800px]:text-[25px] max-[580px]:text-[20px] max-[480px]:text-[15px] max-[330px]:text-[10px]'>WELCOME BACK <span>{data.name} </span></h1>
                    <div className=' w-[100%] flex justify-center items-center'>
                        <button onClick={onHandelClickEvent} className='w-[150px] h-[50px] border-[1px] border-[#152e4e] shadow-inner bg-[#102834] font-[600] text-[14px] text-[#ffffffdb] rounded-[5px] max-[800px]:w-[120px] max-[800px]:text-[11px] max-[800px]:h-[40px] max-[480px]:text-[10px] max-[480px]:w-[100px]'>Enter Test Page</button>
                    </div>
                </div>
            </div>
            <MainFooter />
        </>
    )
}

export default TestPageQuizHome
