import React from 'react'
import "./MyAppointments.css"
import TextLabel from '../../Components/TextLabel/TextLabel'
import DisplayFlex from '../../Components/DisplayFlex/DisplayFlex'
import ImageContainer from '../../Components/ImageContainer/ImageContainer'
import { doctors } from '../../assets/assets_frontend/assets'
export default function MyAppointments() {
    const DoContainer = ({ source, name, designation, Address, date, borderColor }) => {
        return (
            <DisplayFlex marginTop={40} marginLeft={10} borderBottomWidth={2} borderColor={"#D1D1D1"} paddingBottom={15} >
                <ImageContainer source={source} width={180} height={182} background={"#EAEFFF"} />
                <div >
                    <TextLabel
                        text={name}
                        fontSize={22}
                        fontWeight={"500"}
                        color={"#262626"}

                    />
                    <TextLabel
                        text={designation}
                        fontSize={18}
                        fontWeight={"400"}
                        color={"#4B5563"}
                        marginBottom={15}

                    />
                    <TextLabel
                        text={"Address:"}
                        fontSize={18}
                        fontWeight={"500"}
                        color={"#262626"}
                        marginBottom={5}
                    />
                    <TextLabel
                        text={Address}
                        fontSize={18}
                        fontWeight={"400"}
                        color={"#4B5563"}
                        width={"80%"}

                    />
                    <TextLabel
                        text={"Date & Time"}
                        fontSize={18}
                        fontWeight={"500"}
                        color={"#262626"}
                        marginBottom={5}
                        span={date}
                        marginTop={20}
                    />
                </div>
            </DisplayFlex>
        )
    }
    return (
        <div>
            <div className='border-b-2 pb-3 mt-12'>
                <TextLabel
                    text={"My appointments"}
                    fontSize={24}
                    fontWeight={"500"}
                    color={"#4B5563"}
                />

            </div>
            {doctors.slice(0, 3).map((item, index) => {
                return (
                    <DoContainer
                        source={item?.image}
                        name={item?.name}
                        designation={item?.speciality}
                        Address={"57th Cross, Richmond Circle, Church Road, London"}
                        date={": 25, July, 2024 |  8:30 PM"}

                    />
                )
            })}
        </div>
    )
}
