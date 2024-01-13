import React, { useState } from 'react'
import '../partials/Partials/Form.css';
import MainHeader from '../partials/MainHeader';
import MainFooter from '../partials/MainFooter';
import { toast } from 'react-toastify'
import Loader from '../partials/Loader';
function EventParticipantRegistration() {
    const [getdata, setdata] = useState({ name: '', emailid: '', mobilenumber: '' });
    const [getData, SetData] = useState({ branch: '', AdmissionYear: '', EventSelectParticipant: '' })
    const [Error, setError] = useState(false);
    const [IsLoading, SetIsLoading] = useState(false);
    const changedata = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setdata({ ...getdata, [name]: value });
    }
    const selectDatachange = (event) => {
        let branch = document.querySelector('#branch').value;
        let admissionyear = document.querySelector('#admissionyear').value;
        let eventselectparticipant = document.querySelector('#eventselectparticipant').value;
        SetData({ branch: branch, AdmissionYear: admissionyear, EventSelectParticipant: eventselectparticipant })
    }
    const submidformdata = async (event) => {
        event.preventDefault();
        try {
            SetIsLoading(true);
            setError(false);
            const { name, emailid, mobilenumber } = getdata;
            const { branch, AdmissionYear, EventSelectParticipant } = getData;
            const res = await fetch('/participants/member/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, emailid, mobilenumber, branch, AdmissionYear, EventSelectParticipant })
            })
            if (res.status === 200) {
                SetData({ branch: '', AdmissionYear: '', EventSelectParticipant: '' })
                setdata({ name: '', emailid: '', mobilenumber: '' });
                SetIsLoading(false);
                toast.success("Registration Done");
            } else if (res.status === 401) {
                SetIsLoading(false);
                toast.error("Email id Exist please change your email");

            } else if (res.status === 402) {
                SetIsLoading(false);
                toast.error("Mobile number exist please change your mobile");
            } else if (res.status === 400) {
                SetIsLoading(false);
                toast.error("All field require");
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
    return (
        <><MainHeader />
            <div className='w-[100%] h-[83.3vh] bg-[#0b1321] flex  justify-center items-center'>
                <div className="container">
                    <div className="title">Coding & Quiz Registration</div>
                    <hr />
                    <div className="content">
                        <form onSubmit={submidformdata} >
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Name</span>
                                    <input type="text" name='name' value={getdata.name} onChange={changedata} placeholder="Enter your Name" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Email Id</span>
                                    <input type='email' name='emailid' value={getdata.emailid} onChange={changedata} placeholder="Enter your Email Id" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Mobile Number</span>
                                    <input type="number" name='mobilenumber' value={getdata.mobilenumber} onChange={changedata} placeholder="Enter your Mobile Number" required />
                                </div>

                                <div className="input-box">
                                    <span className="details">Branch/Department</span>
                                    <select name='branch' id='branch' onChange={selectDatachange} required >
                                        <option value=''>Select Your Department</option>
                                        <option value='Computer Science and Engineering'>Computer Science and Engineering</option>
                                        <option value='Computer Science and Technology (INTERNET OF THINGS)'>Computer Science and Technology (INTERNET OF THINGS)</option>
                                        <option value='Civil Engineering'> Civil Engineering</option>
                                        <option value='Electrical Engineering'> Electrical Engineering</option>
                                        <option value='Electronics Engineering (VLSI DESIGN AND TECHNOLOGY)'>Electronics Engineering (VLSI DESIGN AND TECHNOLOGY)</option>
                                        <option value='Mechanical Engineering'>Mechanical Engineering</option>
                                        <option value='Applied Science and Huminities'>Applied Science and Huminities</option>
                                    </select>
                                </div>

                                <div className="input-box">
                                    <span className="details">Year</span>
                                    <select name="AdmissionYear" id='admissionyear' onChange={selectDatachange} required >
                                        <option value=''>Select Your Year</option>
                                        <option value='2023'>2023</option>
                                        <option value='2022'>2022</option>
                                        <option value='2021'>2021</option>
                                        <option value='2020'>2020</option>
                                    </select>
                                </div>

                                <div className="input-box">
                                    <span className="details">Participant Event</span>
                                    <select name="EventSelectParticipant" id='eventselectparticipant' onChange={selectDatachange} required >
                                        <option value=''>Select Your Type Of Event Participant</option>
                                        <option value='Hackathon'>Hackathon</option>
                                        <option value='Events'>Events</option>
                                        <option value='Hackathon & events'> Both</option>
                                    </select>
                                </div>
                            </div>
                            <div className="button-container">
                                <div className="button">
                                    <input type="submit" value="Registration" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <MainFooter />
        </>
    )
}

export default EventParticipantRegistration
