import React from 'react'
import "./Contact.css"
import TextLabel from '../../Components/TextLabel/TextLabel'
import DisplayFlex from '../../Components/DisplayFlex/DisplayFlex'
import ImageContainer from '../../Components/ImageContainer/ImageContainer'
import { contact_image } from '../../assets/assets_frontend/assets'
export default function Contact() {
    const BorderButton = () => {
        return (
            <div className="borderButton">
                <button>Explore Jobs</button>
            </div>
        )
    }
    return (
        <div className='contact'>
            <TextLabel
                text={"CONTACT"}
                color={"gray"}
                fontSize={30}
                fontWeight={"400"}
                span={"US"}
                style={{ color: "black", fontWeight: "600" }}
                textAlign={'center'}
                marginBottom={20}
            />
            <DisplayFlex marginTop={20}>
                <ImageContainer source={contact_image} width={450} height={450} />
                <div className="text" style={{ marginLeft: 12 }}>
                    <TextLabel
                        text={"Our OFFICE"}
                        color={"#4B5563"}
                        fontWeight={"600"}
                        fontSize={24}
                        marginBottom={12}
                    />
                    <TextLabel
                        text={`54709 Willms Station`}
                        color={"#4B5563"}
                        fontWeight={"400"}
                        fontSize={18}
                        br={true}
                        text2={'Suite 350, Washington, USA'}
                        marginBottom={5}
                        marginTop={20}

                    />
                    <TextLabel
                        text={`Tel: (415) 555‑0132`}
                        color={"#4B5563"}
                        fontWeight={"400"}
                        fontSize={18}
                        br={true}
                        text2={'Email: greatstackdev@gmail.com'}
                        marginTop={20}

                    />
                    <TextLabel
                        text={"Careers at PRESCRIPTO"}
                        color={"#4B5563"}
                        fontWeight={"600"}
                        fontSize={24}
                        marginBottom={5}
                        marginTop={20}
                    />
                    <TextLabel
                        text={`Learn more about our teams and job openings.`}
                        color={"#4B5563"}
                        fontWeight={"400"}
                        fontSize={18}
                        marginTop={20}
                    />
                    <BorderButton />
                </div>

            </DisplayFlex>
        </div>
    )
}
