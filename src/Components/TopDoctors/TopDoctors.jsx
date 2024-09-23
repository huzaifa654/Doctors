import React, { useState } from 'react'
import "./TopDoctors.css"
import Title from '../NavBar/Title/Title'
import { doctors } from '../../assets/assets_frontend/assets'

export default function TopDoctors() {
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
    const togleButton = () => {

    }
    return (
        <div className='TopDoctors'>
            <Title title={"Top Doctors to Book"} subTitle={"Simply browse through our extensive list of trusted doctors."} />
            <div className="TopInfo">
                {doctors.slice(intial, final).map((key, value) => {
                    return (
                        <ul>
                            <div className="imageContainer">
                                <img src={key?.image} alt="" />
                            </div>
                            <div className="docinfo">
                                <h3 className='name'>{key?.name}</h3>
                                <li className='speciality'>{key?.speciality}</li>
                            </div>
                        </ul>
                    )
                })}
            </div>
            <div className='button'><button className='morebtn' onClick={handleMoreButton}>{final == 10 ? "more" : "less"}</button></div>
        </div>
    )
}
