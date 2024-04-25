import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FadeIn from './App/Pages/FadeIn';
import SlideInList from './App/Pages/SlideInList';
import RotationButton from './App/Pages/RotationButton';

const Stack = createStackNavigator();

export default function App() {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <View style={styles.container}>
      {/* Navigation */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Fade-In" component={FadeIn} />
          <Stack.Screen name="Slide-In" component={SlideInList} />
          <Stack.Screen name="Rotation Button" component={RotationButton} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* Other Components */}
      <Text>Assignment</Text>
      <StatusBar style="auto" />
      <FadeIn></FadeIn>
      <SlideInList data={data} />
      <RotationButton></RotationButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

