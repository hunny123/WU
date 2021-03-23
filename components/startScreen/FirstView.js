 import React from 'react'
 import {Image,StyleSheet,View} from 'react-native'
 import { LinearGradient } from 'expo-linear-gradient';
 import logo from '../assets/wu.png'
 export default function FirstView(){
   return ( <View style={styles.container}>
      <LinearGradient
        start={[.5,.2]}
        // Background Linear Gradient
        colors={['#FF008A', '#244579']}
        style={styles.background}
      />
       <Image
          source={logo}
          style={{ width: 100, height: 100  }}
        />
      </View>
      )
        
 }
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  logo:{
    margin:'auto',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
 
});