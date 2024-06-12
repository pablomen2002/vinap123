import React, { useState, useContext } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ToastAndroid } from 'react-native';
import CartContext from '../context/CartContext';

const ProductItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ ...item, quantity: parseInt(quantity) });
    ToastAndroid.show('Producto agregado al carrito', ToastAndroid.SHORT);
  };

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TextInput
        style={styles.input}
        value={String(quantity)}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <Button title="Agregar al Carrito" onPress={handleAddToCart} />
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'green',
  },
  description: {
    fontSize: 12,
    color: 'gray',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: 50,
    textAlign: 'center',
  },
});
