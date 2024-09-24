import React, { useState } from 'react'
import './Doctores.css'
import { useLocation, useParams } from 'react-router-dom'
import TopInfo from '../../Components/TopInfo/TopInfo'
import { doctors } from '../../assets/assets_frontend/assets'
export default function Doctores() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const speciality = searchParams.get('id');
    const [activeTab, setActiveTab] = useState("General physician")
    const [speaclityData, setSpeaclityData] = useState(speciality)
    const FilterData = doctors.filter((data) => speciality ? data?.speciality == speaclityData : data?.speciality == activeTab)

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
                    {speciality ?

                        Data.map((item, value) => {
                            return (
                                <div className={speaclityData && (speaclityData == item?.name) ? "brwoseContentBg" : "brwoseContent"} onClick={() => setSpeaclityData(item?.name)}>
                                    <p>{item?.name}</p>
                                </div>
                            )
                        })

                        :

                        Data.map((item, value) => {
                            return (
                                <div className={(activeTab == item?.name) ? "brwoseContentBg" : "brwoseContent"} onClick={() => setActiveTab(item?.name)}>
                                    <p>{item?.name}</p>
                                </div>
                            )
                        })


                    }

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
