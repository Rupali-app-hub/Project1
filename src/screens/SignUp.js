import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../common/CustomTextInput'
import CustomButton from '../common/CustomButton'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignUp = () => {
    let isValid = true;
    const navigation = useNavigation();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmpassword] = useState('')

    const [badUsername, setBadUsername] = useState(false)
    const [badEmail, setBadEmail] = useState(false)
    const [badPassword, setBadPassword] = useState(false)
    const [badconfirmPassword, setBadconfirmPassword] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(false)


    const signUp = () => {
        setButtonDisabled(true)

        if (name == '') {
            setBadUsername(true)
            setButtonDisabled(false)
        }
        else if (name.length < 3) {
            setBadUsername(true)
            setButtonDisabled(false)
        }
        else {
            setBadUsername(false)
            if (email == '') {
                setBadEmail(true)
                setButtonDisabled(false)
            }
            else {
                setBadEmail(false)
                if (password == '') {
                    setBadPassword(true)
                    setButtonDisabled(false)
                    
                }
                else if (password.length < 6) {
                    setBadPassword(true)
                    setButtonDisabled(false)
                }
                else {
                    setBadPassword(false)
                    if (confirmPassword == '') {
                        setBadconfirmPassword(true)
                        setButtonDisabled(false)
                    }
                    else {
                        setBadconfirmPassword(false)

                        if (password !== confirmPassword) {
                            setBadconfirmPassword(true)
                            setButtonDisabled(false)
                        }
                        else {
                            setBadconfirmPassword(false)
                            saveData();
                        }
                    }
                }


            }

        }
    }

    const saveData = async () => {

        await AsyncStorage.setItem("NAME", name)
        await AsyncStorage.setItem("EMAIL", email)
        await AsyncStorage.setItem("PASSWORD", password)
        navigation.goBack();
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor:"#afc3e3" }}>
            <Image source={require('../images/logo.png')} style={{ width: 100, height: 100, alignSelf: "center", borderRadius: 50, marginTop: 10 }} />
            <Text style={{ alignSelf: "center", marginTop: '2%', fontWeight: "bold" }}> Create your account</Text>
            <CustomTextInput placeholder={"Enter your name"}  value={name} onChangeText={txt => { setName(txt) }} />
            {badUsername &&(<Text style={{ color: "red", marginLeft: 30 }}>Please enter name</Text>)}
            <CustomTextInput placeholder={"Enter Email"}  value={email} onChangeText={txt => { setEmail(txt) }} />
            {badEmail && (<Text style={{ color: "red", marginLeft: 30, }}>Please enter email id</Text>)}
            <CustomTextInput placeholder={"Enter password"}  type={'password'} value={password} onChangeText={txt => { setPassword(txt) }} />
            {badPassword &&(<Text style={{ color: "red", marginLeft: 30 }}>Please enter password</Text>)}
            <CustomTextInput placeholder={"Confirm password"} type={'password'} value={confirmPassword} onChangeText={txt => { setConfirmpassword(txt) }} />
            {badconfirmPassword &&(<Text style={{ color: "red", marginLeft: 30 }}>Enter Confirm password </Text>)}
            <CustomButton bgColor={buttonDisabled ? 'blue' : 'black'} title={"Sign up"} style={{ width: "50%" }} textColor={"#fff"} onPress={() => signUp()}disabled={buttonDisabled}/>
            <Text onPress={() => {navigation.goBack()}} style={{ fontWeight: "bold", fontSize: 20, alignSelf: "center", textDecorationLine: "underline" }}>Already have account?</Text>
        </SafeAreaView>
    )
}

export default SignUp