import { useEffect, useState } from 'react';
import '../Styles/SignUpPage.css'
import SignInNotify from '../Component/SignInNotify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { mouseOverPointer } from '../Script/Scripts';

export default function SignUpPage()
{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [notMatch, setNotMatch] = useState('matching')
    const [fullName, setFullName] = useState('')
    const [age, setAge] = useState(0)
    const [gender, setGender] = useState('')
    const [notify, setNotify] = useState('ok')

    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
        cleanForm()
    }, [])

    const cleanForm = () => {
        setUsername('')
        setPassword('')
        setConfirmPassword('')
        setFullName('')
        setAge(18)
        setNotMatch('matching')
        setNotify('ok')

    }

    const onChange = (e, target) => {
        target(e)
    }

    const setAgeForm = (e) => {
        let data = e.target.value
        setAge((data < 0) ? 0 : (data > 100) ? 100 : data)
        isEmpty(e.target.value)
    }

    const setPasswordI = (e) => {
        setPassword(e.target.value);
        isEmpty(e.target.value); 
        setNotMatch((e.target.value != confirmPassword) ? 'not-matching' : 'matching');
    }

    const setConfirmationPassword = (e) => {
        setConfirmPassword(e.target.value);
        isEmpty(e.target.value)
        setNotMatch((e.target.value != password) ? 'not-matching' : 'matching');
    }

    const selectGender = (e) => {
        setGender(e.target.value)
        isEmpty(e.target.value)
    }

    const isEmpty = (value) => {
        if(!username || !password || !confirmPassword || !fullName || !age || !gender || !value) {setNotify('empty'); return true;}
        else setNotify('ok') 
        
        return false;
    }

    const toLogin = () => {
        navigate('/login')
    }
    const submitSignUp = async () => {
        let form = new FormData()

        if(isEmpty('ok')) return;

        form.append('username', username);
        form.append('password', password);
        form.append('nama', fullName);
        form.append('age', age);
        form.append('gender', gender);

        await axios.post('https://localhost:7115/User/SignUp', form)
        .then((res) => {
            // console.log(res)
            if(res.data.status == 'ok') {setNotify('ok'); navigate('/redirect/signup')}
            else setNotify(res.data.status)
        })
        .catch((e) => {
            setNotify('Connection Error')
            console.log(e)
        })
    }

    const displayPassword = {
        true : 'text',
        false : 'password'
    }

    const textForShowPass = {
        true : 'Hide',
        false : 'Show'
    }


    return(  
        <div className="sign-up-container">
            <SignInNotify status={notify}/> 
            
            <span className="sign-in">Sign Up</span>
            <form action="" className='sign-up-form'>
                {/* Username */}
                <label htmlFor="username">Username</label>
                <input className='sign-up-input' id='username' type="text" onChange={(e) => {isEmpty(e.target.value);     setUsername(e.target.value); }} value={username}/>

                {/* Password and Confirmation */}
                <label htmlFor="password">Password</label>
                <input  className='sign-up-input' 
                        type={displayPassword[showPassword]} 
                        name="password" id="" 
                        onChange={setPasswordI} 
                        value={password}/>

                <label htmlFor="confirmPassword">Confirmation Password</label>
                <input  className='sign-up-input' 
                        type={displayPassword[showPassword]} 
                        name="confirmPassword" 
                        onChange={setConfirmationPassword} 
                        value={confirmPassword}/>

                <span   className='show-password true' 
                        onMouseOver={(e) => mouseOverPointer(e)}
                        onClick={() => onChange(!showPassword, setShowPassword)}
                        >{textForShowPass[showPassword]}</span>

                <span className={`pass-not-match ${notMatch}`}>Password doesn't match</span>

                {/* Nama Lengkap */}
                <label htmlFor="name">Full Name</label>
                <input className='sign-up-input' type="text" name="name"  onChange={(e) => {isEmpty(e.target.value); setFullName(e.target.value);}} value={fullName} />

                {/* Umur */}
                <label htmlFor="">Age</label>
                <input className='sign-up-input' type="number" onChange={setAgeForm} value={age} />

                {/* Jenis Kelamin */}
                <label htmlFor="">Gender</label>
                <div className='sign-up-gender-container'>
                    <input type="radio" name='gender' value='Male' onChange={selectGender}/>
                    <span className='gender-selector'>Male</span>
                    <input type="radio" name='gender' value='Female' onChange={selectGender}/>
                    <span className='gender-selector'>Female</span>
                </div>

            </form>
            
            <button onClick={submitSignUp} 
                    className='sign-up-btn'
                    onMouseOver={(e) => e.target.style.cursor = 'pointer'}>Sign Up</button>
            <span>Sudah memiliki akun? <a href="" onClick={toLogin}>Login</a></span>
        </div>
    );
}