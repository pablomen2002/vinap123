import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/AccountScreenStyles';

const AccountScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        if (!userId) {
          console.error('No se encontró el userId');
          return;
        }
        const response = await fetch(`https://vinappteria2-backend.vercel.app/api/user/${userId}`);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error al obtener los datos del usuario:', errorText);
          return;
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChangePassword = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      if (!userId) {
        console.error('No se encontró el userId');
        return;
      }
      const response = await fetch(`https://vinappteria2-backend.vercel.app/api/user/${userId}/password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: newPassword }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error al cambiar la contraseña:', errorText);
        return;
      }

      const data = await response.json();
      Alert.alert(data.message);
      setNewPassword('');
    } catch (error) {
      console.error('Error al cambiar la contraseña:', error);
    }
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Cargando datos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre: {user.name}</Text>
      <Text style={styles.label}>Correo: {user.email}</Text>
      <Text style={styles.label}>Celular: {user.phone}</Text>
      <Text style={styles.label}>Edad: {user.age}</Text>
      <Text style={styles.label}>Sexo: {user.gender}</Text>

      <TextInput
        style={styles.input}
        value={newPassword}
        onChangeText={setNewPassword}
        placeholder="Nueva contraseña"
        secureTextEntry
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Cambiar Contraseña</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountScreen;
