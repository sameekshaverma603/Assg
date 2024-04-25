import React, { useRef, useEffect } from 'react';
import { View, Image, Animated, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../Assets/images/bgimg.png')} // Replace with your background image
        style={[styles.backgroundImage, { opacity: fadeAnim }]}
      />
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
});

export default HomeScreen;
