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
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, deleteUser } from "../redux/slices/userSlice";
import * as ImagePicker from "expo-image-picker";

const EditProfile = () => {
  const route = useRoute();
  const { username } = route.params || {};
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const [selectedUser, setSelectedUser] = useState(null);
  const [heading,setHeading ] = useState("");
  const [fullName, setFullname] = useState("");
  const [about, setAbout] = useState("");
  const [photo, setPhoto] = useState("");

  // Handle image picker
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

  // Handle edit user
  const handleEdit = (user) => {
    setSelectedUser(user);
    setFullname(user.fullName);
    setAbout(user.about);
    setPhoto(user.photo);
  };

  // Submit changes
  const handleSubmit = () => {
    if (selectedUser) {
      dispatch(
        updateUser({
          id: selectedUser.id,
          data: { fullName, about, photo },
        })
      );
      setSelectedUser(null); // Clear selection after editing
      setFullname("");
      setAbout("");
      setPhoto("");
    }
  };

  return (
    <View style={styles.container}>
<Text style={styles.greeting}>
  Hey!, {heading ? heading : ""}
</Text>

      {selectedUser && (
        <View style={styles.editForm}>
          <TouchableOpacity onPress={pickImage}>
            <Image
              style={styles.imagePreview}
              source={{
                uri:
                  photo ||
                  "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
              }}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Display Name"
            value={fullName}
            onChangeText={setFullname}
            style={styles.input}
          />
          <TextInput
            placeholder="About"
            value={about}
            onChangeText={setAbout}
            style={styles.input}
          />
          <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.userCard}>
            <Image style={styles.userImage} source={{ uri: item.photo }} />
            <View style={styles.userInfo}>
              <Text  onPress={()=>setHeading(fullName)}  style={styles.userName} >{item.fullName}</Text>
              <Text style={styles.userAbout}>{item.about}</Text>
              <TouchableOpacity
                onPress={() => handleEdit(item)}
                style={styles.editButton}
              >
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => dispatch(deleteUser(index))}
                style={styles.deleteButton}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 10,
  },
  greeting: {
    fontSize: 20,
    color: "black",
    marginBottom: 20,
  },
  editForm: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  imagePreview: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
  input: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    width: "90%",
    marginBottom: 10,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#1e90ff",
    padding: 10,
    borderRadius: 5,
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
  },
  userCard: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  userAbout: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  editButton: {
    backgroundColor: "#1e90ff",
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
  },
  editText: {
    color: "#fff",
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    padding: 5,
    borderRadius: 5,
  },
  deleteText: {
    color: "#fff",
    fontSize: 14,
  },
});
