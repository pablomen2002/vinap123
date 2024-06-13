import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CartContext from '../context/CartContext';
import MapView, { Marker } from 'react-native-maps';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/CheckoutScreenStyles';

const CheckoutScreen = () => {
  const { cart } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState('Efectivo');
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
      const response = await fetch('https://vinappteria2-backend.vercel.app/api/orders', { // Actualiza la URL para apuntar a tu servidor en Vercel
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
      <Text style={styles.label}>Ingrese el método de pago:</Text>
      <Picker
        selectedValue={paymentMethod}
        style={styles.picker}
        onValueChange={(itemValue) => setPaymentMethod(itemValue)}
      >
        <Picker.Item label="Efectivo" value="Efectivo" />
        <Picker.Item label="Terminal" value="Terminal" />
      </Picker>
      <MapView
        style={styles.map}
        region={location}
        onPress={(e) => setLocation(e.nativeEvent.coordinate)}
      >
        <Marker coordinate={location} />
      </MapView>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleOrder}>
        <Text style={styles.buttonText}>Realizar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutScreen;
