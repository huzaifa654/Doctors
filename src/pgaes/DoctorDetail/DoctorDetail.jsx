import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import "./DoctorDetail.css"
import { doctors, expIcon, tick_logo } from '../../assets/assets_frontend/assets';
import { data } from 'autoprefixer';
import TopInfo from '../../Components/TopInfo/TopInfo';
import Title from '../../Components/NavBar/Title/Title';
export default function DoctorDetail() {
    const location = useLocation();
    const { doctor } = location.state;  // Access the passed doctor object
    const [activeTab, setActiveTab] = useState('MON')
    const [activeSlot, setActiveSlot] = useState('')
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
    const FilterData = Data.find((data) => activeTab == data?.day)
    const DocFilterData = doctors.filter((data) => data?.speciality == doctor?.speciality)
    console.log("FilterData--------", FilterData)
    const navigate = useNavigate()
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

                                <div className="bookingSlots" style={{ backgroundColor: activeTab == item?.day ? "#5F6FFF" : "white" }} onClick={() => { setActiveTab(item?.day); setActiveSlot('') }}>
                                    <div className="inline-block" style={{ color: activeTab == item?.day ? "white" : "black" }}>
                                        <p className='day'>{item?.day}</p>
                                        <p className='date'>{item?.date}</p>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                    <div className="timeSlots">
                        {FilterData && FilterData?.time?.map((item, index) => {
                            return (
                                <div className="timeslotContainer" style={{ backgroundColor: activeSlot == item?.timeSlot && "#5F6FFF" }} onClick={() => setActiveSlot(item?.timeSlot)}>
                                    <p style={{ color: activeSlot == item?.timeSlot && "white" }}>{item?.timeSlot}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="appointbtn">
                        <button>Book an appointment</button>
                    </div>

                </div>

            </div>
            <div style={{ marginTop: 60 }}>
                <Title title={"Related Doctors"} subTitle={"Simply browse through our extensive list of trusted doctors."} />
            </div>
            <div className="docFilterContainer">
                {DocFilterData.map((item, index) => {
                    return (
                        <div className="docChild">
                            <TopInfo name={item?.name} source={item?.image} speciality={item?.speciality} onClick={() => navigate('/doctorDetail', { state: { doctor: item } })} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
