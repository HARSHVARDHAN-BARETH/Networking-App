import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { router, useNavigation } from 'expo-router';


interface LoginError {
  email?: String | undefined,
  password?: String | undefined
}


const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<LoginError>({})


  const validation = () => {
    var newErrors: LoginError = {};
    console.log("email", email);

    if (email.length <= 0) {
      newErrors.email = "Email is Empty";
    }

    if (password.length <= 0) {
      newErrors.password = "Enter Password"
    }

    console.log("password", password);

    // setPassword(newErrors)
    setError(newErrors)
  }



  useEffect(() => {
    validation();
  }, [email, password])


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
            onChangeText={(e) => setEmail(e)}
            value={email}
            textAlign="left"
          />

        </View>
        {
          error.email &&
          (<Text>{error.email}</Text>)
        }

        <View style={styles.inputRow}>
          <Image style={{ width: 50, height: 50 }} source={require('../assets/images/password-strenght.png')} />

          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#888"
            onChangeText={(e) => setPassword(e)}
            value={password}
            secureTextEntry={true}
            style={[styles.input, { outline: 'none' }]}
            textAlign="left"
          />
        </View>
        {
          error.password &&
          (<Text>{error.password}</Text>)
        }


        <TouchableOpacity
          disabled={(error.email && error.email.length > 0) || (error.password && error.password.length > 0)}
          onPress={() => {
            router.dismissAll();
            router.push('/(tabs)');
            navigation.navigate('(tabs)', {
              screen: 'index',
              params: {
                userName: name
              }
            })
          }}
          style={{ width: '98%', marginTop: 30, backgroundColor: '#1e90ff', padding: 10, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, color: '#fff' }}>Login</Text>
        </TouchableOpacity>
        <Text
          style={{ marginLeft: 18, marginTop: 10, fontSize: 20 }}
          onPress={() => {
            router.dismissAll();
            router.push('/signup');
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
