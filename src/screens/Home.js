import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import VideoPlayer from '../videoPlayer/VideoPlayer'
import sign from 'jwt-encode';
import  {jwtDecode}  from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';
import  'core-js/stable/atob';

const Home = () => {
  const email = AsyncStorage.getItem('EMAIL')
  const name = AsyncStorage.getItem('NAME')
  console.log(email, name)
  const secret = 'secret';
    const JSONbodyText = {
        email: "rupali@gmail.com",
        name: "rupali",
        empid: 1516239022
    };
      const smsbody = sign(JSONbodyText, secret);
      console.log(smsbody,'smsbody')
      const decoded = jwtDecode(smsbody);
      console.log(decoded,'decoded')
  return (
    <SafeAreaView>
      <View>
        <Text>User email:{decoded.email}</Text>
        <Text >User name:{decoded.name}</Text>
      </View>
     {/* <VideoPlayer /> */}
    </SafeAreaView>
  )
}

export default Home