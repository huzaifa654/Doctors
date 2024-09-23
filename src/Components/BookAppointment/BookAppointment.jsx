import React from 'react'
import "./BookAppointment.css"
import { appointment_img } from '../../assets/assets_frontend/assets'

export default function BookAppointment() {
    return (
        <div className='Book'>
            <div className="bookApoint">
                <h2>Book Appointment <br />
                    With 100+ Trusted Doctors</h2>
                <button className='whitebtn'>Create account</button>
            </div>
            <div className='docContainer'>
                <img src={appointment_img} alt="" />
            </div>
        </div>
    )
}
