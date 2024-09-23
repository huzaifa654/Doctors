import React from 'react'
import './Home.css'
import Hero from '../../Components/NavBar/Hero/Hero'
import Speaclity from '../../Components/NavBar/Speaclity/Speaclity'
import TopDoctors from '../../Components/TopDoctors/TopDoctors'
import BookAppointment from '../../Components/BookAppointment/BookAppointment'
import Footer from '../../Components/Footer/Footer'

export default function Home() {
    return (
        <div className='home'>
            <Hero />
            <Speaclity />
            <TopDoctors />
            <BookAppointment />
            <Footer />
            <div className='lastPara'>
                <p>Copyright © 2024 GreatStack - All Right Reserved.</p>
            </div>
        </div>
    )
}
