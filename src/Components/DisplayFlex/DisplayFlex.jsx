import React from 'react'
import { Children } from 'react'

export default function DisplayFlex({ paddingBottom, borderColor, borderBottomWidth, children, marginTop, marginLeft, marginBottom, marginRight, backgroundColor }) {
    return (
        <div className='flex' style={{
            marginTop: marginTop,
            marginLeft: marginLeft,
            marginBottom: marginBottom,
            marginRight: marginRight,
            backgroundColor: backgroundColor,
            borderBottomWidth: borderBottomWidth,
            borderColor: borderColor,
            paddingBottom: paddingBottom
        }}>
            {children}
        </div>
    )
}
