import React, { useState } from 'react'
import './Form.css'
import { toast } from 'react-toastify';
import Loader from '../Loader';

function Admin_Panel_Question_Page_Data_Create_Team() {
    const [getdata, setdata] = useState({ teamname: '', member1: '', member2: '', member3: '', registrationno: '', emailid: '', userid: '', team_leader: '', conformpassword: '', password: '' });
    const [IsLoadingRequest, setIsLoadingRequest] = useState(false);

    const changedata = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setdata({ ...getdata, [name]: value });
    }


    const submidformdata = async (event) => {
        event.preventDefault();
        try {
            setIsLoadingRequest(true)

            const { teamname, member1, member2, member3, userid, team_leader, conformpassword, emailid, registrationno, password } = getdata;
            if (userid >= 0 && userid <= 9999999999) {
                if (registrationno >= 0 && registrationno <= 99999999999) {


                    const res = await fetch('/participants/registration', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ userid, password, conformpassword, teamname, member1, emailid, registrationno, member2, member3, team_leader })
                    })
                    if (res.status === 200) {
                        setdata({ teamname: '', member1: '', member2: '', member3: '', userid: '', team_leader: '', emailid: '', registrationno: '', conformpassword: '', password: '' });
                        setIsLoadingRequest(false)

                        toast.success('Team Added');

                    } else if (res.status === 400) {
                        setIsLoadingRequest(false)

                        toast.error('User id already exist please change the user id');


                    } else if (res.status === 401) {
                        setIsLoadingRequest(false)

                        toast.error('Password and conform password is wrong');

                    } else if (res.status === 500) {
                        setIsLoadingRequest(false)

                        toast.error('All field require');

                    } else if (res.status === 401) {
                        setIsLoadingRequest(false)
                        toast.error('Password and conform password is wrong');

                    } else if (res.status === 402) {
                        setIsLoadingRequest(false)
                        toast.error('Member 2 already exist');

                    } else if (res.status === 403) {
                        setIsLoadingRequest(false)
                        toast.error('Member 3 already exist');

                    } else if (res.status === 404) {
                        setIsLoadingRequest(false)
                        toast.error('Team leader already exist');


                    }
                }
                else {
                    toast.error("Registration number Only use number not any alphabet");
                    setIsLoadingRequest(false)

                }
            }
            else {
                toast.error("User Id Only use number not any alphabet");
                setIsLoadingRequest(false)

            }
        } catch (error) {
            setIsLoadingRequest(false)
        }
    }
    if (IsLoadingRequest) {
        return <Loader />
    }
    return (
        <>
            <div className="container">
                <div className="title">Create Team</div>
                <hr />
                <div className="content">
                    <form onSubmit={submidformdata} >
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Team Name</span>
                                <input type="text" name='teamname' value={getdata.teamname} onChange={changedata} placeholder="Enter your Team name" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Member -1</span>
                                <input type="text" name='member1' value={getdata.member1} onChange={changedata} placeholder="Enter Member-1 name" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Member -2</span>
                                <input type="text" name='member2' value={getdata.member2} onChange={changedata} placeholder="Enter Member-2 Name" required />
                            </div>

                            <div className="input-box">
                                <span className="details">Member -3</span>
                                <input type="text" name='member3' value={getdata.member3} onChange={changedata} placeholder="Enter Member-3 Name" required />
                            </div>

                            <div className="input-box">
                                <span className="details">Team Leader Name</span>
                                <input type="text" name='team_leader' value={getdata.team_leader} onChange={changedata} placeholder="Enter Your Team Leader Name" required />
                            </div>
                            <div className="input-box">
                                <span className="details">User Id</span>
                                <input type="text" maxLength='10' name='userid' value={getdata.userid} onChange={changedata} placeholder="Enter User Id" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Email Id</span>
                                <input type="text" name='emailid' value={getdata.emailid} onChange={changedata} placeholder="Enter Email Id" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Registration Number</span>
                                <input type="text" maxLength='11' name='registrationno' value={getdata.registrationno} onChange={changedata} placeholder="Enter Registration Number " required />
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="password" name='password' value={getdata.password} onChange={changedata} placeholder="Enter Member-4 Name" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Confirm Password</span>
                                <input type="text" name='conformpassword' value={getdata.conformpassword} onChange={changedata} placeholder="Enter ConformPassword" required />
                            </div>

                        </div>
                        <div className="button-container">
                            <div className="button">
                                <input type="submit" value="Add Team" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Admin_Panel_Question_Page_Data_Create_Team
