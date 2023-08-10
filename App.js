import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Dimensions, Text, View, SafeAreaView, Image,TouchableNativeFeedback, Button, Alert, Platform } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
export default function App() {
  return ( 
    <ViewImageScreen/>
  );
}
