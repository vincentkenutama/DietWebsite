import DisplayName from "../Component/DisplayName";
import ProfileDisplay from "../Component/ProfileDisplay";
import DatePicker from "../Component/Dashboard/DatePicker";
import {getActiveUser, getCookiesValues} from "../Script/Scripts";
import '../Styles/DashboardStyles.css'
import DashboardNavbar from "../Component/Dashboard/DashboardNavbar";
import DashboardSidebar from "../Component/Dashboard/DashboardSidebar";
import DashboardContent from "../Component/Dashboard/DashboardContent";
// import { google } from "googleapis";
import UploadFile from "./UploadFile";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard()
{
    const navigate = useNavigate()

    useEffect(() => {
        if(!getActiveUser())  navigate('login')
    },[])


    return(
        <div className="dashboard-container">
            {/* <UploadFile/> */}
            <DashboardContent/>
            <DashboardSidebar/>
        </div>
    );
}