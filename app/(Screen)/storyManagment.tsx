import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStory } from '../redux/slices/storieSlice';
import { View, TextInput, Button, Image, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from 'expo-router';

const AddStoryScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const pickImage = async () => {
    // Request permissions if not granted
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission Denied', 'You need to allow access to your media library to pick an image.');
      return;
    }

    // Launch the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // Update to use the correct asset structure
    }
  };

  const handleSubmit = () => {
    if (!image || !title || !description) {
      Alert.alert('Error', 'Please fill in all fields and select an image.');
      return;
    }

    dispatch(addStory({ title, description, image }));
    Alert.alert('Success', 'Story added successfully!');
    // Reset state after submission
    setTitle('');
    setDescription('');
    setImage(null);
  };

  return (
    <View style={styles.container}>
      <Text onPress={()=>navigation.goBack()}>Back</Text>
      <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
        {image ? (
          <Image source={{ uri: image }} style={styles.imagePreview} />
        ) : (
          <Text style={styles.imagePickerText}>Pick an Image</Text>
        )}
      </TouchableOpacity>
      <TextInput
        placeholder="Title"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Description"
        style={[styles.input, styles.textArea]}
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title="Add Story" onPress={handleSubmit} />
        <TouchableOpacity style={{backgroundColor:'#1e90ff',marginTop:20,justifyContent:'center',alignItems:'center',height:40}}
             onPress={() =>
              navigation.navigate("(Screen)", {
                screen: "viewStory",
              })
            }
            >
              <Text style={{color:'#fff', fontSize:20}}>View</Text>
            </TouchableOpacity>
    </View>
  );
};

export default AddStoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  imagePicker: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
  },
  imagePickerText: {
    color: '#888',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});
