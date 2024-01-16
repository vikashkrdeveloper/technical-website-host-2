import React, { useState } from 'react'
import './Form.css';
import { toast } from 'react-toastify';
import Loader from '../Loader';

function AdminPanelCodingParticipantUserIdCreate() {
    const [getdata, setdata] = useState({ password: '', userid: '' });
    const [data, setData] = useState([]);
    const [Error, setError] = useState(false);
    const [IsLoading, SetIsLoading] = useState(false);
    const [base64String, setbase64String] = useState('')
    const changedata = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setdata({ ...getdata, [name]: value });
    }
    const QuizUserdata = async (emailid) => {
        try {
            setError(false);
            SetIsLoading(true);
            const res = await fetch(`/api/participant/coding/register/data/filter?search=${emailid}`, {
                method: 'POST'
            })
            if (res.status === 200) {
                const data = await res.json();
                setData(data)
                if (data.ProfileImage) {
                    let arrayBuffer = data.ProfileImage.data.data
                    const base64Strings = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
                    setbase64String(base64Strings)
                }
                SetIsLoading(false);
                toast.success("Data found sucessfully");
            } else if (res.status === 401) {
                toast.error("Data Not found");
                SetIsLoading(false);
            } else if (res.status === 500) {
                toast.error("Some technical issue")
                SetIsLoading(false);

            }

        } catch (error) {
            setError(true);
            SetIsLoading(false);
            toast.error("Some technical issue" + error);
        }
    }
    const submidformdata = async (event) => {
        event.preventDefault();
        try {
            SetIsLoading(true);
            setError(false);
            const { userid, password } = getdata;
            const formdata = new FormData();
            formdata.append("name", data.name);
            formdata.append("emailid", data.emailid);
            formdata.append("mobilenumber", data.mobilenumber);
            formdata.append("registrationnumber", data.registrationnumber);
            formdata.append("branch", data.branch);
            formdata.append("AdmissionYear", data.AdmissionYear);
            formdata.append("EventSelectParticipant", data.EventSelectParticipant);
            formdata.append("userid", userid);
            formdata.append("password", password);
            const res = await fetch('/participant/coding/user-id/tech/form', {
                method: 'POST',
                body: formdata
            })
            if (res.status === 200) {
                setdata({ userid: '', password: '' });
                SetIsLoading(false);
                setbase64String("")
                setData({ name: '', emailid: '', mobilenumber: '', registrationnumber: '', branch: '', AdmissionYear: '', EventSelectParticipant: '' })
                toast.success("Quiz Participant Id Added");
            } else if (res.status === 401) {
                SetIsLoading(false);
                toast.error("Email id Exist please change your email");
                setbase64String("")
                setdata({ userid: '', password: '' });
                setData({ name: '', emailid: '', mobilenumber: '', registrationnumber: '', branch: '', AdmissionYear: '', EventSelectParticipant: '' })
            } else if (res.status === 402) {
                SetIsLoading(false);
                toast.error("Mobile number exist please change your mobile");
                setbase64String("")
                setdata({ userid: '', password: '' });
                setData({ name: '', emailid: '', mobilenumber: '', registrationnumber: '', branch: '', AdmissionYear: '', EventSelectParticipant: '' })

            } else if (res.status === 400) {
                SetIsLoading(false);
                toast.error("All field require");

            } else if (res.status === 500) {
                SetIsLoading(false);
                toast.error("Some technical issue please try after sum time");
            }

        } catch (error) {
            setError(true);
            SetIsLoading(false);
        }
    }
    if (IsLoading) {
        return <Loader message="Processing.." />
    }
    if (Error) {
        return <h1> This time sum technical issue </h1>
    }

    const verifydata = () => {
        const emailid = document.querySelector('#emailid').value
        if (emailid === '') {
            toast.error('Input field  require');
        } else {
            QuizUserdata(emailid);
            document.querySelector('#emailid').value = "";

        }

    }

    return (
        <>
            <div className='w-[100%] h-[100px] flex justify-center items-start'>
                <div className="input-box">
                    <span className="details text-[25px] font-[500] mr-2">Email : </span>
                    <input type="text" name='emailid' id='emailid' className='p-[10px] rounded-[5px] outline-[#087fa3]' onChange={changedata} placeholder="Enter your Email id" required />
                    <button className='w-[150px] p-[10px] rounded-[10px] ml-4 text-[#ffffffd4] bg-[#0b201d] h-[45px]' onClick={verifydata}>Check Data</button>
                </div>
            </div>
            <div className="container ">
                <div className="title">Coding User Id Registration</div>
                <hr />
                <div className="content ">
                    <form onSubmit={submidformdata} className='h-[auto]' encType='multipart/form-data' >
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Name</span>
                                <input type="text" name='name' className=' uppercase' value={data.name ? data.name : ''} required />
                            </div>

                            <div className="input-box">
                                <span className="details">Mobile Number</span>
                                <input type="number" name='mobilenumber' value={data.mobilenumber ? data.mobilenumber : ''} required />
                            </div>

                            <div className="input-box">
                                <span className="details">Registration Number</span>
                                <input type="text" name='registrationnumber' value={data.registrationnumber ? data.registrationnumber : ''} required />
                            </div>

                            <div className="input-box">
                                <span className="details">Branch/Department</span>
                                <input name="branch" value={data.branch ? data.branch : ''} id='branch' required />
                            </div>

                            <div className="input-box">
                                <span className="details">Year</span>
                                <input name="AdmissionYear" value={data.AdmissionYear ? data.AdmissionYear : ''} id='AdmissionYear' required />
                            </div>

                            <div className="input-box">
                                <span className="details">Event</span>
                                <input name="EventSelectParticipant" value={data.EventSelectParticipant ? data.EventSelectParticipant : ""} id='eventselectparticipant' required />

                            </div>
                            <div className="input-box">
                                <span className="details">User Id</span>
                                <input type="text" maxLength={10} name='userid' value={getdata.userid} onChange={changedata} placeholder="Enter your User Id" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="password" name='password' value={getdata.password} onChange={changedata} placeholder="Enter your Password" required />
                            </div>
                            <div className=' w-[300px] h-[250px] border-[2px] flex justify-center items-center border-[#000] rounded-[10px]'>
                                <img src={`data:image/png;base64,${base64String}`} className='w-[100%] h-[100%] rounded-[10px]' alt='notSelected' />
                            </div>
                        </div>
                        <div className="button-container">
                            <div className="button">
                                <input type="submit" value="Add Coding Participant Id" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminPanelCodingParticipantUserIdCreate
