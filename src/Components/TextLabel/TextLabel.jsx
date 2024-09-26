import React from 'react'

export default function TextLabel({ text, fontSize, color, fontWeight, marginTop, marginLeft, marginBottom, textAlign }) {
    return (
        <div>
            <p style={{
                fontSize: fontSize ? fontSize : 16,
                color: color ? color : "#171717",
                fontWeight: fontWeight ? fontWeight : "400",
                marginTop: marginTop ? marginTop : 20,
                marginLeft: marginLeft ? marginLeft : 12,
                marginBottom: marginBottom && marginBottom,
                textAlign: textAlign && textAlign,
                alignSelf: alignSelf && alignSelf
            }}>{text}</p>
        </div>
    )
}
