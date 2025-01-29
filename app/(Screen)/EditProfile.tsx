import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useSelector, useDispatch } from "react-redux";
import { RouteProp, useRoute } from "@react-navigation/native";
import type { RootState, AppDispatch } from "../redux/store";
import { updateUser } from "../redux/slices/userSlice";

const EditProfile = () => {
  const route = useRoute<RouteProp<{ params: { id: number } }, "params">>();
  const { id } = route.params || {};
  const user = useSelector((state: RootState) =>
    state.users.users.find((user) => user.id === id)
  );

  const dispatch: AppDispatch = useDispatch();

  const [fullName, setFullName] = useState(user?.fullName || "");
  const [about, setAbout] = useState(user?.about || "");
  const [photo, setPhoto] = useState(user?.photo || "");

  // Open Image Picker
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    dispatch(
      updateUser({
        id,
        data: { fullName, about, photo },
      })
    );
    alert("Profile updated successfully!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Profile</Text>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={{
              uri:
                photo ||
                "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
            }}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Display Name"
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
      />
      <TextInput
        placeholder="About"
        value={about}
        onChangeText={setAbout}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: { width: 150, height: 150, borderRadius: 75 },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 20,
    fontSize: 18,
    paddingVertical: 4,
  },
  button: {
    backgroundColor: "#1e90ff",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

export default EditProfile;
