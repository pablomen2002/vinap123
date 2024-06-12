import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LogoutScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Aquí puedes agregar la lógica para cerrar sesión, por ejemplo, eliminar tokens o limpiar el estado
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={styles.container}>
      <Text>Cerrar Sesión</Text>
      <Button title="Cerrar Sesión" onPress={handleLogout} />
    </View>
  );
};

export default LogoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
