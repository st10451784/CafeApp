// MainCourse.js
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

// Sample data for main course items
const mainCourseItems = [
  { id: '1', name: 'Grilled Chicken', price: 'R80' },
  { id: '2', name: 'Steak', price: 'R200' },
  { id: '3', name: 'Vegetable Stir Fry', price: 'R90' },
  { id: '4', name: 'Pasta Primavera', price: 'R75' },
  { id: '5', name: 'Fish Tacos', price: 'R100' },
];

const MainCourse = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Main Course</Text>
      <FlatList
        data={mainCourseItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name} - {item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MainCourse;

// Styles for the MainCourse component
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
    padding: 15,
    backgroundColor: '#ffe4b5', // Light background for items
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  itemText: {
    fontSize: 18,
    color: '#8b4513', // Chocolate-like color
  },
});
