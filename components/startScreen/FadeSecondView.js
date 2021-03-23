import React, { useRef, useEffect } from 'react';
import { Animated,Text} from 'react-native';
import ThirdView from './ThirdView'
import SecondView from './SecondView'
import FadeComponent from './FadeComponent'


// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
 
  const [next,setNext] = React.useState(false)
  return (
    
      <FadeComponent style={{width:'100%',height:'100%'}}  callBack={setNext}>
      
     {!next &&  <SecondView/>}
     {next && <ThirdView/>}
        
      </FadeComponent>
   
  )
}