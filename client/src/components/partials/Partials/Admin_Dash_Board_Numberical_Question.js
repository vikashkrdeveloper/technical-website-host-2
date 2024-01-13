import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import HalfLoader from '../HalfLoader';

function Admin_Dash_Board_Numberical_Question() {
    const [questionnumbers, setquestionnumber] = useState([]);
    const [getdata, setdata] = useState({ questionname: '' });
    const [IsLoading, SetIsLoader] = useState(false);
    const [Error, SetError] = useState(false);
    const [IsLoadingRequest, setIsLoadingRequest] = useState(false);
    const datafetch = async () => {
        try {
            SetError(false);
            SetIsLoader(true);
            const datares = await fetch('/api/contest/question-numerical', { method: 'GET' })
            const data = await datares.json();
            setquestionnumber(data);
            SetIsLoader(false)

        } catch (error) {
            SetError(true);
            SetIsLoader(false)

        }
    }
    useEffect(() => {
        datafetch();
    }, [])
    if (Error) {
        return <h1>Something went wrong</h1>
    }
    if (IsLoading) {
        return <HalfLoader message="Loading.." />
    }
    if (IsLoadingRequest) {
        return <HalfLoader message="Processing.." />
    }
    const changedata = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setdata({ ...getdata, [name]: value });
    }
    const submitformdata = async (event) => {
        event.preventDefault();
        try {
            setIsLoadingRequest(true)

            const { questionname } = getdata;

            const res = await fetch('/coding-contest/api/question-numerical/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ questionname, questionnumber: questionnumbers.length + 1 })
            })
            if (res.status === 200) {
                toast.success('Done Question Added');
                datafetch();
                setdata({ questionname: '' });
                setIsLoadingRequest(false)

            } else if (res.status === 401) {
                toast.error("Question number already exist");
                setdata({ questionname: '' });
                setIsLoadingRequest(false)


            } else if (res.status === 403) {
                toast.error("Some technical issue");
                setdata({ questionname: '' });
                setIsLoadingRequest(false)


            } else if (res.status === 500) {
                toast.error("All field require");
                setdata({ questionname: '' });
                setIsLoadingRequest(false)


            }
        } catch (error) {
            setIsLoadingRequest(false)
        }
    }
    return (
        <>
            <div className="container ">
                <div className="title">Add Questions</div>
                <hr />
                <div className="content">
                    <form onSubmit={submitformdata} >
                        <div className="user-details">
                            <div className="input-box">

                                <span className="details  font-[700] ">Question : </span>
                                <textarea name='questionname' value={getdata.questionname} onChange={changedata} type="text" className=' mt-2 text-[#fff] outline-none rounded-[2px] resize-none bg-[#2b2525] p-[20px]' placeholder="Enter your Question" rows='10' cols='72' required />
                            </div>

                        </div>
                        <div className="button-container">
                            <div className="button">
                                <input type="submit" value="Add Question" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Admin_Dash_Board_Numberical_Question
