import React, { useState } from 'react'
import "./Login.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const notify = () => toast.error("Plaese Login!");
    const navigate = useNavigate()
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const handleLogin = () => {
        if (Email == "" && Password == "") {
            toast.error("Plaese Enter All Fields!");
        } else if (Password == "") {
            toast.error("Plaese Enter Password!");
        } else if (Email == "") {
            toast.error("Plaese Enter Email!");
        } else {
            toast.success("Login Successfully")
            navigate('/')

        }
    }

    return (
        <div className='login'>
            <div className="LoginContainer">
                <div style={{ marginLeft: 20 }}>
                    <h2>Login</h2>
                    <p className='loginText'>Please login to book appointment</p>
                    <p className='emailText'>Email</p>
                    <input className='input' type="Email" onChange={(e) => setEmail(e?.target?.value)} value={Email} />
                    <p className='emailText'  >Password</p>
                    <input className='input' type="Password" onChange={(e) => setPassword(e?.target?.value)} value={Password} />
                    <button className='loginBtn' onClick={handleLogin}>Login</button>
                    <p className='bottomText'>Already have an account?<span className='highlight'>Login here</span> </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
