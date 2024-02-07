import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../common/CustomTextInput'
import CustomButton from '../common/CustomButton'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from '../common/Loader'

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [badEmail, setBadEmail] = useState(false)
    const [badPassword, setBadPassword] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const login =()=>{
         setModalVisible(true)
        if (email == '') {
            setBadEmail(true)
            setModalVisible(false)
        }
        else {
            setBadEmail(false)
        }
        if (password == '') {
            setBadPassword(true)
            setModalVisible(false)
        }
        else {
            setTimeout(() => { 
                setBadPassword(false)
                getData() }, 2000)
            
        }   
    }
    const getData = async()=>{
        const conEmail = await AsyncStorage.getItem('EMAIL')
        const conPassword = await AsyncStorage.getItem('PASSWORD')
        if(email===conEmail && conPassword===password)
        {    setModalVisible(false)
             navigation.navigate('Home')
        }
        else{
            setModalVisible(false)
        }
        console.warn(conEmail,conPassword)
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor:"#afc3e3" }}>
            <Image source={require('../images/logo.png')} style={{ width: 100, height: 100, alignSelf: "center", borderRadius: 50, marginTop: 10 }} />
            <Text style={{ alignSelf: "center", marginTop: '2%', fontWeight: "bold" }}> Login</Text>
            <CustomTextInput placeholder={"Enter email"} value={email}  onChangeText={txt => { setEmail(txt)}} />
            {badEmail && (<Text style={{ color: "red", marginLeft: 30, }}>Please enter email id</Text>)}
            <CustomTextInput placeholder={"Enter password"} value={password}  type={'password'} onChangeText={txt => { setPassword(txt) }} />
            {badPassword &&(<Text style={{ color: "red", marginLeft: 30 }}>Please password</Text>)}
            <CustomButton bgColor={"#000"} title={"Login"} style={{ width: "50%" }} textColor={"#fff"} onPress={() =>  login()} />
            <Text onPress={() => {navigation.navigate("SignUp")}} style={{ fontWeight: "bold", fontSize: 20, alignSelf: "center", textDecorationLine: "underline" }}>New user? Create an account</Text>
           <Loader  modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </SafeAreaView>

    )
}

export default Login