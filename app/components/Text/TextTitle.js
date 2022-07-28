import React from 'react'
import { StyleSheet, Text } from 'react-native'

export const TextTitle = ({addStyle, ...props}) => {
  return (
    <>
        <Text style={[getTextStyle(props.style), addStyle ? addStyle : null]} >{props.texto}</Text>
    </>
  )
}

const getTextStyle = (style) => {
    switch (style) {
        case 'txtTitle':
            return{
                fontSize: 16,
                color: 'black'
            }
    
        default:
            break;
    }
}