/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Home from './pages/Home';
import Profile from './pages/Profile';
import SplashScreen from './SplashScreen';
import Intro from './Intro';
import Login from './pages/Login';
import Register from './pages/Register';
import Absensi from './pages/Absensi';
import Apply from './pages/Apply';
import Pengumumanapply from './pages/Pengumumanapply';
import Financial from './pages/Financial';



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Splashscreen"
      // screenOptions={{headerShown:true}}
      >
        <Stack.Screen name="HOME" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Absensi" component={Absensi} />
        <Stack.Screen name="Apply" component={Apply} />
        <Stack.Screen name="Pengumumanapply" component={Pengumumanapply} />
        <Stack.Screen name="Financial" component={Financial} />
        <Stack.Screen name="Intro" component={Intro} options={{headerShown:false}} />
        <Stack.Screen name="Splashscreen" component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }}/>
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
