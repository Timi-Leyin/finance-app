import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import OnBoarding1 from './OnBoarding1';

const OnboardingSlider = () => {
  const slides = [
    {
      title: 'Welcome to Your App',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      // image: require('./assets/slide1.jpg'), // Replace with your image path
    },
    {
      title: 'Explore Features',
      description: 'Discover amazing features that make your life easier.',
      // image: require('./assets/slide2.jpg'), // Replace with your image path
    },
    {
      title: 'Get Started',
      description: 'Sign up or log in to start using our awesome app!',
      // image: require('./assets/slide3.jpg'), // Replace with your image path
    },
  ];

  return (
    <Swiper style={styles.wrapper} showsButtons={false} showsPagination={true}>
     
        <View key={1} style={styles.slide}>
          <OnBoarding1 />
        </View>

    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
});

export default OnboardingSlider;
