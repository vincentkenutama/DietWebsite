import axios from "axios";
import { useEffect, useState } from "react";
import '../Styles/UsersStyles.css'

export default function DisplayName({username, toUser}){

    const [displayName, setDisplayName] = useState('')

    useEffect(() => {
        GetName()
    })
    


    const GetName = async () => {
        const response = await axios.get(`https://localhost:7115/User/GetUser?username=${username}`)
        const data = response.data;
        
        setDisplayName(data.Nama)
    }
    
    return(
        <div    className="profile-displayname" 
                onMouseOver={(e) => e.target.style.cursor = 'pointer'}
                onClick={toUser}>
            {displayName}
        </div>
    );
}