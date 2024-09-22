import React from 'react'
import "./Title.css"
export default function Title({ title, subTitle }) {
    return (
        <div className='title'>
            <h2>{title} </h2>
            <p>{subTitle}</p>
        </div>
    )
}
