import React from 'react'
import Admin_Panel_Box from '../partials/Partials/Admin_Panel_Box'
import Admin_PanelHeader from '../partials/Partials/Admin_PanelHeader'
import '../partials/Partials/Admin_Panel_Box.css'
import { useNavigate } from 'react-router-dom'
import Data_Fetch_Api from '../contexts/Data_Fetch_Api'
import Loader from '../partials/Loader'

function AdminPanel() {
    const navigate = useNavigate();
    const [IsLoader, Error] = Data_Fetch_Api('/api/auth/admin/data')
    if (Error) {
        navigate('/admin/dashboard/login');
        return;
    }
    if (IsLoader) {
        return <Loader message="Loading.."/>
    }
    return (
        <>
            <Admin_PanelHeader />
            <Admin_Panel_Box />
        </>
    )
}

export default AdminPanel
