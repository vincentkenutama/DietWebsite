import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import LoginPage from "./LoginPage";
import ProfilePicture from "../Component/ProfilePicture";

export default function LandingPage() {

    const navigate = useNavigate();

    useEffect(() => {
        const cookie = document.cookie
        navigate('/dashboard')

    })

    return(
        <div>
            <ProfilePicture/>
            <p>Landing Page</p>
        </div>
    );
}