import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

const Home = ({ navigation, menu }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Complete Menu </Text>
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.name} - {item.course} - ${item.price}
          </Text>
        )}
      />
      <Button title="Add/Remove Menu Items" onPress={() => navigation.navigate('ChefAddMenu')} />
      <Button title="Filter Menu" onPress={() => navigation.navigate('GuestFilter')} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 28, marginBottom: 10, textAlign: 'center' },
  item: { fontSize: 16, marginBottom: 5 },
});
