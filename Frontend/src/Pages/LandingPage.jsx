import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import LoginPage from "./LoginPage";

export default function LandingPage() {

    const navigate = useNavigate();

    useEffect(() => {
        const cookie = document.cookie
        // if(!cookie) navigate('/login')
        navigate('/login')

    })

    return(
        <div>
            <p>Landing Page</p>
        </div>
    );
}