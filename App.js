import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Stacknavigation from './navigation/Stacknavigation';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <Stacknavigation />
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
