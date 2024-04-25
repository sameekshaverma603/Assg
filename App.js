import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FadeIn from './App/Pages/FadeIn';
import SlideInList from './App/Pages/SlideInList';
import RotationButton from './App/Pages/RotationButton';
import HomeScreen from './App/Pages/HomeScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Fade-In" component={FadeIn} />
        <Drawer.Screen name="Slide-In" component={SlideInList} />
        <Drawer.Screen name="Rotation Button" component={RotationButton} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
