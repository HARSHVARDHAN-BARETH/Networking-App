import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { RouteProp, useRoute } from '@react-navigation/native';

const modes = ["Entertainment", "Educational", "Fitness", "Devotional", "All"];

export default function ModesSelection() {
    const navigation = useNavigation();
  const [selectedModes, setSelectedModes] = useState([]);
        const route = useRoute<RouteProp<{ params: { userId:String,userName:String } }, 'params'>>();
        const { userId,userName } = route.params || {};
       console.log(userName);
  

  const toggleMode = (mode) => {
    if (selectedModes.includes(mode)) {
      setSelectedModes(selectedModes.filter((m) => m !== mode)); // Remove mode
    } else {
      setSelectedModes([...selectedModes, mode]); // Add mode
    }
  };

  const proceedToContent = () => {
    navigation.navigate("(tabs)", { selectedModes:selectedModes, userId:userId,userName:userName });
  };

  return (
    <View style={{ padding: 20, flex:1, backgroundColor:'#fff' }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Choose Your Mode(s):</Text>
      <FlatList
        data={modes}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => toggleMode(item)}
            style={{
              backgroundColor: selectedModes.includes(item) ? "#1e90ff" : "lightgray",
              padding: 10,
              marginVertical: 5,
              borderRadius: 0,
            }}
          >
            <Text style={{ fontSize: 16 }}>{item}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Proceed" onPress={proceedToContent} />
    </View>
  );
}
