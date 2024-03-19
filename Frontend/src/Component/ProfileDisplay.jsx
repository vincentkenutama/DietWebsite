import ProfilePicture from "./ProfilePicture";
import DisplayName from "./DisplayName";
import '../Styles/UsersStyles.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProfileDisplay({username})
{
    const [userDisplay, setUserDisplay] = useState('')
    const [userImage, setUserImage] = useState('') 

    const navigate = useNavigate();

    useEffect(() =>{
        getUserInformation()
    })

    const navigateToUserPage = () => {
        navigate('/dashboard')    
    }

    const getUserInformation = async () => {
        await axios.get(`https://localhost:7115/User/GetUser?username=${username}`)
        .then((response) => {
            const data = response.data;
            
            setUserDisplay(data.Nama)
            setUserImage(data.Picture)
        }
        ).catch(() => {

        })    
    }

    return(
        <div    className="profile-container"
                onMouseOver={(e) => e.target.style.cursor = 'pointer' }
                >

            <DisplayName name={userDisplay} toUser={navigateToUserPage}/>
            <ProfilePicture image={userImage} size="small" toUser={navigateToUserPage}/>
        </div>
    )
}