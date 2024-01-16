import React, { useEffect, useState } from 'react'
import Timer from './Timer';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import AnswerWritPageLoader from '../partials/AnswerWritPageLoader';

function McqSolvePage(props) {
    const navigate = useNavigate();
    const [questionData, SetQuestionData] = useState([]);
    const [currentPage, SetCurrentPage] = useState(1);
    const [IsLoadingData, SetIsLoadingData] = useState(false);
    const [Error, SetError] = useState(false);
    const [clickEvent, SetClickEvent] = useState(1);
    const [miniutes, remainingSeconds] = Timer(JSON.parse(localStorage.getItem('timer')) ? JSON.parse(localStorage.getItem('timer')).remainingSeconds : 1800)
    const [Numericalquestion, Setnumerical] = useState([])
    const [IsLoading, SetIsLoading] = useState(false);
    const [data, setdata] = useState([]);
    const [answer, setanswer] = useState('')
    const [totalsubmition, settotalsubmition] = useState(0);
    const Answersheetdata = async () => {
        try {
            SetError(false);
            SetIsLoading(true);
            const res = await fetch('/api/participant/question/answer', {
                method: 'GET'
            })
            const data = await res.json();
            const result = data.filter(((checkAdult) => {
                return checkAdult.username === props.datas.name;

            }));
            settotalsubmition(result)
            SetIsLoading(false);

        } catch (error) {
            SetIsLoading(false);
            SetError(true);
        }

        const Answermarks = () => {

        }
    }
    const mcqquestionsetfun = async () => {
        try {
            SetIsLoading(true);
            SetError(false);
            const res = await fetch('/api/contest/question-mcq', {
                method: 'GET'
            })
            const datas = await res.json();
            setdata(datas);
            Setnumerical(datas[clickEvent - 1])
            // SetQuestionData(datas[currentPage - 1]);
            SetIsLoading(false);
        } catch (error) {
            SetError(true);
            SetIsLoading(false);
        }
    }
    localStorage.setItem("timer", JSON.stringify({ remainingSeconds: (miniutes * 60 + remainingSeconds), name: props.datas.name ,userid:props.datas.userid}))
    useEffect(() => {
        mcqquestionsetfun();
        Answersheetdata();
    }, [])
    // console.log(IsLoading);
    // if (Error) {
    //     return (<>
    //         <div>
    //             <h1 className=' text-center font-[700] text-[26px] w-[500px]'>This time sum technical issue please reload page</h1>
    //         </div>
    //     </>
    //     )
    // }
    if (IsLoading) {
        return <AnswerWritPageLoader message="Loading.." />

    }

    if (miniutes <= 0 && remainingSeconds <= 0) {
        toast.success('Your time is over Quiz Submit');
        const logout = async () => {
            try {
                SetIsLoadingData(true)
                const res = await fetch('/api/logout/', { method: 'GET' })
                if (res.status === 200) {
                    if (props.datas.EventSelectParticipant === "quiz") {
                        navigate('/quiz/participant/login')
                        SetIsLoadingData(false)

                        return;
                    } else if (props.datas.EventSelectParticipant === "coding") {
                        navigate('/coding/participant/login')
                        SetIsLoadingData(false)



                        return;
                    }
                }
            } catch (error) {
                SetIsLoadingData(false)


            }

        }
        logout();
    }

    const clickdata = (indexquestion) => {
        SetClickEvent(indexquestion)

        if (data) {
            data.forEach((element, index) => {
                if (indexquestion === element.questionnumber) {
                    Setnumerical(element);
                }
            })
        }
    }
    const dataSend = (event) => {
        setanswer(event.target.value)
    }
    const formdatasubmit = async (event) => {
        event.preventDefault();
        try {
            SetIsLoadingData(true)
            const res = await fetch('/coding-contest/api/answer/participant', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: props.datas.name, userid: props.datas.userid, questionid: Numericalquestion.questionnumber, correctquestionanswer: Numericalquestion.mcqanswer, questionname: Numericalquestion.questionname, answer: answer, submittime: [miniutes, remainingSeconds] })
            })
            if (res.status === 200) {
                toast.success("Question submited");
                SetIsLoadingData(false)
                Answersheetdata();

            } else if (res.status === 500) {
                toast.success(" technical issue Try after sum time");
                SetIsLoadingData(false)

            } else if (res.status === 400) {
                toast.error("please select the option");
                SetIsLoadingData(false)

            } else if (res.status === 402) {
                toast.error("Already submit");
                SetIsLoadingData(false)

            }
        } catch (error) {
            console.log('Some technical issue');
            SetIsLoadingData(false)

        }

    }
    if (IsLoadingData) {
        return <AnswerWritPageLoader message="Processing.." />

    }
    // const OnClickHandePrevious = () => {
    //     if (currentPage !== 1) {
    //         SetCurrentPage(currentPage - 1);
    //         SetQuestionData(data[currentPage - 1]);
    //         console.log(questionData);
    //     }
    // }
    // const OnClickHandeNext = () => {
    //     if (currentPage !== data.length) {
    //         SetCurrentPage(currentPage + 1);
    //         SetQuestionData(data[currentPage]);
    //     }
    // }
    return (
        <>
            <form id='form' onSubmit={formdatasubmit} className='w-[100%] h-[91vh]  overflow-hidden bg-[#292424]'>
                <div className=' w-[100%]  h-[90%] flex justify-center items-center ' >
                    <div className=' w-[40%] h-[100%]  '>
                        <div className='w-[100%] h-[10%] flex justify-center border-r-[1px] border-[#b8b8b8] bg-[#545151] items-center'>
                            <div className='w-[90%] h-[100%] flex justify-start items-center  cursor-default text-[#fff] gap-2'><h1 className=' text-[25px] font-[700] text-[#7dff4e]'>QUESTION TYPE : </h1> <h1 className='text-[25px] font-[700]'>MCQ</h1>
                            </div>
                        </div>
                        <div className=' w-[100%] border-r-[1px] h-[90%]   text-[#fff] '>
                            <div className=' w-[96%] h-[30%] flex justify-center items-center '>

                                <div className='w-[94%] h-[124.2px] p-[6px] pb-[10px] overflow-hidden bg-[#fff] rounded-[8px]   '>
                                    {
                                        data.map((element, index) => (
                                            <div key={index} onClick={() => { clickdata(index + 1) }} className=' w-[50px] h-[50px] rounded-[50%] bg-[#de1919] text-[#fff] p-[4px] cursor-pointer hover:bg-[#ff4f81] transform ease-in-out delay-200 mt-[6px] mr-[10px] flex justify-center items-center font-[700]  float-left'>{index + 1}</div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className=' w-[96%] h-[70%] overflow-y-auto overflow-x-hidden space-y-4'>

                                <div className='w-[98%] h-[auto] ml-[10px] p-[2px] flex'>
                                    <div className='w-[6%] h-[100%] flex justify-center '>
                                        <h1 className=' text-[18px] cursor-default font-[700]'>{clickEvent}.</h1>
                                    </div>
                                    <div className='w-[94%] h-[auto] flex '>
                                        <h1 className=' text-[16px] font-[600] cursor-default '>
                                            {Numericalquestion.questionname}
                                        </h1>
                                        <span className="material-symbols-outlined font-[500] text-[18px] flex justify-center items-center">
                                            question_mark
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className=' w-[60%] h-[100%] bg-[#0e0e13] '>
                        <div className=' w-[100%] h-[10%] bg-[#545151] flex justify-center items-center'>
                            <div className=' w-[60%] h-[100%] flex justify-end items-center '>
                                <div className=' text-[#fff] w-[250px] h-[26px] flex justify-center items-center  gap-2'>
                                    <span className="material-symbols-outlined  text-[#fff] ">
                                        alarm_on
                                    </span>
                                    <p>{miniutes > 9 ? miniutes : '0' + miniutes} : {remainingSeconds > 9 ? remainingSeconds : '0' + remainingSeconds}  : Remaining times</p>
                                </div>
                                <div className=' ml-[40px] text-[#fff] flex justify-end items-center w-[240px]  h-[auto] gap-1'>
                                    <p className=' text-[18px] font-[700] mr-[2px]'>Total Submition : </p>
                                    <p className=' text-[18px] font-[700] text-[#45ff51]'>{totalsubmition.length}</p>
                                    <p className='text-[18px] font-[700]'>/</p>
                                    <p className=' text-[18px] font-[700] text-[#ffe9fd]'>{data.length}</p>

                                </div>
                            </div>
                        </div>
                        <div className=' w-[100%] h-[90%]  flex justify-center items-center'>
                            <div className='w-[100%] h-[90%] flex justify-center items-center'>
                                <div className=' w-[80%] h-[auto] rounded-[10px] shadow-inner border-[1px] border-[#243152] bg-[#0a131c] p-[10px] pt-[16px] pl-[26px] pb-[26px]'>
                                    {/* <h1 className=' text-[#cecece] w-[98%] h-[auto] text-[18px] font-[700]'>{currentPage}<span className='ml-[10px] text-[16px] font-[600]'>{questionData.questionname}</span><span className="font-[500] text-[17px] material-symbols-outlined">
                                        question_mark
                                    </span></h1> */}
                                    <h1 className=' text-[#cecece] w-[98%] h-[auto] text-[18px] font-[700]'>Options: <span className='ml-[10px] text-[#bababaef] text-[16px] font-[600]'> Pick one correct answer from below</span></h1>
                                    <div className='w-[98%] hover:border-[#ababab] cursor-pointer h-[45px] border-[1px] border-[#192f41] mt-4 rounded-[5px] p-[10px] pl-[20px] flex items-center justify-start gap-2'>
                                        <label htmlFor={`option1`} className=' w-[100%] h-[45px] text-[#cfcfcfef] cursor-pointer flex items-center justify-start gap-2'>
                                            <input type='radio' name='answer' id={`option1`} onClick={dataSend} value={Numericalquestion.option1} required /><p>{Numericalquestion.option1}</p>
                                        </label>
                                    </div>
                                    <div className='w-[98%] cursor-pointer hover:border-[#abababce] h-[45px] border-[1px] border-[#192f41] mt-4 rounded-[5px] p-[10px] pl-[20px] flex items-center justify-start gap-2'>
                                        <label htmlFor={`option2`} className=' w-[100%] h-[45px] text-[#dadadaef] cursor-pointer flex items-center justify-start gap-2'>
                                            <input type='radio' name='answer' id={`option2`} onClick={dataSend} value={Numericalquestion.option2} required /><p>{Numericalquestion.option2}</p>
                                        </label>
                                    </div>
                                    <div className='w-[98%] cursor-pointer hover:border-[#ababab] h-[45px] border-[1px] border-[#192f41] mt-4 rounded-[5px] p-[10px] pl-[20px] flex items-center justify-start gap-2'>
                                        <label htmlFor={`option3`} className=' w-[100%] h-[45px] text-[#dadadaef] cursor-pointer flex items-center justify-start gap-2'>
                                            <input type='radio' name='answer' id={`option3`} onClick={dataSend} value={Numericalquestion.option3} required /><p>{Numericalquestion.option3}</p>
                                        </label>
                                    </div>
                                    <div className='w-[98%] cursor-pointer hover:border-[#ababab] h-[45px] border-[1px] border-[#192f41] mt-4 rounded-[5px] p-[10px] pl-[20px] flex items-center justify-start gap-2'>
                                        <label htmlFor={`option4`} className=' w-[100%] h-[45px] text-[#dadadaef] cursor-pointer flex items-center justify-start gap-2'>
                                            <input type='radio' name='answer' id={`option4`} onClick={dataSend} value={Numericalquestion.option4} required /><p>{Numericalquestion.option4}</p>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' w-[100%] h-[10%] bg-[#777777] flex justify-center items-center'>
                    <div className=' w-[400px] h-[100%] flex justify-center items-center gap-6 '>
                        {/* <span class="material-symbols-outlined   text-[#fffc] cursor-pointer" onClick={OnClickHandePrevious}>
                            arrow_back_ios
                        </span> */}
                        <button type="submit" className=' w-[120px] rounded-[10px] font-[700] border-[1px] border-[#5ea06f] text-[#fff] h-[40px] bg-[#00960d]'>Submit</button>
                        {/* <span class="material-symbols-outlined   text-[#fffc] cursor-pointer" onClick={OnClickHandeNext}>
                            arrow_forward_ios
                        </span> */}
                    </div>
                </div>
            </form >
        </>
    )
}

export default McqSolvePage
