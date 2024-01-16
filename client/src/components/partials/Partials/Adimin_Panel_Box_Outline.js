import React from 'react'
import Admin_Panel_Show_Box_Total_Number from './Admin_Panel_Show_Box_Total_Number'
import Data_Fetch_Api from '../../contexts/Data_Fetch_Api';
import HalfLoader from '../HalfLoader';

function Adimin_Panel_Box_Outline() {
    const [Isloading, Error, getdata] = Data_Fetch_Api('/api/participant/question/answer/total/count');
    const [Isloadings, Errors, getdatas] = Data_Fetch_Api('/api/participant/member/list');
    const [Isloadinges, Errores, getdataes] = Data_Fetch_Api('/api/team/register/data');
    const [Isloadinges1, Errores1, getdataes1] = Data_Fetch_Api('/api/team/hackathon/register/data');
    const [Isloadinges2, Errores2, getdataes2] = Data_Fetch_Api('/api/participant/quiz/register/data');
    const [Isloadinges3, Errores3, getdataes3] = Data_Fetch_Api('/api/participant/coding/register/data');
    if (Isloading || Isloadings || Isloadinges || Isloadinges1||Isloadinges2||Isloadinges3) {
        return <HalfLoader message="Loading.." />
    }
    if (Error || Errors || Errores || Errores1||Errores2||Errores3) {
        return <h1>Some thing want wrong</h1>
    }
    return (
        <>
            <div className='w-[100%] h-[auto]'>
                <Admin_Panel_Show_Box_Total_Number link='/admin/dashboard/api/team-list/contest' totalnumber={getdata.totalparticipent} text='Total Teams ' icon="diversity_3" />
                <Admin_Panel_Show_Box_Total_Number link='/admin/dashboard/api/total-member/contest/participant/list' totalnumber={getdatas.length} text='Logo Design Register' icon="app_registration" />
                <Admin_Panel_Show_Box_Total_Number link='/admin/dashboard/api/team-register/contest/participant/list' totalnumber={getdataes.length} text='Bgmi Team Register' icon="how_to_reg" />
                <Admin_Panel_Show_Box_Total_Number link='/admin/dashboard/api/hackathon/team-register/contest/participant/list' totalnumber={getdataes1.length} text='Hackathon Team Reg' icon="diversity_4" />
                <Admin_Panel_Show_Box_Total_Number link='/admin/dashboard/api/coding/contest/participant/list' totalnumber={getdataes3.length} text='Coding Register ' icon="recent_actors" />
                <Admin_Panel_Show_Box_Total_Number link='/admin/dashboard/api/quiz/contest/participant/list' totalnumber={getdataes2.length} text='Quiz Register' icon="switch_account" />
                {/* <Admin_Panel_Show_Box_Total_Number link='/admin/dashboard/api/quiz/contest/participant/list' totalnumber={getdataes2.length} text='Quiz Id Allot' icon="personal_injury" />
                <Admin_Panel_Show_Box_Total_Number link='/admin/dashboard/api/quiz/contest/participant/list' totalnumber={getdataes2.length} text='Coding Id Allot' icon="how_to_reg" /> */}
                <Admin_Panel_Show_Box_Total_Number link='/admin/dashboard/api/all-question-list/contest/mcq-question/numerical-question' totalnumber={getdata.numbericalquestion + getdata.mcqquestion} text='Total Questions' icon="quiz" />
                <Admin_Panel_Show_Box_Total_Number totalnumber={getdata.Answer} text='Total Answer' link='/admin/dashboard/api/answer/numerical-question/mcq-question' icon="receipt_long" />
            </div>

        </>
    )
}

export default Adimin_Panel_Box_Outline
