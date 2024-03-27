import { useEffect, useState } from "react"
import DisplayName from "../DisplayName"
import ProfilePicture from "../ProfilePicture"
import axios from "axios"
import { getUserInformation } from "../../Script/Scripts"



export default function UserPictureName({username})
{
    const [fullName, setFullName] = useState('')
    const [image, setImage] = useState('')

    useEffect(() => {
        getUserProfile()
    }, [])

    const getUserProfile = async () => {
        const response = await getUserInformation();
        console.log(response)
        setFullName(response.data.Nama)
        setImage(response.data.Picture)
        
    }

    return (
        <div className="user-update-name-image">
            <ProfilePicture image={image}/>
            <DisplayName name={fullName} fontSize={'23px'}/>
        </div>
    );
}