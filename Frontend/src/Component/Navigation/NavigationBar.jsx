import '@styles/GlobalStyles.css'
import ProfilePicture from '../ProfilePicture';
import ProfileDisplay from '../ProfileDisplay';
import { useEffect, useState } from 'react';
import {getUserInformation} from '@scripts/Scripts';
import { getActiveUser } from '../../Script/Scripts';

export default function NavigationBar({pageTitle = 'page', navLink})
{
    const [username,setUsername] = useState('')
    const [img, setImg] = useState('')


    useEffect(() => {
        getPicture()
    }, [])

    const getPicture = async () => {
        const response = await getUserInformation();
        setUsername(response.data.Username)
        setImg(response.data.Picture)
    }

    return(
        <div className="navigation-bar">
            <span className="navigation-bar-title">{pageTitle}</span>
            <div className='navbar-profile-picture'>
                <ProfileDisplay username={getActiveUser()} imSize={'small'}/>
                 
                {/* <ProfilePicture  image={img} size='30px'/> */}

            </div>
            
        </div>
    );
}