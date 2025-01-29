import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Button } from 'react-native'
import React, { useState } from 'react'
import { router, useNavigation } from 'expo-router';
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./redux/store";
import { addUser } from "./redux/slices/userSlice";
import { addPost } from "./redux/slices/postSlice";






const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch: AppDispatch = useDispatch();

  const handleAddUser = () => {
    if (name.trim()) {
      dispatch(addUser({ id: Date.now(), name, password }));
      setName("");
      setPassword("")
    }
    alert("User Added!")
  };


  return (
    <View style={styles.container}>
      <Text style={{ width: '90%', textAlign: 'center', fontSize: 25 }}>SignUp Screen</Text>
      <View style={styles.box}>
        <View style={styles.inputRow}>
          <Image style={{ width: 50, height: 50 }} source={require('../assets/images/newsletter.png')} />
          <TextInput placeholder="Enter Name"
            value={name}
            onChangeText={setName} placeholderTextColor="#888"
            secureTextEntry={true}
            style={[styles.input, { outline: 'none' }]} />
        </View>
        <View style={styles.inputRow}>
          <Image style={{ width: 50, height: 50 }} source={require('../assets/images/password-strenght.png')} />
          <TextInput placeholder='Enter Password'
            placeholderTextColor="#888"
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
            style={[styles.input, { outline: 'none' }]} />
        </View>
        <TouchableOpacity

          style={{ width: '98%', marginTop: 30, backgroundColor: '#1e90ff', padding: 10, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
          <Text onPress={handleAddUser} style={{ fontSize: 20, color: '#fff' }}>Submit</Text>
        </TouchableOpacity>
        <Text style={{ marginLeft: 18, marginTop: 10, fontSize: 20 }} onPress={() => {
          router.dismissAll();
          router.push('/signin');
        }}>Already, have an account?</Text>
      </View>

    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  box: {
    width: '90%',
    height: 400,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: 20
  },
  input: {
    flex: 1,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 5,
    color: 'black',
    outline: 'none',
    paddingRight: 20
  },
  inputRow: {
    marginTop: 30,
    flexDirection: 'row',
    gap: 10,
    paddingLeft: 20,
    paddingRight: 20
  }
})