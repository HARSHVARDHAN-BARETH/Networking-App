import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const BlueButton = ({title, backgroundColor, color, onclick}) => {
  return (
    <TouchableOpacity style={{
        width:250,
        backgroundColor:backgroundColor,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        padding:20
    }}>
        <Text style={{fontSize:24, color:color}} onPress={onclick}>{title}</Text>
    </TouchableOpacity>
  )
}

export default BlueButton