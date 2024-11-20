import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const MainCourse = ({ menu }) => {
  const MainCourse = menu.filter((item) => item.course === 'MainCourse');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Starters</Text>
      <FlatList
        data={starters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.name} - ${item.price}
          </Text>
        )}
      />
    </View>
  );
};

export default MainCourse;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 28, marginBottom: 10 },
  item: { fontSize: 16, marginBottom: 5 },
});
