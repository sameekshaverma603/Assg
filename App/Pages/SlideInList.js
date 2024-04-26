import React, { useEffect, useRef } from 'react';
import { View, Text, FlatList, Animated, StyleSheet, ImageBackground } from 'react-native';

const SlideInList = ({ }) => {
  const data = ['Create Post', 'Like post', 'Comment on Post', 'Share Post', 'Follow User'];
  const animValues = useRef(data.map(() => new Animated.Value(-100))).current; // Initial position off the screen

  useEffect(() => {
    const animations = data.map((_, index) =>
      Animated.timing(animValues[index], {
        toValue: 0,
        duration: 1500,
        delay: index * 100, // Apply a slight delay for each item
        useNativeDriver: true,
      })
    );

    Animated.stagger(100, animations).start();
  }, []);

  const renderItem = ({ item, index }) => (
    <Animated.View
      style={{
        transform: [{ translateX: animValues[index] }],
        opacity: animValues[index].interpolate({
          inputRange: [-100, 0],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        }),
      }}
    >
      <Text style={styles.text}>{item}</Text>
    </Animated.View>
  );

  return (
    <ImageBackground
      source={require('../Assets/images/bgimg2.png')} // Replace 'background.jpg' with the actual file name of your background image
      style={styles.background}
    >
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.contentContainer} // Apply contentContainerStyle to center the items
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white', // Make the text white
  },
});

SlideInList.navigationOptions = {
  title: 'Slide-In',
};

export default SlideInList;
