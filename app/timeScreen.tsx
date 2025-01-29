import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation } from "expo-router";

const TimeLimitScreen = () => {
  const navigation = useNavigation();
  const [selectedLimit, setSelectedLimit] = useState(null);

  const route = useRoute<RouteProp<{ params: { userId: String, userName: String } }, 'params'>>();
  const { userId, userName } = route.params || {};
  console.log(userName);

  const timeOptions = [
    { label: "1 Minute", value: 1 * 60 * 1000 }, // 1 min in milliseconds
    { label: "5 Minutes", value: 5 * 60 * 1000 }, // 5 mins in milliseconds
    { label: "15 Minutes", value: 15 * 60 * 1000 }, // 15 mins in milliseconds
    { label: "30 Minutes", value: 30 * 60 * 1000 }, // 30 mins in milliseconds
    { label: "1 Hour", value: 60 * 60 * 1000 }, // 1 hour in milliseconds
    { label: "Unlimited", value: null }, // null means no limit
  ];

  const saveTimeLimit = async () => {
    await AsyncStorage.setItem("timeLimit", JSON.stringify(selectedLimit));
    navigation.navigate('modesSelection', { userId: userId, userName: userName }); // Go to the next screen
  };

  return (
    <View style={{ padding: 20, flex:1,backgroundColor:'#fff' }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Set Time Limit:</Text>
      {timeOptions.map((option) => (
        <TouchableOpacity
          key={option.label}
          onPress={() => setSelectedLimit(option.value)}
          style={{
            backgroundColor: selectedLimit === option.value ? "#1e90ff" : "lightgray",
            padding: 10,
            marginVertical: 5,
            borderRadius: 0,
          }}
        >
          <Text style={{ fontSize: 16 }}>{option.label}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        onPress={saveTimeLimit}
        style={{
          backgroundColor: "#1e90ff",
          padding: 10,
          marginTop: 20,
          borderRadius: 0,
        }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>Save and Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimeLimitScreen;
