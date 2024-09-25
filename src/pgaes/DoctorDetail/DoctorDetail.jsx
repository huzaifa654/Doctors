import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import "./DoctorDetail.css"
import { expIcon, tick_logo } from '../../assets/assets_frontend/assets';
import { data } from 'autoprefixer';
export default function DoctorDetail() {
    const location = useLocation();
    const { doctor } = location.state;  // Access the passed doctor object
    const [activeTab, setActiveTab] = useState('MON')
    const Data = [
        {
            day: "MON",
            date: 10,
            time: [
                { timeSlot: "8:00 am" },
                { timeSlot: "8:30 am" },
                { timeSlot: "9:00 am" },
                { timeSlot: "9:30 am" },
                { timeSlot: "10:00 am" },
                { timeSlot: "10:30 am" },
                { timeSlot: "11:00 am" },
                { timeSlot: "11:30 am" },
            ]
        },
        {
            day: "TUE",
            date: 11,
            time: [
                { timeSlot: "8:00 am" },
                { timeSlot: "8:30 am" },
                { timeSlot: "9:00 am" },
                { timeSlot: "9:30 am" },
                { timeSlot: "10:00 am" },
                { timeSlot: "10:30 am" },
                { timeSlot: "11:00 am" },
                { timeSlot: "11:30 am" },
            ]
        },
        {
            day: "WED",
            date: 12,
            time: [
                { timeSlot: "8:00 am" },
                { timeSlot: "8:30 am" },
                { timeSlot: "9:00 am" },
                { timeSlot: "9:30 am" },
                { timeSlot: "10:00 am" },
                { timeSlot: "10:30 am" },
                { timeSlot: "11:00 am" },
                { timeSlot: "11:30 am" },
            ]
        },
        {
            day: "THU",
            date: 13,
            time: [
                { timeSlot: "8:00 am" },
                { timeSlot: "8:30 am" },
                { timeSlot: "9:00 am" },
                { timeSlot: "9:30 am" },
                { timeSlot: "10:00 am" },
                { timeSlot: "10:30 am" },
                { timeSlot: "11:00 am" },
                { timeSlot: "11:30 am" },
            ]
        },
        {
            day: "FRI",
            date: 14,
            time: [
                { timeSlot: "8:00 am" },
                { timeSlot: "8:30 am" },
                { timeSlot: "9:00 am" },
                { timeSlot: "9:30 am" },
                { timeSlot: "10:00 am" },
                { timeSlot: "10:30 am" },
                { timeSlot: "11:00 am" },
                { timeSlot: "11:30 am" },
            ]
        },
        {
            day: "SAT",
            date: 15,
            time: [
                { timeSlot: "8:00 am" },
                { timeSlot: "8:30 am" },
                { timeSlot: "9:00 am" },
                { timeSlot: "9:30 am" },
                { timeSlot: "10:00 am" },
                { timeSlot: "10:30 am" },
                { timeSlot: "11:00 am" },
                { timeSlot: "11:30 am" },
            ]
        },
        {
            day: "SUN",
            date: 16,
            time: [
                { timeSlot: "8:00 am" },
                { timeSlot: "8:30 am" },
                { timeSlot: "9:00 am" },
                { timeSlot: "9:30 am" },
                { timeSlot: "10:00 am" },
                { timeSlot: "10:30 am" },
                { timeSlot: "11:00 am" },
                { timeSlot: "11:30 am" },
            ]
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
                                <div className='inline-block'>
                                    <div className="bookingSlots" style={{ backgroundColor: activeTab == item?.day ? "#5F6FFF" : "white" }} onClick={() => setActiveTab(item?.day)}>
                                        <div className="inline-block" style={{ color: activeTab == item?.day ? "white" : "black" }}>
                                            <p className='day'>{item?.day}</p>
                                            <p className='date'>{item?.date}</p>
                                        </div>

                                    </div>
                                    <div className="timeSlots">
                                        {activeTab == item?.day && item?.time.map((item, index) => {
                                            return (
                                                <div className="timeslotContainer">
                                                    <p>{item?.timeSlot}</p>
                                                </div>
                                            )
                                        })}
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
