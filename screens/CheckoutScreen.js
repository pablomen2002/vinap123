import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CartContext from '../context/CartContext';
import MapView, { Marker } from 'react-native-maps';

const CheckoutScreen = () => {
  const { cart } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const navigation = useNavigation();

  const handleOrder = async () => {
    const order = {
      cart,
      paymentMethod,
      location,
      status: 'En camino',
    };

    try {
      const response = await fetch('http://192.168.0.57:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });

      const data = await response.json();
      console.log(data);
      navigation.navigate('OrderStatus');
    } catch (error) {
      console.error('Error al realizar el pedido:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Ingrese el método de pago:</Text>
      <TextInput
        style={styles.input}
        value={paymentMethod}
        onChangeText={setPaymentMethod}
        placeholder="Método de Pago"
      />
      <MapView
        style={styles.map}
        region={location}
        onPress={(e) => setLocation(e.nativeEvent.coordinate)}
      >
        <Marker coordinate={location} />
      </MapView>
      <Button title="Realizar Pedido" onPress={handleOrder} />
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  map: {
    height: 200,
    marginBottom: 16,
  },
});
