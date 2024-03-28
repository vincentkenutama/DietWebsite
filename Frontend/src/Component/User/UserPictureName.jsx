import { useEffect, useState } from "react"
import DisplayName from "../DisplayName"
import ProfilePicture from "../ProfilePicture"
import UserNameDisplay from "./UserNameDisplay"
import axios from "axios"
import { getUserInformation } from "../../Script/Scripts"



export default function UserPictureName({username})
{
    const [fullName, setFullName] = useState('')
    const [image, setImage] = useState('')
    const [userName, setUsername] = useState('')

    useEffect(() => {
        getUserProfile()
    },)

    const getUserProfile = async () => {
        const response = await getUserInformation();
        setFullName(response.data.Nama)
        setImage(response.data.Picture)
        setUsername(response.data.Username)
    }


    return (
        <div    className="user-update-name-image"
                onMouseOver={(e) => e.target.style.cursor = 'pointer'}>

            <ProfilePicture image={image} toUser={() => history.back()}/>
            <DisplayName name={fullName} fontSize={'23px'}/>
            <UserNameDisplay username={userName}/>
        </div>
    );
}