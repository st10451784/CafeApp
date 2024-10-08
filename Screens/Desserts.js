// Desserts.js
import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

// Sample data for desserts
const dessertItems = [
  { id: '1', name: 'Cheesecake', price: 'R60' },
  { id: '2', name: 'Chocolate Lava Cake', price: 'R70' },
  { id: '3', name: 'Apple Pie', price: 'R55.99' },
  { id: '4', name: 'Tiramisu', price: 'R70.99' },
  { id: '5', name: 'Ice Cream Sundae', price: 'R50.99' },
];

const Desserts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Desserts</Text>
      <FlatList
        data={dessertItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name} - {item.price}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default Desserts

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    padding: 15,
    backgroundColor: '#ffe4b5', // light background for items
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  itemText: {
    fontSize: 18,
    color: '#8b4513', // chocolate-like color
  },
});
