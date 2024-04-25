import React, { useEffect, useRef } from 'react';
import { View, Text, FlatList, Animated } from 'react-native';

const SlideInList = ({ data }) => {
  const animValues = useRef(data.map(() => new Animated.Value(-100))).current; // Initial position off the screen

  useEffect(() => {
    const animations = data.map((_, index) =>
      Animated.timing(animValues[index], {
        toValue: 0,
        duration: 500,
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
      <Text>{item}</Text>
    </Animated.View>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

SlideInList.navigationOptions = {
    title: 'Slide-In', // Specify the header title here
  };
  

export default SlideInList;
