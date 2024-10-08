// Menu.js
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import React from 'react';

const menuItems = [
  { id: '1', title: 'Main Course', screen: 'MainCourse' },
  { id: '2', title: 'Desserts', screen: 'Desserts' },
  { id: '3', title: 'Starters', screen: 'Starters' },
  { id:  '4', title: 'Chef Add Menu', screen: 'ChefAddMenu'}
  // Add more categories as needed
];

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Button
              title={item.title}
              onPress={() => navigation.navigate(item.screen)} // Navigate to the respective screen
            />
          </View>
        )}
      />
    </View>
  );
};

export default Menu;

// Styles for the Menu component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    marginBottom: 10,
    borderRadius: 5,
    overflow: 'hidden', // To ensure the button doesn't exceed the rounded corners
  },
});
