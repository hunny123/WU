import React, { useRef, useEffect } from 'react';
import { Animated,Text} from 'react-native';



export default function FadeInView (props) {
  const {callBack}=props// Initial value for opacity: 0
  const fadeAnim = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true
      },
      {
        toValue:0,
        duration:1000,
        useNativeDriver: true
      }
    ).start(()=>{setTimeout(()=>{callBack(true)},200)});
  }, [fadeAnim])
 
  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
      
      
    </Animated.View>
  );
}