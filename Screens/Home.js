import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation(); // Hook to navigate between screens

  // Function to handle navigation to Login page
  const handleEnter = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {/* Display the image at the top */}
      <Image
        source={require('./Logo.png')} // Replace with your image path
        style={styles.image}
      />

      {/* Home text */}
      <Text style={styles.title}>Welcome to Our App!</Text>

      {/* Button to navigate to Login screen */}
      <Button title="Enter" onPress={handleEnter} />

    </View>
    
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: 200,  // Customize the width
    height: 200, // Customize the height
    marginBottom: 20,
    resizeMode: 'contain', // Ensure the image doesn't stretch
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
});
