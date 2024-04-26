import React, { useRef } from 'react';
import { TouchableOpacity, Animated, Easing, Text, StyleSheet, ImageBackground } from 'react-native';

const RotationButton = () => {
  const rotationValue = useRef(new Animated.Value(0)).current;

  const rotateButton = () => {
    Animated.timing(
      rotationValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }
    ).start(() => {
      rotationValue.setValue(0);
    });
  };

  const rotateInterpolation = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyles = {
    transform: [{ rotate: rotateInterpolation }],
  };

  return (
    <ImageBackground
      source={require('../Assets/images/bgimg3.png')} // Replace 'background.jpg' with the actual file path of your background image
      style={styles.background}
    >
      <TouchableOpacity onPress={rotateButton} style={styles.buttonContainer}>
        <Animated.View style={[styles.button, animatedStyles]}>
          <Text style={styles.buttonText}>Rotate Me</Text>
        </Animated.View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

RotationButton.navigationOptions = {
  title: 'Rotation Button',
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#53C3DA', // Green background color
    padding: 30,
    borderRadius: 50, // Make it circular
    borderWidth: 2, // Add border
    borderColor: '#4BA7BA', // Border color
    elevation: 5, // Add shadow on Android
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RotationButton;
