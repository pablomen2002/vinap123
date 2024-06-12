import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import CartContext from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const { cart } = useContext(CartContext);
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    const total = item.price * item.quantity;
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>Precio unitario: ${item.price}</Text>
        <Text style={styles.quantity}>Cantidad: {item.quantity}</Text>
        <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
      </View>
    );
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total de todo: ${calculateTotal()}</Text>
      </View>
      <Button
        title="Realizar Pedido"
        onPress={() => navigation.navigate('Checkout')}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 16,
  },
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
  quantity: {
    fontSize: 14,
  },
  total: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'blue',
  },
  totalContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});