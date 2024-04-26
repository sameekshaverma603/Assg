import React, { useRef, useEffect } from 'react';
import { View, Image, Animated, StyleSheet, Text } from 'react-native';

const HomeScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1800,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../Assets/images/bgimg.png')} // Replace with your background image
        style={styles.backgroundImage}
      />
      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>App Animation</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
