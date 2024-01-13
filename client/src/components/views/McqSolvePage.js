import React, { useEffect, useState } from 'react'
import Data_Fetch_Api from '../contexts/Data_Fetch_Api'
import AnswerWritPageLoader from '../partials/AnswerWritPageLoader';

function McqSolvePage() {
    const [questionData, SetQuestionData] = useState([]);
    const [currentPage, SetCurrentPage] = useState(1);
    const [Error, SetError] = useState(false);
    const [IsLoading, SetIsLoading] = useState(false);
    const [data, setdata] = useState([]);
    const mcqquestionsetfun = async () => {
        try {
            SetIsLoading(true);
            SetError(false);
            const res = await fetch('/api/contest/question-mcq', {
                method: 'GET'
            })
            const datas = await res.json();
            if (currentPage === 1) {
                // SetQuestionData(datas[0]);
            }
            setdata(datas);
            SetIsLoading(false);
        } catch (error) {
            SetError(true);
            SetIsLoading(false);
        }
    }
    useEffect(() => {
        mcqquestionsetfun();
    })
    // console.log(IsLoading);
    if (Error) {
        return (<>
            <div>
                <h1 className=' text-center font-[700] text-[26px] w-[500px]'>This time sum technical issue please reload page</h1>
            </div>
        </>
        )
    }
    if (IsLoading) {
        // return <AnswerWritPageLoader message="Loading.." />
    }
    const OnClickHandePrevious = () => {
        if (currentPage !== 1) {
            SetCurrentPage(currentPage - 1);
            SetQuestionData(data[currentPage - 1]);
            console.log(questionData);
        }
    }
    const OnClickHandeNext = () => {
        if (currentPage !== data.length) {
            SetCurrentPage(currentPage + 1);
            SetQuestionData(data[currentPage]);
        }
    }
    return (
        <>
            <div className='w-[100%] text-[#fffc] h-[100%] bg-[#090e16] flex justify-end items-center'>
                <div className='w-[96%]  h-[100%]  pt-[20px] pb-[20px] '>
                    <div className='w-[100%] h-[90%] flex justify-center items-center'>
                        <div className=' w-[80%] h-[auto] rounded-[10px] shadow-inner border-[1px] border-[#243152] bg-[#0a131c] p-[10px] pt-[16px] pl-[26px] pb-[26px]'>
                            <h1 className=' text-[#cecece] w-[98%] h-[auto] text-[18px] font-[700]'>{currentPage}<span className='ml-[10px] text-[16px] font-[600]'>{questionData.questionname}</span><span className="font-[500] text-[17px] material-symbols-outlined">
                                question_mark
                            </span></h1>
                            <div className='w-[98%] hover:border-[#ababab] cursor-pointer h-[45px] border-[1px] border-[#192f41] mt-4 rounded-[5px] p-[10px] pl-[20px] flex items-center justify-start gap-2'>
                                <label htmlFor={`option1`} className=' w-[100%] h-[45px] cursor-pointer flex items-center justify-start gap-2'>
                                    <input type='radio' name='answer' id={`option1`} /><p>{questionData.option1}</p>
                                </label>
                            </div>
                            <div className='w-[98%] cursor-pointer hover:border-[#abababce] h-[45px] border-[1px] border-[#192f41] mt-4 rounded-[5px] p-[10px] pl-[20px] flex items-center justify-start gap-2'>
                                <label htmlFor={`option2`} className=' w-[100%] h-[45px] cursor-pointer flex items-center justify-start gap-2'>
                                    <input type='radio' name='answer' id={`option2`} /><p>{questionData.option2}</p>
                                </label>
                            </div>
                            <div className='w-[98%] cursor-pointer hover:border-[#ababab] h-[45px] border-[1px] border-[#192f41] mt-4 rounded-[5px] p-[10px] pl-[20px] flex items-center justify-start gap-2'>
                                <label htmlFor={`option3`} className=' w-[100%] h-[45px] cursor-pointer flex items-center justify-start gap-2'>
                                    <input type='radio' name='answer' id={`option3`} /><p>{questionData.option3}</p>
                                </label>
                            </div>
                            <div className='w-[98%] cursor-pointer hover:border-[#ababab] h-[45px] border-[1px] border-[#192f41] mt-4 rounded-[5px] p-[10px] pl-[20px] flex items-center justify-start gap-2'>
                                <label htmlFor={`option4`} className=' w-[100%] h-[45px] cursor-pointer flex items-center justify-start gap-2'>
                                    <input type='radio' name='answer' id={`option4`} /><p>{questionData.option4}</p>
                                </label>
                            </div>


                        </div>
                    </div>
                    <div className='w-[100%] h-[60px] flex justify-center items-center gap-6'>

                        <span class="material-symbols-outlined cursor-pointer" onClick={OnClickHandePrevious}>
                            arrow_back_ios
                        </span>
                        <button className='text-[13px] border-[1px] border-[#1a2640e7] font-[700] w-[100px] h-[40px] rounded-[5px] bg-[#122739ae]'> Submit</button>
                        <span class="material-symbols-outlined cursor-pointer" onClick={OnClickHandeNext}>
                            arrow_forward_ios
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default McqSolvePage
