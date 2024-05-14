import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const DATA = [
  {id: '1', name: 'Presiden indonesia', price: '#02', imageUrl: 'https://png.pngtree.com/png-clipart/20231216/original/pngtree-prabowo-gibran-png-image_13857664.png',},
  {id: '2', name: 'Presiden indonesia', price: '#02', imageUrl: 'https://png.pngtree.com/png-clipart/20231216/original/pngtree-prabowo-gibran-png-image_13857664.png',},
  {id: '3', name: 'Presiden indonesia', price: '#02', imageUrl: 'https://png.pngtree.com/png-clipart/20231216/original/pngtree-prabowo-gibran-png-image_13857664.png',},
  {id: '4', name: 'Presiden indonesia', price: '#02', imageUrl: 'https://png.pngtree.com/png-clipart/20231216/original/pngtree-prabowo-gibran-png-image_13857664.png',},
  {id: '5', name: 'Presiden indonesia', price: '#02', imageUrl: 'https://png.pngtree.com/png-clipart/20231216/original/pngtree-prabowo-gibran-png-image_13857664.png',},
  {id: '6', name: 'Presiden indonesia', price: '#02', imageUrl: 'https://png.pngtree.com/png-clipart/20231216/original/pngtree-prabowo-gibran-png-image_13857664.png',},
  {id: '7', name: 'Presiden indonesia', price: '#02', imageUrl: 'https://png.pngtree.com/png-clipart/20231216/original/pngtree-prabowo-gibran-png-image_13857664.png',},
  {id: '8', name: 'Presiden indonesia', price: '#02', imageUrl: 'https://png.pngtree.com/png-clipart/20231216/original/pngtree-prabowo-gibran-png-image_13857664.png',},
  {id: '9', name: 'Presiden indonesia', price: '#02', imageUrl: 'https://png.pngtree.com/png-clipart/20231216/original/pngtree-prabowo-gibran-png-image_13857664.png',},
  {id: '10', name: 'Presiden indonesia', price: '#02', imageUrl: 'https://png.pngtree.com/png-clipart/20231216/original/pngtree-prabowo-gibran-png-image_13857664.png',},
  {id: '11', name: 'Presiden indonesia', price: '#02', imageUrl: 'https://png.pngtree.com/png-clipart/20231216/original/pngtree-prabowo-gibran-png-image_13857664.png',},
  {id: '12', name: 'Presiden indonesia', price: '#02', imageUrl: 'https://png.pngtree.com/png-clipart/20231216/original/pngtree-prabowo-gibran-png-image_13857664.png',},
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={{ uri: item.imageUrl }}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
    <FlatList
      data={DATA}
      keyExtractor={item => item.id}
      renderItem={(renderItem)}
      numColumns={2 }
    />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
    justifyContent: 'center',
    marginTop: 50,
  },
  item: {
    marginVertical: 15,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
});

export default App;
