import React, { useEffect, useState } from 'react'
import './Form.css'
import { toast } from 'react-toastify';
import axios from 'axios';
import HalfLoader from '../HalfLoader';
function AdminPanelClubAdd() {
    const [getdata, setdata] = useState({ clubName: '' });
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
            if (file.type === "image/jpeg") {
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
            } else {
                setSelectedFile(null);
                toast.error('Only Support image formet');

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
                <div className="title">Club Add</div>
                <hr />
                <div className="content">
                    <form onSubmit={submidformdata} encType='multipart/form-data'>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Club Name</span>
                                <input type="text" name='clubName' value={getdata.clubName} onChange={changedata} placeholder="Enter your Club Name" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Created Date</span>
                                <input type="date" name='create_Date' id='create_Date' onChange={handleDateChange} required />
                            </div>
                            <div className=' w-[300px] h-[250px] border-[2px] flex justify-center items-center border-[#000] rounded-[10px]'>
                                <img className='w-[100%] h-[100%] rounded-[10px]' src={selectedFile} alt='notSelected' />
                            </div>

                            <div className="input-box">
                                <span className="details">Club Poster</span>
                                <input type="file" name='club_Poster' id='club_Poster' onChange={handleFileChange} required />
                            </div>

                        </div>
                        <div className="button-container">
                            <div className="button">
                                <input type="submit" value="Add Club" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminPanelClubAdd
