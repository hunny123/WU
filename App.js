import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import OtpScreen from './components/Authencation'
const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initalRoute="Authorization" headerMode={false}>
        <Stack.Screen name="Authorization" component={OtpScreen} options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
            display: 'hide'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


