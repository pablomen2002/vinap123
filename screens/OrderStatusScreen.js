import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const OrderStatusScreen = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('https://vinappteria2-backend.vercel.app/api/orders'); // Actualiza la URL para apuntar a tu servidor en Vercel
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.status}>Estado: {item.status}</Text>
      <Text style={styles.paymentMethod}>Método de Pago: {item.paymentMethod}</Text>
      <FlatList
        data={item.cart}
        keyExtractor={(product) => product._id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Text>{item.name}</Text>
            <Text>Cantidad: {item.quantity}</Text>
            <Text>Precio: ${item.price}</Text>
          </View>
        )}
      />
    </View>
  );

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item._id}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
};

export default OrderStatusScreen;

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  itemContainer: {
    marginBottom: 16,
    padding: 16,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentMethod: {
    fontSize: 14,
    marginBottom: 8,
  },
  productContainer: {
    marginBottom: 8,
  },
});
