import ProfileDisplay from "../Component/ProfileDisplay";
import ProfilePicture from "../Component/ProfilePicture";
import UserPictureName from "../Component/User/UserPictureName";
import NavigationBar from "../Component/Navigation/NavigationBar";
import UserProfileUpdateForm from "../Component/User/UserProfileUpdateForm";
import SignInNotify from "../Component/SignInNotify";
import { getActiveUser } from "../Script/Scripts";
import '@styles/UserUpdate.css';
import { useSearchParams } from "react-router-dom";
import { useState } from "react";



export default function ProfilePageUpdater()
{

    const [notification, setNotification] = useState('')

    return(
        <div className="profile-page-container">
            <SignInNotify status= 'both'/>
            <NavigationBar pageTitle="Update Profile"/>
            <UserPictureName/>
            <UserProfileUpdateForm/>
        </div>
        
    );

}