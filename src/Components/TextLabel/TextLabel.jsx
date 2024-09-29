import React from 'react'

export default function TextLabel({ textDecoration, span2Style, span2, spanBr, text2, br, lineHeight, width, style, alignSelf, text, fontSize, color, fontWeight, marginTop, marginLeft, marginBottom, textAlign, span }) {
    return (
        <div>
            <p style={{
                fontSize: fontSize ? fontSize : 16,
                color: color ? color : "#171717",
                fontWeight: fontWeight ? fontWeight : "400",
                marginTop: marginTop && marginTop ,
                marginLeft: marginLeft ? marginLeft : 12,
                marginBottom: marginBottom && marginBottom,
                textAlign: textAlign && textAlign,
                alignSelf: alignSelf && alignSelf,
                width: width && width,
                textDecoration: textDecoration && textDecoration,
                lineHeight: lineHeight && lineHeight
            }}>{text} {br && <br />} {text2 && text2} {span && <span style={style}>{span}{spanBr && <br />}{span2 && <span style={span2Style}>{span2} </span>} </span>}</p>

        </div>
    )
}
