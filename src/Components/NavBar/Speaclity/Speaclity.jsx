import React from 'react'
import "./Speaclity.css"
import Title from '../Title/Title'
import { specialityData } from '../../../assets/assets_frontend/assets'

export default function Speaclity() {
    return (
        <div className='Speaclity'>
            <Title title={"Find by Speciality "} subTitle={`Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.`} />
            <div className="special">
                {specialityData.map((key, value) => {
                    return (
                        <ul>
                            <img src={key?.image} alt="" />
                            <li>{key?.speciality}</li>
                        </ul>
                    )
                })}
            </div>

        </div>
    )
}
