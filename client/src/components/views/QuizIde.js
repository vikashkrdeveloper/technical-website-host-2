import React from 'react'
import McqSolvePage from './McqSolvePage'
import Header from '../partials/Header'
import Data_Fetch_Api from '../contexts/Data_Fetch_Api'
import Loader from '../partials/Loader';
function QuizIde() {
    const [IsLoading, Error, data] = Data_Fetch_Api('/participant/quiz/auth/data');
    if (IsLoading) {
        return <Loader message="Loading..." />
    } if (Error) {
        return <h1> Some technical issue</h1>
    }
    return (
        <>
            <div className='w-[100%] h-[100%]'>
                <Header datas={data} verify={Error} />
                <McqSolvePage datas={data}/>
            </div>

        </>
    )
}

export default QuizIde
