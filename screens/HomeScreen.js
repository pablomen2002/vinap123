import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Lógica de inicio de sesión aquí
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <Text>Bienvenido a Vinappteria</Text>
      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
