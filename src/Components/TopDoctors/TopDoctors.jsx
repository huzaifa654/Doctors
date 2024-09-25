import React, { useState } from 'react'
import "./TopDoctors.css"
import Title from '../NavBar/Title/Title'
import { doctors } from '../../assets/assets_frontend/assets'
import TopInfo from '../TopInfo/TopInfo'
import { Navigate, useNavigate } from 'react-router-dom'

export default function TopDoctors() {
    const navigate = useNavigate()
    var intial = 0
    const [final, setFinal] = useState(10)
    const handleMoreButton = () => {
        if (final == 10) {
            setFinal(15)
        } else {
            setFinal(10)
        }
        // setFinal(15)
        console.log("final", final + 5)
    }

    return (
        <div className='TopDoctors'>
            <Title title={"Top Doctors to Book"} subTitle={"Simply browse through our extensive list of trusted doctors."} />
            <div className="TopInfo">
                {doctors.slice(intial, final).map((key, value) => {
                    return (
                        <TopInfo source={key?.image} name={key?.name} speciality={key?.speciality} onClick={() => navigate('/doctorDetail', { state: { doctor: key } })} />)
                })}
            </div>
            <div className='button'><button className='morebtn' onClick={handleMoreButton}>{final == 10 ? "more" : "less"}</button></div>
        </div>
    )
}
