import React from 'react'
import "./MyProfile.css"
import DisplayFlex from '../../Components/DisplayFlex/DisplayFlex'
import ImageContainer from '../../Components/ImageContainer/ImageContainer'
import { profile_pic2, upload_area } from '../../assets/assets_frontend/assets'
import TextLabel from '../../Components/TextLabel/TextLabel'
import CustomButton from '../../Components/CustomButton/CustomButton'
export default function MyProfile() {
    return (
        <div className='mt-12'>
            <div className="border-b-2 pb-2 w-1/2">
                <DisplayFlex>
                    <ImageContainer source={profile_pic2} width={160} height={160} />
                    <ImageContainer source={upload_area} width={160} height={160} marginLeft={20} />
                </DisplayFlex>
                <TextLabel
                    text={"Edward Vincent"}
                    fontWeight={"500"}
                    color={"#1F2937"}
                    fontSize={32}
                />
            </div>
            <TextLabel
                text={"CONTACT INFORMATION"}
                fontWeight={"400"}
                textDecoration={"underline"}
                fontSize={16}
                marginTop={20}
                color={"#797979"}
            />
            <TextLabel
                text={"Email id:"}
                color={"#4B5563"}
                fontWeight={"400"}
                fontSize={18}
                marginTop={10}
                span={"richardjameswap@gmail.com"}
                style={{ color: "#3C96FF", marginLeft: 12 }}
            />
            <TextLabel
                text={"Phone:"}
                color={"#4B5563"}
                fontWeight={"400"}
                fontSize={18}
                marginTop={10}
                span={"+1  123 456 7890"}
                style={{ color: "#3C96FF", marginLeft: 12 }}
            />
            <TextLabel
                text={"Address:"}
                color={"#4B5563"}
                fontWeight={"400"}
                fontSize={18}
                marginTop={10}
                span={"57th Cross, Richmond"}
                spanBr={true}
                span2={"Circle, Church Road, London"}
                style={{ marginLeft: 12, }}
                span2Style={{ marginLeft: 80, textalign: "center" }}
            />
            <TextLabel
                text={"BASIC INFORMATION"}
                fontWeight={"400"}
                textDecoration={"underline"}
                fontSize={16}
                marginTop={40}
                color={"#797979"}
            />

            <TextLabel
                text={"Gender:"}
                color={"#4B5563"}
                fontWeight={"400"}
                fontSize={18}
                marginTop={10}
                span={"Male"}
                style={{ marginLeft: 12 }}
            />
            <TextLabel
                text={"Birthday:"}
                color={"#4B5563"}
                fontWeight={"400"}
                fontSize={18}
                marginTop={10}
                span={"20 July, 2024"}
                style={{ marginLeft: 12 }}
            />
            <DisplayFlex>
                <CustomButton
                    text={"Edit"}
                    fontSize={18}
                    fontWeight={"400"}
                    textColor={"#4B5563"}
                    borderRadius={47}
                    borderColor={"#4B5563"}
                    width={127}
                    borderWidth={2}
                    marginTop={40}
                    marginLeft={10}
                />
                <CustomButton
                    text={"Save information"}
                    fontSize={18}
                    fontWeight={"400"}
                    textColor={"#4B5563"}
                    borderRadius={47}
                    borderColor={"#4B5563"}
                    padding={16}
                    paddingLeft={30}
                    paddingRight={30}
                    borderWidth={2}
                    marginTop={40}
                    marginLeft={12}
                />
            </DisplayFlex>
        </div>
    )
}
