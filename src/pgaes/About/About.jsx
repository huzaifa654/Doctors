import React from 'react'
import "./About.css"
import TextLabel from '../../Components/TextLabel/TextLabel'
import { about_image } from '../../assets/assets_frontend/assets'

export default function About() {
    return (
        <div className='about'>
            <TextLabel
                text={"ABOUT"}
                color={"gray"}
                fontSize={30}
                fontWeight={"400"}
                textAlign={"center"}
                alignSelf={"center"}
                span={"US"}
                style={{ color: "black", fontWeight: "600" }}
                marginLeft={80} />
            <div className="infoContainer">
                <div className="image">
                    <img src={about_image} alt="" style={{ width: 600, height: 320, alignSelf: "center" }} />
                </div>
                <div className="col">
                    <TextLabel
                        text={"Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records."}
                        color={"#4B5563"}
                        width={"70%"}
                        marginLeft={30}
                        marginBottom={5}
                        lineHeight={1.5}
                        marginTop={20}

                    />
                    <TextLabel
                        text={"Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way"}
                        color={"#4B5563"}
                        width={"70%"}
                        marginLeft={30}
                        marginBottom={5}
                        lineHeight={1.5}
                        marginTop={20}

                    />
                    <TextLabel
                        text={"Our Vision"}
                        fontWeight={"700"}
                        marginLeft={20}
                        marginBottom={1.5}
                        marginTop={20}
                    />
                    <TextLabel
                        text={"Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it."}
                        color={"#4B5563"}
                        width={"70%"}
                        marginLeft={30}
                        lineHeight={1.5}
                        marginTop={20}
                    />

                </div>
            </div>
        </div>
    )
}
