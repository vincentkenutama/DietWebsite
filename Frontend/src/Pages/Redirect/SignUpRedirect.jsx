import { useEffect } from 'react'
import '../../Styles/SignUpPage.css'
import { useNavigate } from 'react-router-dom'

export default function SignUpRedirect() {

    const navigate = useNavigate()

    useEffect(() => {
        delayedNavigate()
    })

    const delayedNavigate = () => {
        setTimeout(() => {
            navigate('/login')
        }, 3000)
    }

    return(
        <div className="sign-up-container">
            <span className="sign-in">Sign Up</span>
            <span>Anda telah berhasil mendaftar di Diet Website, halaman akan dikembalikan dalam 3 detik</span>
        </div>
    )
}