// Starters.js
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

// Sample data for starter items
const starterItems = [
  { id: '1', name: 'Spring Rolls', price: 'R30' },
  { id: '2', name: 'Garlic Bread', price: 'R55' },
  { id: '3', name: 'Bruschetta', price: 'R45' },
  { id: '4', name: 'Chicken Wings', price: 'r60' },
  { id: '5', name: 'Caprese Salad', price: 'R50' },
];

const Starters = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Starters</Text>
      <FlatList
        data={starterItems}
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

export default Starters;

// Styles for the Starters component
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
