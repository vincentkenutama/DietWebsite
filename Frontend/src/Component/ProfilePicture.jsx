import { useEffect, useState } from "react"
import axios from "axios"
import "../Styles/UsersStyles.css"

export default function ProfilePicture({username, size})
{

    const [picture, setPicture] = useState('')
    const picture_size = {
        small : 'profile-size-small'
    }

    useEffect(() =>
    {
        getUserPicture()
    })

    const getUserPicture = async () => {
        const response = await axios.get(`https://localhost:7115/User/Picture?username="${username}"`)
        const data = response.data;

        if(data.Picture != null) setPicture(data.Picture);  
    }

    // console.log(picture)

    return(
        <>
            {/* {console.log(`picture ${picture}`)} */}
            <img    src={(picture == '' || picture == null) ? "https://cdn-icons-png.flaticon.com/128/456/456212.png" : picture} 
                    alt="" 
                    className={`${picture_size[size]}`}/>
        </>
    )
}