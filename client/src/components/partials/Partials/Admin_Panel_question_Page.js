import React, { useEffect, useState } from 'react'
import './Form.css'
import { toast } from 'react-toastify';
import HalfLoader from '../HalfLoader';
function Admin_Panel_question_Page() {
    const [questionnumbers, setquestionnumber] = useState([]);
    const [getdata, setdata] = useState({ questionname: '', option1: '', option2: '', option3: '', option4: '', mcqanswer: '' });
    const [IsLoadingRequest, setIsLoadingRequest] = useState(false);
    const changedata = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setdata({ ...getdata, [name]: value });
    }
    const [IsLoading, SetIsLoading] = useState(false);
    const [Error, SetError] = useState(false);

    const datafetch = async () => {
        try {
            SetIsLoading(true)
            SetError(false)
            const datares = await fetch('/api/contest/question-mcq', { method: 'GET' })
            const data = await datares.json();
            setquestionnumber(data);
            SetIsLoading(false)

        } catch (error) {
            SetIsLoading(false);
            SetError(true)

        }
    }
    useEffect(() => {
        datafetch();

    }, [])
    if (IsLoading ) {
        return <HalfLoader message="Loading.." />
    }
    if (IsLoadingRequest) {
        return <HalfLoader message="Processing.." />

    }
    if (Error) {
        return <h1>Something went wrong!!</h1>
    }
    const submidformdata = async (event) => {
        event.preventDefault();
        try {
            setIsLoadingRequest(true)


            const { questionname, option1, option2, option3, option4, mcqanswer } = getdata;
            const res = await fetch('/coding-contest/api/question-mcq/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ questionname, option1, option2, option3, option4, mcqanswer, questionnumber: questionnumbers.length + 1 })
            })
            if (res.status === 200) {
                setIsLoadingRequest(false)

                toast.success('Done Question Added');
                datafetch();
                setdata({ questionname: '', option1: '', option2: '', option3: '', option4: '', mcqanswer: '' });

            } else if (res.status === 400) {
                setIsLoadingRequest(false)

                toast.error('Two Option Are Same Please change data')
                setdata({ questionname: '', option1: '', option2: '', option3: '', option4: '', mcqanswer: '' });

            } else if (res.status === 401) {
                setIsLoadingRequest(false)

                toast.error('Question Number Already exist');
                setdata({ questionname: '', option1: '', option2: '', option3: '', option4: '', mcqanswer: '' });

            } else if (res.status === 500) {
                setIsLoadingRequest(false)

                toast.error('All field require');
                setdata({ questionname: '', option1: '', option2: '', option3: '', option4: '', mcqanswer: '' });

            }
        } catch (error) {
            setIsLoadingRequest(false)
        }
    }
    return (
        <>
            <div className="container">
                <div className="title">Add Questions</div>
                <hr />
                <div className="content">
                    <form onSubmit={submidformdata} >
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Question</span>
                                <input type="text" name='questionname' value={getdata.questionname} onChange={changedata} placeholder="Enter your Question" required />
                            </div>
                            <div className="input-box">
                                <span className="details">option -1</span>
                                <input type="text" name='option1' value={getdata.option1} onChange={changedata} placeholder="Enter Option-1" required />
                            </div>
                            <div className="input-box">
                                <span className="details">option -2</span>
                                <input type="text" name='option2' value={getdata.option2} onChange={changedata} placeholder="Enter Option-2" required />
                            </div>

                            <div className="input-box">
                                <span className="details">option -3</span>
                                <input type="text" name='option3' value={getdata.option3} onChange={changedata} placeholder="Enter Option-3" required />
                            </div>

                            <div className="input-box">
                                <span className="details">option -4</span>
                                <input type="text" name='option4' value={getdata.option4} onChange={changedata} placeholder="Enter Option-4" required />
                            </div>

                            <div className="input-box">
                                <span className="details">correct</span>
                                <input type="text" name='mcqanswer' value={getdata.mcqanswer} onChange={changedata} placeholder="Enter Correct Answer" required />
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

export default Admin_Panel_question_Page
