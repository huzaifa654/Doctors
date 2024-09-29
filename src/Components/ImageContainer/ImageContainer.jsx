import React from 'react'

export default function ImageContainer({ source, width, height, marginLeft, background }) {
    return (
        <div style={{ width: width, marginLeft: marginLeft, background: background }}>
            <img src={source} alt="" style={{ width: width, height: height }} />
        </div>
    )
}
