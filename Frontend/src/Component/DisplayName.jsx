import axios from "axios";
import { useEffect, useState } from "react";
import '../Styles/UsersStyles.css'

export default function DisplayName({name, toUser}){

    return(
        <div    className="profile-displayname" 
                onMouseOver={(e) => e.target.style.cursor = 'pointer'}
                onClick={toUser}>
            {name}
        </div>
    );
}