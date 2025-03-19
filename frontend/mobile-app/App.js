import React from 'react';
import { View, Button, Alert } from 'react-native';

export default function App() {
  const lockVehicle = async () => {
    try {
      const response = await fetch('https://api.connectedvehicle.com/api/v1/vehicles/VH1234/lock', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer <JWT_TOKEN>',
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      Alert.alert('Success', result.status);
    } catch (error) {
      Alert.alert('Error', 'Failed to lock the vehicle');
    }
  };

  return (
    <View>
      <Button title="Lock Vehicle" onPress={lockVehicle} />
    </View>
  );
}
