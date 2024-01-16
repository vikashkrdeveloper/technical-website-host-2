import React, { useState } from 'react'
import '../partials/Partials/Form.css';
import MainHeader from '../partials/MainHeader';
import MainFooter from '../partials/MainFooter';
import { toast } from 'react-toastify'
import Loader from '../partials/Loader';
function BgmiEventRegistration() {
    const [getdata, setdata] = useState({ teamname: '', teamLeaderName: '', teamLeaderRegistrationNumber: '', teamLeaderMobilenumber: '', teamLeaderEmailId: '', nameMember1: '', registrationnumberMember1: '', nameMember2: '', registrationnumberMember2: '', nameMember3: '', registrationnumberMember3: '' });
    const [participantevent, setparticipantevent] = useState({ inputsectionmemberleader: '', inputsectionmember1: '', inputsectionmember2: '', inputsectionmember3: '', selectparticipant: '' });
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
            const { teamname, teamLeaderName, teamLeaderMobilenumber, teamLeaderEmailId, teamLeaderRegistrationNumber, nameMember1, registrationnumberMember1, nameMember2, registrationnumberMember2, nameMember3, registrationnumberMember3 } = getdata;
            const { inputsectionmemberleader, inputsectionmember1, selectparticipant, inputsectionmember2, inputsectionmember3 } = participantevent;
            const res = await fetch('/participant/bgmi/tech/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ teamname, teamLeaderName, teamLeaderMobilenumber, teamLeaderRegistrationNumber, teamLeaderEmailId, nameMember1, registrationnumberMember1, nameMember2, registrationnumberMember2, nameMember3, inputsectionmemberleader, inputsectionmember1, inputsectionmember2, inputsectionmember3, registrationnumberMember3, selectparticipant })
            })
            if (res.status === 200) {
                setdata({ teamname: '', teamLeaderName: '', teamLeaderRegistrationNumber: '', teamLeaderMobilenumber: '', teamLeaderEmailId: '', nameMember1: '', registrationnumberMember1: '', nameMember2: '', registrationnumberMember2: '', nameMember3: '', registrationnumberMember3: '' })
                setparticipantevent({ inputsectionmemberleader: '', inputsectionmember1: '', inputsectionmember2: '', inputsectionmember3: '', selectparticipant: '' });
                setIsLoadingRequest(false)
                window.location.assign('https://whatsapp.com/channel/0029VaJOMRBCnA7uvuG1z03d');
                toast.success('Registration Done');
            }
            else if (res.status === 400) {
                setIsLoadingRequest(false)
                toast.error('All field require');
            }
            else if (res.status === 401) {
                setIsLoadingRequest(false)
                toast.error('Team leader Email already exist');
            }
            else if (res.status === 402) {
                setIsLoadingRequest(false)
                toast.error('Team leader mobile number already exist');
            }
            else if (res.status === 403) {
                setIsLoadingRequest(false)
                toast.error('Team leader registration number already exist');
            }
            else if (res.status === 405) {
                setIsLoadingRequest(false)
                toast.error('Team member1 registration number already exist');
            }
            else if (res.status === 406) {
                setIsLoadingRequest(false)
                toast.error('Team member2 registration number already exist');
            }
            else if (res.status === 408) {
                setIsLoadingRequest(false)
                toast.error('Team member3 registration number already exist');
            }
        } catch (error) {
            setdata({ teamname: '', teamLeaderName: '', teamLeaderRegistrationNumber: '', teamLeaderMobilenumber: '', teamLeaderEmailId: '', nameMember1: '', registrationnumberMember1: '', nameMember2: '', registrationnumberMember2: '', nameMember3: '', registrationnumberMember3: '' })
            setparticipantevent({ inputsectionmemberleader: '', inputsectionmember1: '', inputsectionmember2: '', inputsectionmember3: '', selectparticipant: '' });
            toast.success('Some technical issue');
            setIsLoadingRequest(false)

        }


    }
    const selectparticipant = () => {
        const inputsectiondata = document.querySelector('#selectparticipant').value;
        setparticipantevent({ inputsectionmemberleader: participantevent.inputsectionmemberleader, inputsectionmember1: participantevent.inputsectionmember1, inputsectionmember2: participantevent.inputsectionmember2, inputsectionmember3: participantevent.inputsectionmember3, selectparticipant: inputsectiondata })
    }
    const selectHandelClickEvent = (event) => {
        const inputsectiondata = document.querySelector('#inputsectionleader').value;
        setparticipantevent({ inputsectionmemberleader: inputsectiondata, inputsectionmember1: participantevent.inputsectionmember1, inputsectionmember2: participantevent.inputsectionmember2, inputsectionmember3: participantevent.inputsectionmember3, selectparticipant: participantevent.selectparticipant })
    }
    const selectHandelClickEvent1 = (event) => {
        const inputsectiondata1 = document.querySelector('#inputsectionmember1').value;
        setparticipantevent({ inputsectionmemberleader: inputsectiondata1 })
        setparticipantevent({ inputsectionmemberleader: participantevent.inputsectionmemberleader, inputsectionmember1: inputsectiondata1, inputsectionmember2: participantevent.inputsectionmember2, inputsectionmember3: participantevent.inputsectionmember3, selectparticipant: participantevent.selectparticipant })
    }
    const selectHandelClickEvent2 = (event) => {
        const inputsectiondata2 = document.querySelector('#inputsectionmember2').value;
        setparticipantevent({ inputsectionmember2: inputsectiondata2 })
        setparticipantevent({ inputsectionmemberleader: participantevent.inputsectionmemberleader, inputsectionmember1: participantevent.inputsectionmember1, inputsectionmember2: inputsectiondata2, inputsectionmember3: participantevent.inputsectionmember3, selectparticipant: participantevent.selectparticipant })
    }
    const selectHandelClickEvent3 = (event) => {
        const inputsectiondata3 = document.querySelector('#inputsectionmember3').value;
        setparticipantevent({ inputsectionmember3: inputsectiondata3 })
        setparticipantevent({ inputsectionmemberleader: participantevent.inputsectionmemberleader, inputsectionmember1: participantevent.inputsectionmember1, inputsectionmember2: participantevent.inputsectionmember2, inputsectionmember3: inputsectiondata3, selectparticipant: participantevent.selectparticipant })

    }
    if (IsLoadingRequest) {
        return <Loader message="Processing.." />
    }
    return (
        <>
            <MainHeader />
            <div id='box' className='w-[100%]  p-[20px] flex justify-center items-center bg-[#0b1723]'>
                <div className='w-[100%] h-[auto] p-[20px] flex justify-center items-center'>
                    <div className="container">
                        <div className="title">BGMI Team Registration</div>
                        <hr />
                        <div className="content">
                            <form onSubmit={submidformdata} >
                                <div className="user-details">
                                    <div className="input-box">
                                        <span className="details">Team Name</span>
                                        <input type="text" name='teamname' value={getdata.teamname} onChange={changedata} placeholder="Enter your Team name" required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Team Leader Name</span>
                                        <input type="text" name='teamLeaderName' value={getdata.teamLeaderName} onChange={changedata} placeholder="Enter Your Team Leader Name" required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Team Leader Branch</span>
                                        <select className='inputsection' name='inputsectionmemberleader' id='inputsectionleader' onChange={selectHandelClickEvent} >
                                            <option value=''>Select Team Leader Branch </option>
                                            <option value='Computer Science and Engineering'>Computer Science and Engineering</option>
                                            <option value='Computer Science and Technology (IoT)'>Computer Science and Technology (IoT).</option>
                                            <option value='Civil Engineering.'>Civil Engineering</option>
                                            <option value='Electrical Engineering'>Electrical Engineering</option>
                                            <option value='Mechanical Engineering'>Mechanical Engineering</option>
                                            <option value='Applied Science and Huminities'>Applied Science and Huminities</option>
                                            <option value='Electronic Engineering (VLSI)'>Electronic Engineering (VLSI)</option>
                                        </select>
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Mobile No. Team Leader </span>
                                        <input type="number" name='teamLeaderMobilenumber' value={getdata.teamLeaderMobilenumber} onChange={changedata} placeholder="Enter Mobile No. Team Leader" required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Email Id Team Leader</span>
                                        <input type="text" name='teamLeaderEmailId' value={getdata.teamLeaderEmailId} onChange={changedata} placeholder="Enter the Email Id Team Leader" required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Registration Number Team Leader</span>
                                        <input type="text" maxLength='11' name='teamLeaderRegistrationNumber' value={getdata.teamLeaderRegistrationNumber} onChange={changedata} placeholder="Enter  the Registration Number Team Leader " required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Name Member -1</span>
                                        <input type="text" name='nameMember1' value={getdata.nameMember1} onChange={changedata} placeholder="Enter the Member-1 name" required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Member-1 Branch</span>
                                        <select className='inputsection' name='inputsectionmember1' id='inputsectionmember1' onChange={selectHandelClickEvent1} >
                                            <option value=''>Select Team Member-1 Branch </option>
                                            <option value='Computer Science and Engineering'>Computer Science and Engineering</option>
                                            <option value='Computer Science and Technology (IoT)'>Computer Science and Technology (IoT).</option>
                                            <option value='Civil Engineering.'>Civil Engineering</option>
                                            <option value='Electrical Engineering'>Electrical Engineering</option>
                                            <option value='Mechanical Engineering'>Mechanical Engineering</option>
                                            <option value='Applied Science and Huminities'>Applied Science and Huminities</option>
                                            <option value='Electronic Engineering (VLSI)'>Electronic Engineering (VLSI)</option>
                                        </select>
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Registration Number Member-1</span>
                                        <input type="text" maxLength='11' name='registrationnumberMember1' value={getdata.registrationnumberMember1} onChange={changedata} placeholder="Enter the Registration Number Member-1" required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Name Member -2</span>
                                        <input type="text" name='nameMember2' value={getdata.nameMember2} onChange={changedata} placeholder="Enter Member-2 name" required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Member-2 Branch</span>
                                        <select className='inputsection' name='inputsectionmember2' id='inputsectionmember2' onChange={selectHandelClickEvent2}>
                                            <option value=''>Select Team Member-2 Branch </option>
                                            <option value='Computer Science and Engineering'>Computer Science and Engineering</option>
                                            <option value='Computer Science and Technology (IoT)'>Computer Science and Technology (IoT).</option>
                                            <option value='Civil Engineering.'>Civil Engineering</option>
                                            <option value='Electrical Engineering'>Electrical Engineering</option>
                                            <option value='Mechanical Engineering'>Mechanical Engineering</option>
                                            <option value='Applied Science and Huminities'>Applied Science and Huminities</option>
                                            <option value='Electronic Engineering (VLSI)'>Electronic Engineering (VLSI)</option>
                                        </select>
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Registration Number Member-2</span>
                                        <input type="text" maxLength='11' name='registrationnumberMember2' value={getdata.registrationnumberMember2} onChange={changedata} placeholder="Enter the Registration Number Member-2" required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Name Member -3</span>
                                        <input type="text" name='nameMember3' value={getdata.nameMember3} onChange={changedata} placeholder="Enter Member-3 name" required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Member-3 Branch</span>
                                        <select className='inputsection' name='inputsectionmember3' id='inputsectionmember3' onChange={selectHandelClickEvent3}>
                                            <option value=''>Select Team member-3 Branch </option>
                                            <option value='Computer Science and Engineering'>Computer Science and Engineering</option>
                                            <option value='Computer Science and Technology (IoT)'>Computer Science and Technology (IoT).</option>
                                            <option value='Civil Engineering.'>Civil Engineering</option>
                                            <option value='Electrical Engineering'>Electrical Engineering</option>
                                            <option value='Mechanical Engineering'>Mechanical Engineering</option>
                                            <option value='Applied Science and Huminities'>Applied Science and Huminities</option>
                                            <option value='Electronic Engineering (VLSI)'>Electronic Engineering (VLSI)</option>
                                        </select>
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Registration Number Member-3</span>
                                        <input type="text" maxLength='11' name='registrationnumberMember3' value={getdata.registrationnumberMember3} onChange={changedata} placeholder="Enter Registration Number Member-3" required />
                                    </div>
                                    <div className="input-box ">
                                        <span className="details">Select Event</span>
                                        <select className='inputsection' name='selectparticipant' id='selectparticipant' onChange={selectparticipant}>
                                            <option value=''>Select Event </option>
                                            <option value='E-Sport ( BGMI ) '>E-Sport ( BGMI ) </option>
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
            </div>
            <MainFooter />
        </>
    )
}
export default BgmiEventRegistration
