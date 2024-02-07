import { View, Text, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const CustomTextInput = ({
    value,
    onChangeText,
    placeholder, 
    icon,
    type,
    keyboardType,
    disabled

}) => {
  return (
   <View  style={{
    alignSelf:"center", width:"85%", height:50, borderRadius:10, borderWidth:0.5, marginTop:20, paddingLeft:10, paddingRight:10, alignItems:"center", flexDirection:"row"}}>
    {icon? <Image  source={icon} style={{width:24, height:24}}/>: null}
    <TextInput disabled={disabled} keyboardType={keyboardType?keyboardType:'default'} value={value} onChangeText={txt => {onChangeText(txt)}} placeholder={placeholder} secureTextEntry={type=='password'?true:false} style={{marginLeft:10, }}/>

   </View>
  )
}

export default CustomTextInput