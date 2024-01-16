import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import HalfLoader from '../HalfLoader';
import * as XLSX from 'xlsx';
function Adimin_Panel_Hackathon_Team_Register() {
    const [getdata, setdata] = useState([]);
    const [IsLoading, SetIsLoading] = useState(false);
    const [Error, SetError] = useState(false);
    const totalteamlist = async () => {
        try {
            SetIsLoading(true);
            SetError(false);
            const res = await fetch('/api/team/hackathon/register/data', {
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
        XLSX.writeFile(wb, 'Total_Participant_List.xlsx');
    };
    const datacopy = async (element) => {
        const { teamName, teamLeaderName, teamLeaderMobilenumber, teamLeaderRegistrationNumber, teamLeaderEmailId, nameMember1, registrationnumberMember1, registrationnumberMember2, nameMember3, inputsectionmemberleader, inputsectionmember1, inputsectionmember2, inputsectionmember3, registrationnumberMember3, selectparticipant } = element
        navigator.clipboard.writeText(teamName + "  " + teamLeaderName + "  " + teamLeaderMobilenumber + "  " + teamLeaderRegistrationNumber + "  " + teamLeaderEmailId + "  " + nameMember1 + "  " + registrationnumberMember1 + "  " + registrationnumberMember2 + "  " + nameMember3 + "  " + inputsectionmemberleader + "  " + inputsectionmember1 + "  " + inputsectionmember2 + "  " + inputsectionmember3 + "  " + registrationnumberMember3 + "  " + selectparticipant);
        toast.success('Copy Answer');
    }

    return (
        <>
            <div className=' w-[100%] h-[30px] flex justify-center items-center gap-10'>
                <h1 className=' text-[30px] text-[#1c1b2a] font-[700] uppercase'>Team Register</h1>
                <button className='w-[150px] h-[40px] border-[1px] border-[#29445c]  bg-[#1f4c59] rounded-[5px] shadow-inner text-[#fff]' onClick={exportToExcel}>Export Excel</button>

            </div>
            <div className='w-[100%] h-[72vh] rounded-[4px] bg-[#150f15c4] overflow-y-auto overflow-x-hidden '>
                <div className='w-[100%] h-[100%]    '>
                    {getdata.length === 0 ? (
                        <>
                            <div className='w-[100%] h-[100%]  flex justify-center items-center '>
                                <div className='w-[90%] h-[auto] flex justify-center items-center  text-[#000] rounded-[6px] p-[20px]'>
                                    <h1 className='text-[40px] font-[600] text-[#fff]'>No Team  Register!!</h1>
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
                                <b className='text-[#3fff65]' > Team Name {index + 1}  : </b><p>{element.teamName === '' ? 'No participant' : element.teamName}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >team Leader Name {index + 1}  : </b><p>{element.teamLeaderName === '' ? 'No participant' : element.teamLeaderName}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >team Leader  Mobile number {index + 1}: </b><p>{element.teamLeaderMobilenumber}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >team Leader Registration Number {index + 1} : </b><p>{element.teamLeaderRegistrationNumber}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >team Leader EmailId {index + 1} : </b><p>{element.teamLeaderEmailId}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >name Member1 {index + 1} : </b><p>{element.nameMember1}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >registration  number Member1 {index + 1} : </b><p>{element.registrationnumberMember1}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >registration number Member2 {index + 1} : </b><p>{element.registrationnumberMember2}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >name Member3 {index + 1} : </b><p>{element.nameMember3}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >branch member leader {index + 1} : </b><p>{element.inputsectionmemberleader}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >branch member1 {index + 1} : </b><p>{element.inputsectionmember1}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >registration number Member2 {index + 1} : </b><p>{element.inputsectionmember2}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >registration number Member3 {index + 1} : </b><p>{element.inputsectionmember3}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >registration number Member3 {index + 1} : </b><p>{element.registrationnumberMember3}</p>
                            </div>
                            <div className='w-[100%] h-[28px] flex justify-start items-center gap-2  uppercase'>
                                <b className='text-[#3fff65]' >Event Name {index + 1} : </b><p>{element.selectparticipant}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


export default Adimin_Panel_Hackathon_Team_Register
