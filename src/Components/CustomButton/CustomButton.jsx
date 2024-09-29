import React from 'react'

export default function CustomButton({ paddingRight, paddingLeft, padding, position, marginLeft, fontSize, fontWeight, borderColor, onClick, marginRight, marginBottom, marginTop, backgroundColor, borderRadius, borderWidth, text, width, textColor }) {
    return (
        <div style={{
            width: width,
            color: textColor,
            padding: padding ? padding : 10,
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            borderWidth: borderWidth && borderWidth,
            borderRadius: borderRadius,
            backgroundColor: backgroundColor && backgroundColor,
            marginTop: marginTop && marginTop,
            marginLeft: marginLeft && marginLeft,
            marginBottom: marginBottom && marginBottom,
            marginRight: marginRight && marginRight,
            borderColor: borderColor,
            fontWeight: fontWeight,
            fontSize: fontSize,
            position: position,
            paddingRight: paddingRight,
            paddingLeft: paddingLeft,

        }}
        >
            <button onClick={onClick}>{text}</button>
        </div>
    )
}
