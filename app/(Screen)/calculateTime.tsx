import React, { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  useEffect(() => {
    const checkTime = async () => {
      try {
        const loginTimeString = await AsyncStorage.getItem("loginTime");
        const timeLimitString = await AsyncStorage.getItem("timeLimit");

        if (loginTimeString && timeLimitString) {
          const loginTime = parseInt(loginTimeString, 10);
          const timeLimit = JSON.parse(timeLimitString);

          const interval = setInterval(() => {
            const currentTime = new Date().getTime();
            const timeElapsed = currentTime - loginTime;
            const timeLeft = timeLimit - timeElapsed;

            if (timeLeft <= 0) {
              clearInterval(interval);
              setRemainingTime(0);
              alert(`"Time Over", "Your app usage time has expired!"`);
            } else {
              setRemainingTime(timeLeft);
            }
          }, 1000);

          return () => clearInterval(interval); // Cleanup
        } else {
          console.log("Login time or time limit not found in AsyncStorage.");
        }
      } catch (error) {
        console.error("Error fetching data from AsyncStorage:", error);
      }
    };

    checkTime();
  }, []);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / (60 * 1000));
    const seconds = Math.floor((ms % (60 * 1000)) / 1000);
    return `${minutes}m ${seconds}s`;
  };

  return (
    <View style={{ padding: 20, backgroundColor:'#fff', flex:1 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Welcome!</Text>
      {remainingTime !== null ? (
        remainingTime > 0 ? (
          <Text style={{ fontSize: 16, marginTop: 10 }}>
            Remaining Time: {formatTime(remainingTime)}
          </Text>
        ) : (
          <Text style={{ fontSize: 16, marginTop: 10, color: "red" }}>
            Time Expired
          </Text>
        )
      ) : (
        <Text style={{ fontSize: 16, marginTop: 10 }}>Loading...</Text>
      )}
    </View>
  );
}
