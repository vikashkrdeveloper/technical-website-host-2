import React, { useState } from 'react'
import Admin_Panel_Box_Nav_Bar from './Admin_Panel_Box_Nav_Bar'
import { Outlet, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Loader from '../Loader';
function Admin_Panel_Box() {
    const navigate = useNavigate();
    const [Isloader, SetLoader] = useState(false);
    const logoutfun = async () => {
        try {
            const verify = window.confirm("Are you sure to Logout this Site");
            if (verify) {
                SetLoader(true)
                const res = await fetch('/api/logout/', { method: 'GET' })
                if (res.status === 200) {
                    SetLoader(false)
                    navigate('/admin/dashboard/login')
                    toast.success('Logout sucessfully Done');
                }

            }
        } catch (error) {
            SetLoader(false)
        }
    }
    if (Isloader) {
        return <Loader />
    }
    return (
        <>

            <div className="main-container">
                <div className="navcontainer">
                    <nav className="nav">
                        <div className="nav-upper-options">

                            <Admin_Panel_Box_Nav_Bar link='/admin/dashboard' text='Dashboard' icon='dashboard' />
                            <Admin_Panel_Box_Nav_Bar link='/admin/dashboard/add/quiz/user-id/' text='Quiz Participant Id Add' icon='person_add' />
                            <Admin_Panel_Box_Nav_Bar link='/admin/dashboard/add/coding/user-id/' text='Coding Participant Id Add' icon='group_add' />
                            <Admin_Panel_Box_Nav_Bar link='/admin/dashboard/add/mcq-question' text='Mcq-question Add' icon='note_add' />
                            <Admin_Panel_Box_Nav_Bar link='/admin/dashboard/add/numerical-question' text='Num-question Add' icon='add_task' />
                            <Admin_Panel_Box_Nav_Bar link='/admin/dashboard/api/answer/numerical-question/mcq-question' text='Answer' icon='checklist' />
                            <Admin_Panel_Box_Nav_Bar link='/admin/dashboard/api/team-create/contest' text='Team Create' icon='team_dashboard' />
                            <Admin_Panel_Box_Nav_Bar link='/admin/dashboard/api/all-question-list/contest/mcq-question/numerical-question' text='See Questions' icon='all_inbox' />
                            <Admin_Panel_Box_Nav_Bar link='/admin/dashboard/api/contest/add/' text='Contest  Add' icon='add_task' />
                            <Admin_Panel_Box_Nav_Bar link='/admin/dashboard/api/club/add/' text='Club  Add' icon='event_list' />
                            <Admin_Panel_Box_Nav_Bar link='/admin/dashboard/api/event/add' text='Event  Add' icon='event_upcoming' />
                            <div onClick={logoutfun} className="nav-option option6">
                                <span className="material-symbols-outlined">
                                    logout
                                </span>
                                <div>
                                    <h3>Logout</h3>
                                </div>
                            </div>

                        </div>
                    </nav>
                </div>
                <div className="main">
                    <div className="box-container ">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin_Panel_Box
