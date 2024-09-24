import React from 'react'
import "./Speaclity.css"
import Title from '../Title/Title'
import { specialityData } from '../../../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

export default function Speaclity() {
    return (
        <div className='Speaclity'>
            <Title title={"Find by Speciality "} subTitle={`Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.`} />
            <div className="special">
                {specialityData.map((key, value) => {
                    return (
                        <Link to={`docters?id=${key?.speciality}`}>
                            <ul>
                                <img src={key?.image} alt="" />
                                <li>{key?.speciality}</li>
                            </ul>
                        </Link>
                    )
                })}
            </div>

        </div>
    )
}
