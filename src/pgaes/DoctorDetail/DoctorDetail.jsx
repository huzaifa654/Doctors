import React from 'react'
import { useLocation } from 'react-router-dom';
import "./DoctorDetail.css"
import { expIcon, tick_logo } from '../../assets/assets_frontend/assets';
export default function DoctorDetail() {
    const location = useLocation();
    const { doctor } = location.state;  // Access the passed doctor object
    console.log("doctor------", doctor)
    return (
        <div className="docs">
            <div className='docDetail'>
                <div className="docImage">
                    <img src={doctor?.image} alt="" />
                </div>

                <div className="docDescription">
                    <div className="docname">
                        <h1>{doctor?.name}</h1>
                        <img src={tick_logo} alt="" />
                    </div>
                    <div className="deignation">
                        <p>MBBS - General Physician</p>
                        <div className="experince">{doctor?.experience}</div>
                    </div>
                    <div className="about">
                        <p>About</p>
                        <img src={expIcon} alt="" />
                    </div>
                    <p className='docAbout'>{doctor?.about}</p>
                    <p className='appoint' > Appointment fee: <span className='highlightedText'>{doctor?.fees}</span></p>
                </div>
            </div>
            <h3>Booking slots</h3>
        </div>
    )
}
