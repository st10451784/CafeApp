import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

const GuestFilter = ({ menu }) => {
  const [filter, setFilter] = useState(null);

  const filteredMenu = filter ? menu.filter((item) => item.course === filter) : menu;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filter Menu</Text>
      <View style={styles.buttons}>
        <Button title="Starters" onPress={() => setFilter('Starters')} />
        <Button title="Main Course" onPress={() => setFilter('Main Course')} />
        <Button title="Desserts" onPress={() => setFilter('Desserts')} />
        <Button title="Show All" onPress={() => setFilter(null)} />
      </View>
      <FlatList
        data={filteredMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.name} - ${item.price}</Text>}
      />
    </View>
  );
};

export default GuestFilter;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 28, marginBottom: 10 },
  buttons: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  item: { fontSize: 16, marginBottom: 5 },
});
