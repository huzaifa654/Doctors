import React from 'react'
import './Home.css'
import Hero from '../../Components/NavBar/Hero/Hero'
import Speaclity from '../../Components/NavBar/Speaclity/Speaclity'
import TopDoctors from '../../Components/TopDoctors/TopDoctors'

export default function Home() {
    return (
        <div>
            <Hero />
            <Speaclity />
            <TopDoctors />
        </div>
    )
}
