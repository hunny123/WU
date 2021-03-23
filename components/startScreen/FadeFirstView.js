import React, { useRef, useEffect } from 'react';
import { Animated,Text} from 'react-native';
import FirstView from './FirstView'
import FadeSecondView from './FadeSecondView'
import FadeComponent from './FadeComponent'


// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
 
  const [next,setNext] = React.useState(false)
  return (
    
      <FadeComponent style={{width:'100%',height:'100%' ,backgroundColor:`${next?`#E5E5E5`:'white'}`}}  callBack={setNext}>
      
        {!next &&  <FirstView/>}
        {next && <FadeSecondView/>}
        
      </FadeComponent>
   
  )
}