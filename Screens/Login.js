import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  // State to manage input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Use the navigation hook
  const navigation = useNavigation();

  // Function to handle login
  const handleLogin = () => {
    // Replace with your authentication logic
    if (username === 'Sunkish' && password === 'Sunkish2003') {
      alert('Login successful!');
      // Navigate to the Menu screen after login
      navigation.navigate('Menu');
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry // Hides password input
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;

// Styles for the Login component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});

