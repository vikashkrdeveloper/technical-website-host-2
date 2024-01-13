import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import HalfLoader from '../HalfLoader';
import * as XLSX from 'xlsx';

function Team_List_Total() {
    const [getdata, setdata] = useState([]);
    const [IsLoading, SetIsLoading] = useState(false);
    const [Error, SetError] = useState(false);
    const totalteamlist = async () => {
        try {
            SetIsLoading(true);
            SetError(false);
            const res = await fetch('/api/total-teams/members/', {
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
                const res = await fetch(`/api/total/participant/delete/id/${id}`, { method: 'DELETE' });
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
        XLSX.writeFile(wb, 'Total_Team_List.xlsx');
    };
    return (
        <>
            <div className=' w-[100%] h-[30px] flex justify-center items-center gap-10 '>
                <h1 className=' text-[30px] text-[#1c1b2a] font-[700] uppercase'>Total Team List</h1>
                <button className='w-[150px] h-[40px] border-[1px] border-[#29445c]  bg-[#1f4c59] rounded-[5px] shadow-inner text-[#fff]' onClick={exportToExcel}>Export Excel</button>
            </div>
            <div className='w-[100%] h-[72vh] rounded-[4px]  overflow-y-auto overflow-x-hidden space-y-6'>
                {getdata.map((element, index) => (
                    <div key={index} className='w-[100%] h-[auto]  flex justify-center items-center '>
                        <div className='w-[90%] h-[auto] bg-[#150f15c4] text-[#fff] space-y-2 rounded-[6px] p-[20px]'>
                            <div className='w-[100%] h-[auto] flex justify-end items-center'>
                                <span className="material-symbols-outlined cursor-pointer text-[#ff5165] font-[500]" onClick={() => { datadelete(element._id) }}>
                                    delete
                                </span>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65] text-[20px]' > Team Name  : </b><p>{element.teamname}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65] text-[20px]' >Participant Id  : </b><p>{element.participant}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >Email Id : </b><p>{element.email}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >Registration Number </b><p>{element.registration}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >Team Leader Name </b><p>{element.teamleadername}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >Member 1 </b><p>{element.member1}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >Member 2 </b><p>{element.member2}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >Member 3 </b><p>{element.member3}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Team_List_Total
