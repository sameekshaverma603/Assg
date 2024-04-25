import React, { useEffect, useRef } from 'react';
import { View, Text, FlatList, Animated, StyleSheet } from 'react-native';

const SlideInList = ({ }) => {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
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
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contentContainer} // Apply contentContainerStyle to center the items
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

  contentContainer: {
    flex: 1,
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center',
  },

  text: {
    fontWeight: 'bold', // Make the text bold
    fontSize: 20, // Increase font size
  },
});

SlideInList.navigationOptions = {
  title: 'Slide-In', // Specify the header title here
};

export default SlideInList;
