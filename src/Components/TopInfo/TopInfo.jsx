import React from 'react'
import "./TopInfo.css"
export default function TopInfo({ source, speciality, name, onClick }) {
    return (
        <div className='topContainer' onClick={onClick}>
            <ul>
                <div className="imageContainer">
                    <img src={source} alt="" />
                </div>
                <div className="docinfo">
                    <h3 className='name'>{name}</h3>
                    <li className='speciality'>{speciality}</li>
                </div>
            </ul>
        </div>
    )
}
