import React from 'react'
import "./Footer.css"
import { logo } from '../../assets/assets_frontend/assets'

export default function Footer() {
    return (
        <div className='Footer'>
            <div className="appContent">
                <img src={logo} alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="companyContainer">
                <h3>COMPANY</h3>
                <ul>
                    <li className='compnayInfo'>Home</li>
                    <li className='compnayInfo'>About us</li>
                    <li className='compnayInfo'>Contact us</li>
                    <li className='compnayInfo'> Privacy policy</li>
                </ul>
            </div>
            <div className="companyContainer" style={{ marginRight: 65 }}>
                <h3>GET IN TOUCH</h3>
                <ul>
                    <li className='compnayInfo'>+1-212-456-7890</li>
                    <li className='compnayInfo'>greatstackdev@gmail.com</li>
                </ul>
            </div>
        </div>
    )
}
