import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { Link, useNavigation } from "expo-router";
import AppDimension, { getFont } from "@/components/constants/dimensions";
import AppConstants from "@/components/constants/dimensions";
import BlueButton from "@/components/blueButton";

type Props = {};

const WelcomeScreen = (props: Props) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); 
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="crimson"  />
      </View>
    );
  }

  return (
     
      <View style={styles.container}>
        <Text style={[styles.text]}>
          Networking App
        </Text>

        <View style={styles.box}>
          <Image style={{ width: 300, height: 300, aspectRatio: 1.2 }} resizeMode="contain" source={require('../assets/images/networking.png')} />
          <Link href="/signin" asChild>
            <TouchableOpacity style={{ width: 200,
               marginTop: 20, 
               backgroundColor: AppConstants.AppBgColor.bgBlue,
                padding: 10, 
                justifyContent: 'center',
                borderColor:'black',
                borderWidth:1,
                 alignSelf: 'center', 
                 alignItems: 'center' }}>
              <Text style={{ fontSize: AppConstants.AppFont.fontSize20,
                 color: AppConstants.AppColor.fontColorWhite, 
                 fontWeight: '500' }}>Login</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/signup" asChild>
            <TouchableOpacity style={{width:200,
              backgroundColor:AppConstants.AppBgColor.bgWhite,
              justifyContent:'center',
              borderColor:'black',
              borderWidth:1,
              alignItems:'center',
              padding:AppConstants.AppPadding.padding10,
              marginTop:AppConstants.AppMargin.margin20}}>
              <Text style={{ fontSize: AppConstants.AppFont.fontSize20, 
                color: AppConstants.AppColor.fontColorBlue,
               fontWeight: '500' }}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
   
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  container: {
    flex: 1,
    width: AppConstants.AppDimension.boxWidth,
    height: AppConstants.AppDimension.height,
    justifyContent: "center",
    backgroundColor:AppConstants.AppBgColor.bgWhite,
    alignItems: "center",
  },
  box: {
    width: AppDimension.AppDimension.boxWidth,
    height: 500,
    marginTop: AppConstants.AppMargin.margint10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 0,
  },
  text: {
    textShadowColor: 'crimson',
    fontWeight: 'bold',
     color: 'black',
      textAlign: 'center',
       marginTop: 30,
        fontSize: 35,
    // textShadowOffset: { width: 5, height: 5 },
    // textShadowRadius: 10,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
