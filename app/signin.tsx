import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { router, useNavigation } from 'expo-router';
import { useSelector } from 'react-redux';
import type { RootState } from "./redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface LoginError {
  name?: String | undefined;
  password?: String | undefined;
}

const SignInScreen = () => {
  const navigation = useNavigation();
  const users = useSelector((state: RootState) => state.users.users);


  const saveLoginTime = async () => {
    const loginTime = new Date().getTime(); // Current timestamp
    await AsyncStorage.setItem("loginTime", loginTime.toString());
  };
  

  const [name, setName] = useState('');
  const [userId,setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<LoginError>({});

  const validateInputs = () => {
    let newErrors: LoginError = {};
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleLogin = async () => {
    if (!validateInputs()) return;
  
    const user = users.find(
      (user) => user.name === name && user.password === password
    );
  
    if (user) {

      Alert.alert("Login Successful", `Welcome, ${name}!`);
      await saveLoginTime();

      router.dismissAll();
      // router.push('/(tabs)', { userId: user.id, userName: name }); // Pass userId and userName
      navigation.navigate('timeScreen', {
        userId: user.id,
        userName:name
      });
    } else {

      Alert.alert("Login Failed", "Invalid name or password. Please try again.");
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={{ width: '90%', fontSize: 25, textAlign: 'center' }}>Login here!</Text>
      <View style={styles.box}>
        <View style={styles.inputRow}>
          <Image style={{ width: 50, height: 50 }} source={require('../assets/images/newsletter.png')} />
          <TextInput
            placeholder="Enter Name"
            placeholderTextColor="#888"
            style={[styles.input, { outline: 'none' }]}
            onChangeText={setName}
            value={name}
            textAlign="left"
          />
        </View>
        {error.name && <Text style={{ color: 'red', marginLeft: 20 }}>{error.name}</Text>}

        <View style={styles.inputRow}>
          <Image style={{ width: 50, height: 50 }} source={require('../assets/images/password-strenght.png')} />
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#888"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
            style={[styles.input, { outline: 'none' }]}
            textAlign="left"
          />
        </View>
        {error.password && <Text style={{ color: 'red', marginLeft: 20 }}>{error.password}</Text>}

        <TouchableOpacity
          onPress={handleLogin}
          style={{
            width: '98%',
            marginTop: 30,
            backgroundColor: '#1e90ff',
            padding: 10,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 20, color: '#fff' }}>Login</Text>
        </TouchableOpacity>
        <Text
          style={{ marginLeft: 18, marginTop: 10, fontSize: 20 }}
          onPress={() => {
            router.dismissAll();
            router.push('/signup');
          }}
        >
          Don't, have an account?
        </Text>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  box: {
    width: '90%',
    height: 400,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: 20,
  },
  input: {
    flex: 1,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 5,
    color: 'black',
    outline: 'none',
    textAlign: 'left', 
  },
  inputRow: {
    marginTop: 30,
    flexDirection: 'row',
    gap: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
