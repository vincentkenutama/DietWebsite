import { useEffect, useState } from "react";
import '@styles/UpdateUserStyles.css'
import axios from "axios";
import { getUserInformation, mouseOverPointer} from "@scripts/Scripts";
import { formatDate, getActiveUser, getAge, getTodayString } from "../../Script/Scripts";

export default function UserProfileUpdateForm({notify})
{

    const [id, setID] = useState(0)

    const [namaLengkap, setNamaLengkap] = useState('')
    const [username, setUsername] = useState('')
    const [gender, setGender] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmationPassword, setConfirmationPassword] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [birthdate, setBirthDate] = useState('')
    const [picture, setPicture] = useState('')

    const [passwordIsShowed, setPasswordIsShowed] = useState(true)
    const [validForm, setValidForm] = useState(false)

    const showPasswordPlaceholder = {
        true : 'Show Password',
        false : 'Hide Password'
    }

    const displayPassword = {
        false : 'text',
        true : 'password'
    }
    
    useEffect(() => {
        formValidation()
        getUser()
    }, [])


    const getUser = async () => {
        const response = await getUserInformation()
        setID(response.data.Id)
        setNamaLengkap(response.data.Nama)
        setUsername(response.data.Username)
        setGender(response.data.Gender)
        setEmail(response.data.Email)
        setNumber(response.data.Number)
        setBirthDate(formatDate(response.data.BirthDate))
        setPicture(response.data.Picture)
        console.log(response.d)
    }
    

    const updateUserData = async () => {
        if(!formValidation()) {window.alert('Fill the blank field'); return}

        const searchQuery = `
                                {
                                    "Id" : ${id},
                                    "Username" : "${getActiveUser()}",
                                    "Password" : "${confirmationPassword}"
                                }
                            `
        const query =  `{
                            "Username" : "${username}",
                            "Password" : "${newPassword}",
                            "Nama" : "${namaLengkap}",
                            "Age" : ${getAge(birthdate)},
                            "Gender" : "${gender}",
                            "Picture" : "${picture}",
                            "BirthDate" : "${birthdate}",
                            "Email" : "${email}",
                            "Number" : "${number}"
                        }`

        const formData = new FormData();
        formData.append('oldUser', searchQuery);
        formData.append('newUserData', query);

        console.log(searchQuery)
        console.log(query)

        const response = await axios.post('https://localhost:7115/User/Update', formData)
        notify(response.data.status, response.data.message)
        console.log(response)

    }

    const formValidation = (e = 'ok') => {
        if(!namaLengkap || !username || !newPassword || !e)
        {
            notify('empty')
            return false
        }
        else notify('ok')

        return true
    }

    // HANDLE ON CHANGE VALUE
    const onValueChange = (e, func) => {
        func(e)
        formValidation(e)
    }

    return(
        <div className="user-profile-update-container">
            <form action="">
                <label  htmlFor="name">Nama Lengkap</label>
                <input  type="text" 
                        id="name" value={namaLengkap} 
                        onChange={(e) => onValueChange(e.target.value, setNamaLengkap)}/>

                <label  htmlFor="username">Username</label>
                <input  type="text" 
                        id="username" value={username}
                        onChange={(e) => onValueChange(e.target.value, setUsername)}/>

                <label  htmlFor="">New Password</label>
                <input  type={displayPassword[passwordIsShowed]} 
                        id="password" value={newPassword}
                        onChange={(e) => onValueChange(e.target.value, setNewPassword)}/>

                <label  htmlFor="">Confirm Password</label>
                <input  type={displayPassword[passwordIsShowed]}
                        id="password-confirmation" value={confirmationPassword}
                        onChange={(e) => onValueChange(e.target.value, setConfirmationPassword)}/>

                <span   className="password-show-btn"
                        onMouseOver={(e) => mouseOverPointer(e)}
                        onClick={(e) => setPasswordIsShowed(!passwordIsShowed)}
                        >{showPasswordPlaceholder[passwordIsShowed]}</span>

                <div className="form-wrapper">
                    <label htmlFor="">Gender</label>
                    <select name="" id="" value={gender}
                            onChange={(e) => onValueChange(e.target.value, setGender)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <label htmlFor="birthdate" >Birthdate</label>
                    <input  id="birthdate" type='date' 
                            placeholder="Today" value={birthdate} 
                            max={getTodayString()}
                            onChange={(e) => onValueChange(e.target.value, setBirthDate)}/>
                </div>
                
                <label htmlFor="email" >Email</label>
                <input  id="email" 
                        type='text' value={email}
                        onChange={(e) => onValueChange(e.target.value, setEmail)}/>

                <label htmlFor="number">Number</label>
                <input  id="number" 
                        type='text' 
                        value={number}
                        onChange={(e) => onValueChange(e.target.value, setNumber)}/>   

                <label htmlFor="picture">Profile Picture</label>
                <input  id="picture" 
                        type='text' 
                        value={picture}
                        onChange={(e) => onValueChange(e.target.value, setPicture)}/>
            </form>

            <div className="user-update-btn-wrapper">
                <button className="user-profile-save-btn"
                        onClick={updateUserData}>Save</button>
                <button className="user-profile-cancel-btn"
                        onClick={() => history.back()}>Cancel</button>
            </div>
        </div>
    );
}
