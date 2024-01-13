import React from 'react'
import Admin_Panel_Show_Box_Total_Number from './Admin_Panel_Show_Box_Total_Number'
import Data_Fetch_Api from '../../contexts/Data_Fetch_Api';
import HalfLoader from '../HalfLoader';

function Adimin_Panel_Box_Outline() {
    const [Isloading, Error, getdata] = Data_Fetch_Api('/api/participant/question/answer/total/count');
    const [Isloadings, Errors, getdatas] = Data_Fetch_Api('/api/participant/member/list');
    if (Isloading || Isloadings) {
        return <HalfLoader message="Loading.." />
    }
    if (Error || Errors) {
        return <h1>Some thing want wrong</h1>
    }
    return (
        <>
            <Admin_Panel_Show_Box_Total_Number link='/admin/dashboard/api/team-list/contest' totalnumber={getdata.totalparticipent} text='Total Teams' img='https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png' />
            <Admin_Panel_Show_Box_Total_Number link='/admin/dashboard/api/total-member/contest/participant/list' totalnumber={getdatas.length} text='Total Member' img='https://media.geeksforgeeks.org/wp-content/uploads/20221210185030/14.png' />
            <Admin_Panel_Show_Box_Total_Number link='/admin/dashboard/api/all-question-list/contest/mcq-question/numerical-question' totalnumber={getdata.numbericalquestion + getdata.mcqquestion} text='Total Questions' img='https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png' />
            <Admin_Panel_Show_Box_Total_Number totalnumber={getdata.Answer} text='Total Answer' link='/admin/dashboard/api/answer/numerical-question/mcq-question' img='https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png' />
        </>
    )
}

export default Adimin_Panel_Box_Outline
