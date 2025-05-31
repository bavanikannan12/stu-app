

import React, { useState } from 'react';
import {  TextInput, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const navigation = useNavigation<NavigationProp>();

  const handleLogin = () => {
    if (name && roll) {
      navigation.navigate('Home', {
        name,
        rollNumber: roll,
      });
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Student Login</Text>

      <TextInput
        placeholder="Enter your name"
        placeholderTextColor="#888"
        style={styles.input}
        onChangeText={setName}
        value={name}
        autoCapitalize="words"
      />

      <TextInput
        placeholder="Enter your roll number"
        placeholderTextColor="#888"
        style={styles.input}
        onChangeText={setRoll}
        value={roll}
        keyboardType="number-pad"
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f4c75',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#bbe1fa',
    textAlign: 'center',
    marginBottom: 40,
    letterSpacing: 1,
  },
  input: {
    backgroundColor: '#3282b8',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: '#fff',
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3, 
  },
  button: {
    backgroundColor: '#bbe1fa',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#0f4c75',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default LoginScreen;
