 import React from 'react'
 import {Image,StyleSheet,Text,View,ImageBackground} from 'react-native'
 import { LinearGradient } from 'expo-linear-gradient';
 import Back from '../assets/screen.png'
 import Logo from '../assets/wu.png'
 export default function SecondView(){
   return ( 
     
      <ImageBackground source={Back} style={styles.image}>
     
      <Image
          source={Logo}
          style={{ width: 100, height: 100 ,marginTop:'52%'}}
        />
      </ImageBackground>
     
      
      )
        
 }
 
 const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    flex: 1,
    resizeMode: "cover",
    width:'100%', 
  },
 
 
});