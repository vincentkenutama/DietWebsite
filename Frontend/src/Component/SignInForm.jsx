import SignInButton from "./SignInButton";
import axios from "axios";
import '../Styles/LoginPage.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignInForm()
{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const LoginOnClick = async (e) => {
        e.preventDefault();
        if(username == '' || password == '') return;
        
        const response = await axios.get(`https://localhost:7115/Login/Index?username=${username}&password=${password}`, {
            headers: {
            }
        })

        console.log(response)
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
                <input type="text" className="input-text" placeholder="Username" onChange={handleUsernameChange}/>
                <div className="password-container">
                    <input type={passwordVisibility ? 'text' : 'password'} className="input-text input-password" placeholder="Password" onChange={handlePasswordChange}/>
                    <p className = 'show-password'onClick={handleShowPassword} onMouseOver={(e) => e.target.style.cursor = 'pointer'}>Show</p>
                </div>
                {/* <span>SHOW PASSWORD</span> */}
                <button onClick={LoginOnClick}>Sign In</button>
            </form>
            <span>Belum Bergabung? <a onMouseOver={(e) => e.target.style.cursor = 'pointer' } onClick={() => {navigate('/signup')}}>Daftar Sekarang</a></span>
        </div>
    );
}