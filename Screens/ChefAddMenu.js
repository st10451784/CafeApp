import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const ChefAddMenu = () => {
  // State to manage menu input values
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');

  // Function to handle adding a dish
  const handleAddDish = () => {
    if (dishName && description) {
      // Handle adding the dish to the menu (you can replace this with actual logic, such as an API call)
      alert(`Dish Added: ${dishName}\nDescription: ${description}`);
    } else {
      alert('Please enter both dish name and description.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add a New Dish to Menu</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Dish Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      
      <Button title="Add Dish" onPress={handleAddDish} />
    </View>
  );
};

export default ChefAddMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
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
