import React, { useState } from "react";
import SignInForm from "../Component/SignInForm";
import SignInNotify from "../Component/SignInNotify";



export default function LoginPage()
{
    const [notifyStatus, setnotifyStatus] = useState('ok');

    const setNotify = (status) => {
        setnotifyStatus(status)
    }

    return(
        <div>
            <SignInNotify status={notifyStatus}/>
            <SignInForm status={setNotify}/>
        </div>
    );
}