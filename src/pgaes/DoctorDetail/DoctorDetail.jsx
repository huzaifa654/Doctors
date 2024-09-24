import React from 'react'
import { useLocation } from 'react-router-dom';
import "./DoctorDetail.css"
import { expIcon, tick_logo } from '../../assets/assets_frontend/assets';
import { data } from 'autoprefixer';
export default function DoctorDetail() {
    const location = useLocation();
    const { doctor } = location.state;  // Access the passed doctor object
    const Data = [
        {
            day: "MON",
            date: 10
        },
        {
            day: "TUE",
            date: 11
        },
        {
            day: "WED",
            date: 12
        },
        {
            day: "THU",
            date: 13
        },
        {
            day: "FRI",
            date: 14
        },
        {
            day: "SAT",
            date: 15
        },
        {
            day: "SUN",
            date: 16
        },
    ]
    return (
        <div className="docs">
            <div className='docDetail'>
                <div className="docImage">
                    <img src={doctor?.image} alt="" />
                </div>
                <div className='inline-block'>
                    <div className="docDescription">
                        <div className="docname">
                            <h1>{doctor?.name}</h1>
                            <img src={tick_logo} alt="" />
                        </div>
                        <div className="deignation">
                            <p>{doctor?.speciality}</p>
                            <div className="experince">{doctor?.experience}</div>
                        </div>
                        <div className="about">
                            <p>About</p>
                            <img src={expIcon} alt="" />
                        </div>
                        <p className='docAbout'>{doctor?.about}</p>
                        <p className='appoint' > Appointment fee: <span className='highlightedText'>{doctor?.fees}</span></p>
                    </div>
                    <div className="bookingContainer">
                        <h3 className='booking'>Booking slots</h3>
                    </div>
                    <div className='slots'>
                        {Data.map((item, index) => {
                            return (
                                <div className="bookingSlots">
                                    <div className="inline-block">
                                        <p className='day'>{item?.day}</p>
                                        <p className='date'>{item?.date}</p>
                                    </div>
                                </div>
                            )
                        })}


                    </div>

                </div>

            </div>
        </div>
    )
}
