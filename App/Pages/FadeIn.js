import React, { Component } from 'react';
import { View, StyleSheet, Animated, ImageBackground } from 'react-native';

class FadeIn extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                })
              },
            ],
          },
          this.props.style,
        ]}
      />
    );
  }
}

FadeIn.navigationOptions = {
  title: 'Fade-In', // Specify the header title here
};

const App = () => (
  <ImageBackground
    source={require('../Assets/images/bgimg4.png')} // Replace 'background.jpg' with your actual background image
    style={styles.container}
  >
    <FadeIn
      style={styles.image}
      source={require('../Assets/images/img1.jpg')}
    />
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});

export default App;
