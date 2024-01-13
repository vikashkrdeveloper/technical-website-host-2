import React, { useEffect, useState } from 'react'
import Header from '../partials/Header'
import CodeEditor from './codeEditor';
import { toast } from 'react-toastify';
import AddAndDelete from '../partials/Partials/Popup/Delete_Popup'
import Data_Fetch_Api from '../contexts/Data_Fetch_Api';
import Loader from '../partials/Loader';
import { useNavigate } from 'react-router-dom';
import Timer from './Timer';
import McqSolvePage from './McqSolvePage';
function CodingIde() {
    const navigate = useNavigate();
    const [getquestiontype, setquestiontype] = useState({ questiontype: 'NUMERICAL' });
    const [numericalquestion, setnumericalquestion] = useState([]);
    const [miniutes, remainingSeconds] = Timer(1800)

    document.title = "Coding contests Government Engineering College, Siwan";

    const [IsLoading, Error, Allquestion] = Data_Fetch_Api('/api/contest/question-numerical');
    const [IsLoadingUser, ErrorUser, data] = Data_Fetch_Api('/users/data');
    const [IsLoadingAttempt, setIsLoading] = useState(false);
    const [AttemptErrorUser, SetAttemptuserError] = useState(false);
    const [Attemptdata, SetAttemptdata] = useState([]);
    const [IsLoadingRequest, setIsLoadingRequest] = useState(false);
    const localstoragedata = JSON.parse(localStorage.getItem("Event"));
    const [getdata, setdata] = useState({ codewrite: '' })
    const AttemptdataShow = async (userid) => {
        try {
            SetAttemptuserError(false);
            setIsLoading(true);
            const res = await fetch(`/api/participant/question/answer/total/userid/${userid}`)
            const data = await res.json();
            SetAttemptdata(data);
            setIsLoading(false);

        } catch (error) {

            setIsLoading(false);
            SetAttemptuserError(true);
        }

    }
    const [isFullScreen, setFullScreen] = useState(false);
    // const FullScreen = () => {
    //     setFullScreen(!isFullScreen);
    //     if (!isFullScreen) {
    //         enterFullScreen();
    //     } else {
    //     }
    // };
    // const enterFullScreen = () => {
    //     const element = document.documentElement;
    //     if (element.requestFullscreen) {
    //         element.requestFullscreen();
    //     } else if (element.mozRequestFullScreen) {
    //         element.mozRequestFullScreen();
    //     } else if (element.webkitRequestFullscreen) {
    //         element.webkitRequestFullscreen();
    //     } else if (element.msRequestFullscreen) {
    //         element.msRequestFullscreen();
    //     }
    // };






    const formdatasubmit = async (event) => {
        const { name, userid } = data;
        event.preventDefault();
        try {

            setIsLoadingRequest(true)
            if (getdata.codewrite === '' || getdata.codewrite === ' ' || getdata.codewrite === '_' || getdata.codewrite === '\n') {
                toast.error('Please fill the answer then submit the answer!!');
                setIsLoadingRequest(false)

            } else {
                setIsLoadingRequest(true)
                const time = [
                    miniutes,
                    remainingSeconds,

                ]
                const res = await fetch('/coding-contest/api/answer/participant', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username: name, userid, questionid: numericalquestion.questionnumber, questionname: numericalquestion.questionname, answer: getdata.codewrite, submittime: time })
                })
                if (res.status === 200) {
                    toast.success("Done");
                    AttemptdataShow(userid);
                    setIsLoadingRequest(false)
                } else if (res.status === 500) {
                    toast.error('Please Select your question !!')
                    setIsLoadingRequest(false)
                } else if (res.status === 402) {
                    toast.error(`Question number ${numericalquestion.questionnumber} already submit please submit next answer!!`)
                    setIsLoadingRequest(false)
                } else if (res.status === 403) {
                    toast.error('Internal server error please reload the page!!')
                    setIsLoadingRequest(false)

                }
            }
        } catch (error) {
            setIsLoadingRequest(false)
        }
    }
    const clickdata = (indexquestion) => {
        if (localstoragedata) {
            if (localstoragedata[indexquestion - 1] !== null) {
                localstoragedata.forEach((element, index) => {
                    if (index === indexquestion - 1) {
                        setdata({ codewrite: element.code });
                        return;
                    } else {
                        setdata({ codewrite: '' });
                        return;

                    }

                })
            } else {
                setdata({ codewrite: '' });
            }
        }
        if (Allquestion) {
            Allquestion.forEach((element, index) => {
                if (indexquestion === element.questionnumber) {
                    setnumericalquestion(element);
                }
            })
        }
    }

    useEffect(() => {
        AttemptdataShow(data.userid);
        clickdata(0);
    }, [])
    if (IsLoading || IsLoadingUser || IsLoadingAttempt) {
        return <Loader message="Loading.." />
    }
    if (IsLoadingRequest) {
        return <Loader message="Processing.." />
    }
    if (Error || ErrorUser || AttemptErrorUser) {
        navigate('/participant/login')
    }
    if (miniutes === 0 && remainingSeconds === 0) {
        toast.success('Time Out Test End!!');
        navigate('/')
    }
    const datachangequestiontype = () => {
        const questiontypes = document.querySelector('#questiontype').value;
        setquestiontype({ questiontype: questiontypes });
        console.log(getquestiontype.questiontype);
    }
    return (
        <>
            <Header verify={ErrorUser} datas={data} />
            <AddAndDelete />
            <form onSubmit={formdatasubmit} id='form' className='w-[100%] h-[91.6vh] absolute  bg-[#292424]'>
                <div className=' w-[100%]  h-[90%] ' >
                    <div className='w-[100%] h-[60px] bg-slate-300 flex justify-center items-center '>
                        <div className='w-[40%] h-[100%] flex justify-center border-r-[1px] border-[#b8b8b8] bg-[#545151] items-center'>
                            <div className='w-[90%] h-[100%] flex justify-start items-center  cursor-default text-[#fff] gap-2'><h1 className=' text-[25px] font-[700] text-[#7dff4e]'>QUESTION TYPE : </h1>
                                <select id='questiontype' name='questiontype' onChange={datachangequestiontype} className=' w-[200px] h-[36px] pl-[15px] pr-[4px] rounded-[3px] outline-none border bg-none text-[#000]'>
                                    <option value='NUMERICAL'>NUMERICAL</option>
                                    <option value='MCQ'>MCQ</option>
                                </select>
                            </div>
                        </div>
                        <div className=' w-[60%] h-[100%] bg-[#545151] flex justify-center items-center'>
                            <div className=' w-[60%] h-[100%] flex justify-end items-center '>
                                <div className=' text-[#fff] w-[250px] h-[26px] flex justify-center items-center  gap-2'>
                                    <span className="material-symbols-outlined  text-[#fff] ">
                                        alarm_on
                                    </span>
                                    <p>{miniutes > 9 ? miniutes : '0' + miniutes} : {remainingSeconds > 9 ? remainingSeconds : '0' + remainingSeconds}  : Remaining times</p>
                                </div>
                                <div className=' ml-[40px] text-[#fff] flex justify-end items-center w-[240px]  h-[auto] gap-1'>
                                    <p className=' text-[18px] font-[700] mr-[2px]'>Total Submition : </p>
                                    <p className=' text-[18px] font-[700] text-[#45ff51]'>{Attemptdata.length}</p>
                                    <p className='text-[18px] font-[700]'>/</p>
                                    <p className=' text-[18px] font-[700] text-[#ffe9fd]'>{Allquestion.length}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        getquestiontype.questiontype === 'NUMERICAL' ? (

                            <div className='w-[100%] h-[100%] flex  justify-center items-start'>
                                <div className=' w-[40%] h-[100%]  '>
                                    <div className=' w-[100%] border-r-[1px] h-[101%]   text-[#fff] '>
                                        <div className=' w-[96%] h-[30%] flex justify-center items-center '>

                                            <div className='w-[94%] h-[124px] p-[6px] pb-[10px] overflow-hidden bg-[#fff] rounded-[8px]   '>
                                                {
                                                    Allquestion.map((element, index) => (
                                                        <div key={index} onClick={() => { clickdata(index + 1) }} className=' w-[50px] h-[50px] rounded-[50%] bg-[#de1919] text-[#fff] p-[4px] cursor-pointer hover:bg-[#ff4f81] transform ease-in-out delay-200 mt-[6px] mr-[10px] flex justify-center items-center font-[700]  float-left'>{index + 1}</div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className=' w-[96%] h-[70%] pb-[20px] overflow-y-auto overflow-x-hidden space-y-4'>
                                            {
                                                Allquestion.map((element, index) => (
                                                    <div key={index} className='w-[98%] h-[auto] ml-[10px] p-[2px] flex'>
                                                        <div className='w-[6%] h-[100%] flex justify-center '>
                                                            <h1 className=' text-[18px] cursor-default font-[700]'>{index + 1}.</h1>
                                                        </div>
                                                        <div className='w-[94%] h-[auto] flex '>
                                                            <h1 onClick={() => { clickdata(index + 1) }} className=' text-[16px] font-[600] cursor-pointer '>
                                                                {element.questionname}
                                                            </h1>
                                                            <span className="material-symbols-outlined font-[500] text-[18px] flex justify-center items-center">
                                                                question_mark
                                                            </span>
                                                        </div>
                                                    </div>
                                                )

                                                )
                                            }
                                        </div>
                                    </div>

                                </div>
                                <div className=' w-[60%] h-[101%] bg-[#0e0e13] '>

                                    <div className=' w-[100%] text-[#fff]  h-[90%] flex justify-center items-center'>

                                        <CodeEditor userdata={data} QuestionData={numericalquestion} code={getdata.codewrite} onChanges={setdata} data={getdata} />

                                    </div>
                                    <div className=' w-[100%] h-[10%]  z-50 bg-[#777777] flex justify-center items-center'>
                                        <div className=' w-[400px] h-[100%] flex justify-center items-center gap-6 '>

                                            <button type="submit" className=' w-[120px] rounded-[10px] font-[700] border-[1px] border-[#5ea06f] text-[#fff] h-[40px] bg-[#00960d]'>Submit</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <McqSolvePage />

                        )
                    }
                </div>

            </form>
        </>
    )

}

export default CodingIde




