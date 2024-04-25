import React, { useRef } from 'react';
import { TouchableOpacity, Animated, Easing, Text, StyleSheet } from 'react-native';

const RotationButton = () => {
  const rotationValue = useRef(new Animated.Value(0)).current;

  const rotateButton = () => {
    Animated.timing(
      rotationValue,
      {
        toValue: 1,
        duration: 1000, // Animation duration
        easing: Easing.linear,
        useNativeDriver: true,
      }
    ).start(() => {
      rotationValue.setValue(0); // Reset the animation value
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
    <TouchableOpacity onPress={rotateButton} style={styles.buttonContainer}>
      <Animated.View style={[styles.button, animatedStyles]}>
        <Text style={styles.buttonText}>Press Me</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

RotationButton.navigationOptions = {
  title: 'Rotation Button', // Specify the header title here
};


const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RotationButton;
