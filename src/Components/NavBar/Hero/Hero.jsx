import React from 'react'
import "./Hero.css"
import { arrow_icon, group_profiles, header_img } from '../../../assets/assets_frontend/assets'

export default function Hero() {
    return (
        <div className='hero'>
            <div className='appoint'>
                <h1>Book Appointment <br />With Trusted Doctors</h1>
                <div className="info">
                    <img src={group_profiles} alt="" />
                    <p>Simply browse through our extensive list of trusted doctors,<br />
                        schedule your appointment hassle-free.</p>
                </div>
                <button className='whitebtn'>Book appointment <img src={arrow_icon} alt="" /></button>
            </div>
            <img src={header_img} alt="" />
        </div>
    )
}
