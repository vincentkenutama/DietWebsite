import SignInButton from "./SignInButton";
import axios from "axios";
import '../Styles/LoginPage.css'
import { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";

export default function SignInForm({status})
{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if(!document.cookie) return;

        let cookie = document.cookie.split(/[=;\s]+/)

        const userIndex = cookie.findIndex((element) => element == 'username')
        const passIndex = cookie.findIndex((element) => element == 'password')

        setUsername((userIndex == -1) ? '' : cookie[userIndex + 1]);
        setPassword((passIndex == -1) ? '' : cookie[passIndex + 1]);
        
        console.log(cookie, cookie.findIndex((element) => element == 'username'))
        // if(document.cookie) console.log(document.cookie.split('=').)
    }, [document.cookie])

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const saveUserInformation = () => {
        document.cookie = `username=${username}`
        document.cookie = `password=${password}` 
    }

    const LoginOnClick = async (e) => {
        e.preventDefault();
        if(username == '' || password == '') {status('empty'); return;}
        
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        const response = await axios.post('https://localhost:7115/Login/Signin', formData);
        let json_data = response.data;
        
        switch(json_data.Status){
            case 'Wrong Password':
                status('password');
                break;
            case 'Valid':
                status('ok');
                saveUserInformation();
                navigate('/login/redirect');
                break;
            case 'Not Found':
                status('both');
                break;
            case 'Wrong Username':
                status('username');
                break;
            default :
                status('ok')
                break;
        }
        // console.log(json_data.status)
    }

    const handleShowPassword = (e) => {
        e.target.textContent = (e.target.textContent == 'Show') ? 'Hide' : 'Show';
        setPasswordVisibility(!passwordVisibility)
    }


    return(
        <div className="sign-in-container">
            <span className="sign-in">Sign In</span>
            <span className="sign-text">Masuk untuk mengakses data</span>
            <form action="">
                <input  type="text" 
                        className="input-text" 
                        placeholder="Username" 
                        onChange={handleUsernameChange}
                        value={username}
                        />
                <div className="password-container">
                    <input  type={passwordVisibility ? 'text' : 'password'} 
                            className="input-text input-password" 
                            placeholder="Password" 
                            onChange={handlePasswordChange}
                            value={password}
                            />
                    <p className = 'show-password'onClick={handleShowPassword} onMouseOver={(e) => e.target.style.cursor = 'pointer'}>Show</p>
                </div>
                {/* <span>SHOW PASSWORD</span> */}
                <button onClick={LoginOnClick}
                        onMouseOver={(e) => e.target.style.cursor = 'pointer'}>Sign In</button>
            </form>
            <span>Belum Bergabung? <a onMouseOver={(e) => e.target.style.cursor = 'pointer' } onClick={() => {navigate('/signup')}}>Daftar Sekarang</a></span>
        </div>
    );
}