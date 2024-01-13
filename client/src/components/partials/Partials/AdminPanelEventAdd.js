import React, { useEffect, useState } from 'react'
import './Form.css'
import { toast } from 'react-toastify';
import axios from 'axios';
import HalfLoader from '../HalfLoader';
function AdminPanelEventAdd() {
    const [getdata, setdata] = useState({ eventname: '' });
    const [IsLoadingRequest, setIsLoadingRequest] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [image, setImage] = useState(null);
    const [selectedDate, setSelectedDate] = useState("");

    console.log(getdata);
    const changedata = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setdata({ ...getdata, [name]: value });
    }


    // if (IsLoading) {
    //     return <HalfLoader message="Loading.." />
    // }
    if (IsLoadingRequest) {
        return <HalfLoader message="Processing.." />

    }
    if (Error) {
        // return <h1>Something went wrong!!</h1>
    }
    const handleFileChange = (event) => {
        if (event.target.value) {

            const file = event.target.files[0];
            if (file.type === "application/pdf") {
                setSelectedFile(null);
                toast.error('Only Support image formet');
            } else {
                if (file.size >= 409600) {
                    toast.error('File size below the 400kb');
                }
                else {
                    setImage(file);
                    if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            setSelectedFile(reader.result);
                        };
                        reader.readAsDataURL(file);
                    } else {
                        setSelectedFile(null);
                    }

                }

            }
        }
    };
    const handleDateChange = (event) => {
        const Date = event.target.value;
        setSelectedDate(Date);
    };
    const submidformdata = async (event) => {
        event.preventDefault();

    }

    return (
        <>
            <div className="container">
                <div className="title">Event Add</div>
                <hr />
                <div className="content">
                    <form onSubmit={submidformdata} encType='multipart/form-data'>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Event Name</span>
                                <input type="text" name='eventname' value={getdata.eventname} onChange={changedata} placeholder="Enter your Club Name" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Start Date</span>
                                <input type="date" name='start_Date' id='start_Date' onChange={handleDateChange} required />
                            </div>
                            <div className=' w-[300px] h-[250px] border-[2px] flex justify-center items-center border-[#000] rounded-[10px]'>
                                <img className='w-[100%] h-[100%] rounded-[10px]' src={selectedFile} alt='notSelected' />
                            </div>

                            <div className="input-box">
                                <span className="details">Event Poster</span>
                                <input type="file" name='contest_poster' id='contest_poster' onChange={handleFileChange} required />
                            </div>

                        </div>
                        <div className="button-container">
                            <div className="button">
                                <input type="submit" value="Add Event" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminPanelEventAdd
