import { useEffect, useState } from "react"
import axios from "axios"
import "../Styles/UsersStyles.css"

export default function ProfilePicture({image, size, toUser})
{
    const picture_size = {
        small : 'profile-size-small'
    }

    return(
        <>
            <img    src={(image) ? image : "https://cdn-icons-png.flaticon.com/128/456/456212.png"} 
                    alt="" 
                    className={`'profile-size-small' ${picture_size[size]}`}
                    onClick={toUser}
                    style={{width: (picture_size[size] != undefined) ? picture_size[size] : size}}/>
        </>
    )
}