import { useEffect, useState } from "react";
import '@styles/UpdateUserStyles.css'
import { getUserInformation } from "@scripts/Scripts";

export default function UserProfileUpdateForm()
{
    const [namaLengkap, setNamaLengkap] = useState('')
    const [username, setUsername] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [birthdate, setBirthDate] = useState('')

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        const response = await getUserInformation()
        setNamaLengkap(response.data.Nama)
        setUsername(response.data.Username)
        setGender(response.data.Gender)
        setEmail(response.data.Email)
        setNumber(response.data.Number)
        setBirthDate(response.data.Birthdate)
    }


    return(
        <div className="user-profile-update-container">
            <form action="">
                <label  htmlFor="name">Nama Lengkap</label>
                <input type="text" id="name" value={namaLengkap}/>

                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username}/>

                <label htmlFor="">New Password</label>
                <input type="password" id="password" value={''}/>

                <label htmlFor="">Confirm Password</label>
                <input type="password" id="password-confirmation" value={''}/>

                <div className="form-wrapper">
                    <label htmlFor="">Gender</label>
                    <select name="" id="" value={gender}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <label htmlFor="birthdate" >Birthdate</label>
                    <input id="birthdate" type='date' placeholder="Today" value={birthdate}/>
                </div>
                
                <label htmlFor="birthdate" >Email</label>
                <input id="email" type='text' value={email}/>

                <label htmlFor="birthdate">Number</label>
                <input id="number" type='text' value={number}/>   
            </form>

            <div className="user-update-btn-wrapper">
                <button className="user-profile-save-btn">Save</button>
                <button className="user-profile-cancel-btn"
                        onClick={() => history.back()}>Cancel</button>
            </div>
        </div>
    );
}
