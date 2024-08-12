import React, { useState, useEffect, useRef } from 'react';
import { Image, StyleSheet, Platform, KeyboardAvoidingView, TextInput, Pressable, Text, View, Animated, Easing } from 'react-native';
import { useNavigation } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  // Animation values
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const inputY = useRef(new Animated.Value(50)).current;
  const inputOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Logo fade-in animation
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Input fields slide-up and fade-in animation
    Animated.timing(inputY, {
      toValue: 0,
      duration: 1000,
      delay: 500,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();

    Animated.timing(inputOpacity, {
      toValue: 1,
      duration: 1000,
      delay: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Animated.View style={[styles.logoContainer, { opacity: logoOpacity }]}>
        <Image style={styles.logo} source={require('@/assets/images/logo.png')} />
        <Text style={styles.title}>Se Connecte</Text>
        <Text style={styles.subtitle}>Enter montre adresse et mot de passe pour vous Connecte a Burundi Equality</Text>
      </Animated.View>

      <Animated.View style={[styles.inputContainer, { transform: [{ translateY: inputY }], opacity: inputOpacity }]}>
        <View style={styles.inputWrapper}>
          <Icon name="envelope" size={20} color="#666" style={styles.icon} />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder='Entrer ton Email'
            keyboardType='email-address'
            autoCapitalize='none'
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Icon name="lock" size={20} color="#666" style={styles.icon} />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder='Entrer le mot de passe'
            secureTextEntry
            placeholderTextColor="#999"
          />
        </View>
      </Animated.View>

      <Pressable style={styles.button} onPress={() => {/* Handle login */ }}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Pressable style={styles.signUpLink} onPress={() => {/* Navigate to Sign Up */ }}>
        <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 15,
    color: '#666',
  },
  inputContainer: {
    marginBottom: 30,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 45,
    color: '#333',
  },
  button: {
    backgroundColor: '#D2273A',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    width: 150,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signUpLink: {
    alignItems: 'center',
  },
  signUpText: {
    color: '#514F50',
  },
});
