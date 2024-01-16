import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import HalfLoader from '../HalfLoader';

function Answer_Submit_Show_Admin_Panel() {
    const [getdata, setdata] = useState([]);
    const [getAnswermarks, setAnswermarks] = useState([]);
    const [IsLoading, SetIsLoading] = useState(false);
    const [Error, SetError] = useState(false);
    const Answersheetdata = async () => {
        try {
            SetError(false);
            SetIsLoading(true);
            const res = await fetch('/api/participant/question/answer', {
                method: 'GET'
            })
            const data = await res.json();
            setdata(data);
            SetIsLoading(false);

        } catch (error) {
            SetIsLoading(false);
            SetError(true);
        }

        const Answermarks = () => {

        }
    }

    useEffect(() => {
        Answersheetdata();
    }, [])
    if (Error) {
        return <h1>Something went wrong!!</h1>
    }
    const datadelete = async (id) => {
        try {
            const verify = window.confirm("Are you sure to delete data?");
            if (verify) {
                SetIsLoading(true)
                const res = await fetch(`/api/answer/delete/id/${id}`, { method: 'DELETE' });
                if (res.status === 200) {
                    toast.success('Data Deleted sucessfully');
                    Answersheetdata();
                    SetIsLoading(false)


                } else if (res.status === 403) {
                    SetIsLoading(false)
                    toast.error('Some technical issue please reload the page')

                }
            }
        } catch (error) {
            SetIsLoading(false)
            toast.error('Some technical issue' + error);
        }
    }

    const answercopy = async (element) => {
        navigator.clipboard.writeText(element.answer);
        toast.success('Copy Answer');
    }


    const datasubmit = () => {

    }
    if (IsLoading) {
        return <HalfLoader message="Processing.." />
    }


    return (
        <>

            <div className='w-[100%] h-[80vh] rounded-[4px]  overflow-y-auto overflow-x-hidden space-y-4'>
                {getdata.length === 0 ? (
                    <>
                        <div className='w-[100%] h-[100%]  flex justify-center items-center '>
                            <div className='w-[90%] h-[auto] flex justify-center items-center  text-[#000] rounded-[6px] p-[20px]'>
                                <h1 className='text-[40px] font-[600]'>Answer Not Submited!!</h1>
                            </div>
                        </div>
                    </>
                ) : getdata.map((element, index) => (
                    <div key={index} className='w-[100%] h-[auto]  flex justify-center items-center '>
                        <div className='w-[90%] h-[auto] bg-[#150f15c4] text-[#fff] rounded-[6px] p-[20px]'>
                            <div className='w-[100%] h-[auto] flex justify-end items-center gap-4'>

                                <span className="material-symbols-outlined cursor-pointer text-[#ffffff] font-[500]" onClick={() => { answercopy(element) }} >
                                    content_copy
                                </span>
                                <span className="material-symbols-outlined cursor-pointer text-[#ff5165] font-[500]" onClick={() => { datadelete(element._id) }}>
                                    delete
                                </span>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >Participant Name : </b><p>{element.username}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >Participant Id : </b><p>{element.userid}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2 uppercase '>
                                <b className='text-[#3fff65]' >Question Id : </b><p>{element.questionid}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >Question Name : </b><p>{element.questionname}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >Remaining Times : </b><p>{element.submittime[0]} Miniutes {element.submittime[1]} Second {element.submittime[2]} Milliseconds</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >Correct Answer : </b><p>{element.correctanswer}</p>
                            </div>
                            <div className='w-[100%] h-[auto] flex justify-start items-start gap-2  '>
                                <div className=' w-[80px]'><b className='text-[#3fff65]  uppercase'>Answer : </b></div><div className='w-[700px] h-[auto] p-[10px] bg-[#ffffffb5] text-[#000]  rounded-[5px]'>{element.answer}</div>
                            </div>
                            <div className='w-[100%] h-[45px] flex justify-end items-center'>

                                {
                                    element.answer === element.correctanswer ? (
                                        <div className='gap-[10px] flex justify-center items-center'>
                                            <p className="cursor-pointer text-[#ffffff] font-[500]" >
                                                1.5
                                            </p>
                                            <span className="material-symbols-outlined cursor-pointer text-[30px] text-[#27d038] font-[500]" >
                                                check
                                            </span>

                                        </div>

                                    ) : (
                                        <div className='gap-[10px] flex justify-center items-center'>
                                            <p className="cursor-pointer text-[#ffffff] font-[500]" >
                                                0
                                            </p>
                                            <span className="material-symbols-outlined cursor-pointer text-[30px] text-[#ff4534] font-[500]" >
                                                dangerous
                                            </span>

                                        </div>

                                    )
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Answer_Submit_Show_Admin_Panel
