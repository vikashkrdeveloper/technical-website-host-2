import React, { useEffect, useState } from 'react'
import './Form.css'
import { toast } from 'react-toastify';
import axios from 'axios';
import HalfLoader from '../HalfLoader';
function AdminPanelContestAdd() {
    const [getdata, setdata] = useState({ contestname: '' });
    const [IsLoadingRequest, setIsLoadingRequest] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [image, setImage] = useState(null);
    const [selectedDate, setSelectedDate] = useState("");

    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        const blob = new Blob([selectedFile], { type: 'image/jpeg' });
        const imageUrl = URL.createObjectURL(blob);
        setImageSrc(imageUrl);
        return () => URL.revokeObjectURL(imageUrl);
    }, [selectedFile]);

    const changedata = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setdata({ ...getdata, [name]: value });
    }


    // if (IsLoading) {
    //     return <HalfLoader message="Loading.." />
    // }

    const [imageUrl, setImageUrl] = useState('');
    const handleFetchImage = async () => {
        try {
            const response = await axios.get('/api/club/created/data/');
            const photoBuffer = response.data[0].image.data.data;
            const blob = new Blob([photoBuffer], { type: 'image/jpeg' });
            const imageUrl = URL.createObjectURL(blob);
            setImageUrl(imageUrl);
            console.log(imageUrl);
            URL.revokeObjectURL(imageUrl);
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    };

    useEffect(() => {
        handleFetchImage();
    }, [])
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
        try {
            const formData = new FormData();
            formData.append('contest_poster', image);

            await axios.post('/club/create/api/data/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('File uploaded successfully!');
        } catch (error) {
            console.error('Error uploading file:', error);
        }

    }
    return (
        <>
            <div className="container">
                <div className="title">Contest Add</div>
                <hr />
                <div className="content">
                    <form onSubmit={submidformdata} encType='multipart/form-data'>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Contest Name</span>
                                <input type="text" name='contestname' value={getdata.contestname} onChange={changedata} placeholder="Enter your Club Name" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Start Date</span>
                                <input type="date" name='start_Date' id='start_Date' onChange={handleDateChange} required />
                            </div>
                            <div className=' w-[300px] h-[250px] border-[2px] flex justify-center items-center border-[#000] rounded-[10px]'>
                                <img className='w-[100%] h-[100%] rounded-[10px]' src={selectedFile} alt='notSelected' />
                            </div>

                            <div className="input-box">
                                <span className="details">Contest Poster</span>
                                <input type="file" name='contest_poster' id='contest_poster' onChange={handleFileChange} required />
                            </div>

                        </div>
                        <div className="button-container">
                            <div className="button">
                                <input type="submit" value="Add Contest" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminPanelContestAdd
