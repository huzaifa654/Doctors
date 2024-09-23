import React, { useState } from 'react'
import './Doctores.css'
import { useParams } from 'react-router-dom'
import TopInfo from '../../Components/TopInfo/TopInfo'
import { doctors } from '../../assets/assets_frontend/assets'
export default function Doctores() {
    const { speciality } = useParams()
    const [activeTab, setActiveTab] = useState("General physician")
    const FilterData = doctors.filter((data) => data?.speciality == activeTab)
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
    const Data = [
        { name: "General physician" },
        { name: "Gynecologist" },
        { name: "Dermatologist" },
        { name: "Pediatricians" },
        { name: "Neurologist" },
        { name: "Gastroenterologist" }
    ]
    return (
        <div className='Doctores'>
            <div className='child'>
                <p className='browsePara'>Browse through the doctors specialist.</p>
                <div className="brwoseContainer">
                    {Data.map((item, value) => {
                        return (
                            <div className={activeTab == item?.name ? "brwoseContentBg" : "brwoseContent"} onClick={() => setActiveTab(item?.name)}>
                                <p>{item?.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="doctorsContainer">
                {FilterData.map((item, value) => {
                    return (
                        <div className='docinfocontainer'>
                            <TopInfo name={item?.name} source={item?.image} speciality={item?.speciality} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
