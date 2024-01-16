import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import HalfLoader from '../HalfLoader';
import * as XLSX from 'xlsx';
function Admin_Panel_QuizRegister_Data() {
    const [getdata, setdata] = useState([]);
    const [IsLoading, SetIsLoading] = useState(false);
    const [Error, SetError] = useState(false);
    const totalteamlist = async () => {
        try {
            SetIsLoading(true);
            SetError(false);
            const res = await fetch('/api/participant/quiz/register/data', {
                method: 'GET'
            })
            const data = await res.json();
            setdata(data);
            SetIsLoading(false);

        } catch (error) {
            SetIsLoading(false);
            SetError(true);
        }
    }
    const datadelete = async (id) => {
        try {

            const verify = window.confirm("Are you sure to delete data?");
            if (verify) {
                const res = await fetch(`/api/quiz/participant/delete/id/${id}`, { method: 'DELETE' });
                if (res.status === 200) {
                    toast.success('Data Deleted sucessfully');
                    totalteamlist();

                } else if (res.status === 403) {
                    toast.error('Some technical issue please reload the page')

                }
            }
        } catch (error) {
            toast.error('Some technical issue' + error);
        }
    }
    useEffect(() => {
        totalteamlist();
    }, [])
    if (IsLoading) {
        return <HalfLoader message="Loading.." />
    }
    if (Error) {
        <h1>Something went wrong!!</h1>
    }
    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(getdata);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, 'Total_Participant_List.xlsx');
    };
    const datacopy = async (element) => {
        const { name, emailid, mobilenumber, branch, AdmissionYear, EventSelectParticipant } = element
        navigator.clipboard.writeText(name + " " + emailid + " " + mobilenumber + "  " + branch + " " + AdmissionYear + " " + EventSelectParticipant);
        toast.success('Copy Answer');
    }

    return (
        <>
            <div className=' w-[100%] h-[30px] flex justify-center items-center gap-10'>
                <h1 className=' text-[30px] text-[#1c1b2a] font-[700] uppercase'>Quiz Participant Member</h1>
                <button className='w-[150px] h-[40px] border-[1px] border-[#29445c]  bg-[#1f4c59] rounded-[5px] shadow-inner text-[#fff]' onClick={exportToExcel}>Export Excel</button>

            </div>
            <div className='w-[100%] h-[72vh] rounded-[4px] bg-[#150f15c4] overflow-y-auto overflow-x-hidden '>
                <div className='w-[100%] h-[100%]    '>
                    {getdata.length === 0 ? (
                        <>
                            <div className='w-[100%] h-[100%]  flex justify-center items-center '>
                                <div className='w-[90%] h-[auto] flex justify-center items-center  text-[#000] rounded-[6px] p-[20px]'>
                                    <h1 className='text-[40px] font-[600] text-[#fff]'>No Participant!!</h1>
                                </div>
                            </div>
                        </>
                    ) : getdata.map((element, index) => (

                        <div key={index} className='w-[90%] h-[auto]   text-[#fff] rounded-[6px] p-[20px]'>
                            <div className='w-[100%] h-[auto] flex justify-end items-center gap-4'>
                                <span className="material-symbols-outlined cursor-pointer text-[#ffffff] font-[500]" onClick={() => { datacopy(element) }} >
                                    content_copy
                                </span>
                                <span className="material-symbols-outlined cursor-pointer text-[#ff5165] font-[500]" onClick={() => { datadelete(element._id) }}>
                                    delete
                                </span>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' > Name {index + 1}  : </b><p>{element.participantName === '' ? 'No participant' : element.participantName}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >Email Id {index + 1}  : </b><p>{element.emailid === '' ? 'No participant' : element.emailid}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >MobileNumber {index + 1}: </b><p>{element.mobilenumber}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >Registration Number {index + 1}: </b><p>{element.registration_number}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >Department {index + 1} : </b><p>{element.branch}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >AdmissionYear {index + 1} : </b><p>{element.AdmissionYear}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >EventSelectParticipant {index + 1} : </b><p>{element.EventName}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Admin_Panel_QuizRegister_Data
