import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, bgColor, textColor, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{alignSelf:"center",justifyContent:"center", alignItems:"center",  backgroundColor:bgColor, width:"50%", height:40, borderRadius:10, margin:20}}>
      <Text style={{color:textColor}}>
       {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton