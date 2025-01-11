import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

type Props = {};

const SignInScreen = (props: Props) => {
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
            textAlign="left"  // Ensures the placeholder text is aligned left
          />
        </View>
        <View style={styles.inputRow}>
          <Image style={{ width: 50, height: 50 }} source={require('../assets/images/password-strenght.png')} />
          <TextInput 
            placeholder="Enter Password"     
            placeholderTextColor="#888"
            secureTextEntry={true}
            style={[styles.input, { outline: 'none' }]} 
            textAlign="left"  // Ensures the placeholder text is aligned left
          />
        </View>
        <TouchableOpacity 
          onPress={() => {
            router.dismissAll(); // Close any modals or previous screens
            router.push('/(tabs)'); // Navigate to the tabs screen
          }} 
          style={{ width: '98%', marginTop: 30, backgroundColor: '#1e90ff', padding: 10, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, color: '#fff' }}>Login</Text>
        </TouchableOpacity>
        <Text 
          style={{ marginLeft: 18, marginTop: 10, fontSize: 20 }}   
          onPress={() => {
            router.dismissAll(); // Close any modals or previous screens
            router.push('/signup'); // Navigate to the signup screen
          }}>
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
    textAlign: 'left',  // Ensures the text and placeholder are aligned left
  },
  inputRow: {
    marginTop: 30,
    flexDirection: 'row',
    gap: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
