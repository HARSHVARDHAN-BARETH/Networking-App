import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <ImageBackground style={styles.background} source={{uri:'https://www.pngkit.com/png/full/410-4102126_conf-confite-de-fiesta-png.png'}}>

    <View style={styles.container}>
      <Text style={[styles.text,{width:'90%',fontWeight:'bold',color:'white', textAlign:'center',marginTop:30, fontSize:25}]}>Welcome To Networking Platoform! Where dreams come together </Text>
    
      <View style={styles.box}>
      <Image style={{width:300,height:300,aspectRatio:1.2}} resizeMode="contain" source={require('../assets/images/networking.png')}/>
            <Link href="/signin" asChild>
              <TouchableOpacity style={{ width: 200,
             marginTop:20,
    backgroundColor: 'crimson',
    padding: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    }}>
                <Text style={{fontSize:20, color:'#fff', fontWeight:'500'}}>Login</Text>
              </TouchableOpacity>
            </Link>
            <Link href="/signup" asChild>
              <TouchableOpacity style={{width: 200,
                           marginRight:0,

    backgroundColor: '#fff',
    marginTop:30,
    padding: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',}}>
                <Text style={{fontSize:20,color:'crimson', fontWeight:'500'}}>Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </View>
    </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  container: {
    flex: 1,
    width:'100%',
    height:'100%',
    justifyContent: "center",
    alignItems: "center",
  },
  box:{
    width: '90%',
    height: 500,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 0,

  },
  text:{
    textShadowColor: 'crimson',  // Shadow color (Green)
    textShadowOffset: { width: 5, height: 5 },  // Shadow offset
    textShadowRadius: 10,  // Shadow blur radius
  },
  
});