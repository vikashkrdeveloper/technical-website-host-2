import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import HalfLoader from '../HalfLoader';

function Admin_Panel_All_Question_She() {

    const [getdata, setdata] = useState([]);
    const [getdatamcq, setdatamcq] = useState([]);
    const [IsLoader, SetLoader] = useState([]);
    const [Error, SetError] = useState([]);
    const Answersheetdata = async () => {
        try {
            SetLoader(true);
            SetError(false)
            const res = await fetch('/api/contest/question-numerical', {
                method: 'GET'
            })
            const res2 = await fetch('/api/contest/question-mcq', {
                method: 'GET'
            })
            const data = await res.json();
            const data2 = await res2.json();
            setdatamcq(data2);
            setdata(data);
            SetLoader(false);

        } catch (error) {
            toast.error("Some technical issue please Reload the page!!");
            SetLoader(false);
            SetError(true);
        }
    }
    const datadelete = async (id) => {
        try {

            const verify = window.confirm("Are you sure to delete data?");
            if (verify) {
                const res = await fetch(`/api/question/type/numerical/delete/id/${id}`, { method: 'DELETE' });
                if (res.status === 200) {
                    toast.success('Data Deleted sucessfully');
                    Answersheetdata();

                } else if (res.status === 403) {
                    toast.error('Some technical issue please reload the page')

                }
            }
        } catch (error) {
            toast.error('Some technical issue' + error);
        }
    }
    const datadeletemcq = async (id) => {
        try {

            const verify = window.confirm("Are you sure to delete data?");
            if (verify) {
                const res = await fetch(`/api/question/type/mcq/delete/id/${id}`, { method: 'DELETE' });
                if (res.status === 200) {
                    toast.success('Data Deleted sucessfully');
                    Answersheetdata();

                } else if (res.status === 403) {
                    toast.error('Some technical issue please reload the page')

                }
            }
        } catch (error) {
            toast.error('Some technical issue' + error);
        }
    }

    useEffect(() => {
        Answersheetdata();
    }, [])

    if (IsLoader) {
        return <HalfLoader message="Loading.." />
    }
    if (Error) {
        return <h1>Something Went Wrong !!</h1>
    }
    return (
        <>
            <div className='w-[100%] h-[80vh] rounded-[4px]  overflow-auto overflow-x-hidden space-y-6'>
                {getdata.map((element, index) => (
                    <div key={index} className='w-[100%] h-[auto]  flex justify-center items-center '>
                        <div className='w-[90%] h-[auto] bg-[#150f15c4] text-[#fff] space-y-2 rounded-[6px] p-[20px]'>
                            <div className='w-[100%] h-[auto] flex justify-end items-center'>
                                <span className="material-symbols-outlined cursor-pointer text-[#ff5165] font-[500]" onClick={() => { datadelete(element._id) }}>
                                    delete
                                </span>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65] text-[20px]' >Question Number  : </b><p>{element.questionnumber}</p>
                            </div>

                            <div className='w-[100%] h-[auto] flex justify-start items-start gap-2  '>
                                <div className=' w-[180px]'><b className='text-[#3fff65] text-[20px]  uppercase mt-[10px]'>Question Name : </b></div><div className='w-[700px] h-[auto] p-[10px] bg-[#ffffffb5] text-[#000]  rounded-[5px]'>{element.questionname}</div>
                            </div>
                        </div>
                    </div>
                ))}
                {getdatamcq.map((element, index) => (
                    <div key={index} className='w-[100%] h-[auto]  flex justify-center items-center '>
                        <div className='w-[90%] h-[auto] bg-[#150f15c4] text-[#fff] space-y-2 rounded-[6px] p-[20px]'>
                            <div className='w-[100%] h-[auto] flex justify-end items-center'>
                                <span className="material-symbols-outlined cursor-pointer text-[#ff5165] font-[500]" onClick={() => { datadeletemcq(element._id) }}>
                                    delete
                                </span>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65] text-[20px]' >Question Number  : </b><p>{element.questionnumber}</p>
                            </div>

                            <div className='w-[100%] h-[auto] flex justify-start items-start gap-2  '>
                                <div className=' w-[180px]'><b className='text-[#3fff65] text-[20px]  uppercase mt-[10px]'>Question Name : </b></div><div className='w-[700px] h-[auto] p-[10px] bg-[#ffffffb5] text-[#000]  rounded-[5px]'>{element.questionname}</div>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >Option 1 : </b><p>{element.option1}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >Option 2 : </b><p>{element.option2}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >Option 3 : </b><p>{element.option3}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >Option 4 : </b><p>{element.option4}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >Correct Answer : </b><p>{element.mcqanswer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </>
    )
}

export default Admin_Panel_All_Question_She
