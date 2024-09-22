import React from 'react'
import Title from '../NavBar/Title/Title'
import { doctors } from '../../assets/assets_frontend/assets'

export default function TopDoctors() {
    return (
        <div className='TopDoctors'>
            <Title title={"Top Doctors to Book"} subTitle={"Simply browse through our extensive list of trusted doctors."} />
            <div className="TopInfo">
                {doctors.map((key, value) => {
                    return (
                        <ul>
                            <img src={key?.image} alt="" />
                            <h3>{key?.name}</h3>
                            <li>{key?.speciality}</li>

                        </ul>
                    )
                })}
            </div>
        </div>
    )
}
