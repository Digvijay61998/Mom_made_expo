/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useEffect} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import RootNavigator from './src/routes/RootNavigator';
 import {navigationRef,isMountedRef} from "./src/routes/rnnavigation"
 import {
   NavigationContainer,
   DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
 

 export default function App() {
   useEffect(() => {
     // setupNotification();
     isMountedRef.current = true;
     return () => (isMountedRef.current = false);
   }, []);
   return (
       <NavigationContainer ref={navigationRef}>
         <RootNavigator />
       </NavigationContainer>
   );
 }