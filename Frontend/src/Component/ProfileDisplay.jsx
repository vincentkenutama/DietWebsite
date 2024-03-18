import ProfilePicture from "./ProfilePicture";
import DisplayName from "./DisplayName";
import '../Styles/UsersStyles.css'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileDisplay({username})
{
    const navigate = useNavigate();

    useEffect(() =>{
        console.log(document.cookie)
    })

    const navigateToUserPage = () => {
        navigate('/user')    
    }


    return(
        <div    className="profile-container"
                onMouseOver={(e) => e.target.style.cursor = 'pointer' }
                >

            <DisplayName username={username} toUser={navigateToUserPage}/>
            <ProfilePicture username={username} size="small" toUser={navigateToUserPage}/>
        </div>
    )
}