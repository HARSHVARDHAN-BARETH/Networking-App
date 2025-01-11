import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const posts = [
  { id: 0, name: 'User 1', Image: 'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true', description: 'Just made something pretty cool', tags: '#Welcome #Success' },
  { id: 1, name: 'User 2', Image: 'https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg', description: 'Something amazing', tags: '#Amazing' },
  { id: 2, name: 'User 3', Image: 'https://pixlr.com/images/generator/image-editor.webp', description: 'Creative ideas', tags: '#Creative #Inspire' },
  { id: 3, name: 'User 4', Image: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-800x525.jpg', description: 'Happy days', tags: '#Happy' },
  { id: 4, 
    name: 'User 5', 
    Image: 'https://img.freepik.com/free-photo/cartoon-tropical-island-landscape_23-2151724039.jpg',
     description: 'Happy days', 
     tags: '#Happy' },
  { id: 5, 
    name: 'User 6', 
    Image: 'https://th.bing.com/th/id/OIG4.hb6x6NsHBTvbDGaD13Ua',
     description: 'Happy days', 
     tags: '#Happy' },
  { id: 6, 
    name: 'User 7', 
    Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlEUTOyjHzrv3KAUnGiO8fhn-P0QZD1UsREaPSNKZ24bNWhMwoHHsKVhkRoMtm6NT73J4&usqp=CAU',
     description: 'Happy days', 
     tags: '#Happy' },
  { id: 7, 
    name: 'User 8', 
    Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAhvc-YjdwsimlEYdOknxcvbgNOVSHWjkWQ&s',
     description: 'Happy days', 
     tags: '#Happy' },
  { id: 8, 
    name: 'User 9', 
    Image: 'https://img.freepik.com/free-photo/indonesia-landscape-digital-art_23-2151625214.jpg',
     description: 'Happy days', 
     tags: '#Happy' },
  { id: 9, 
    name: 'User 10', 
    Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAzb-fAs4SmF6kMMawXUSOjh1xRlRXzQrsGvjTylYImcj9pjnNCB_JNZnRJwIiJUwfi8&usqp=CAU',
     description: 'Happy days', 
     tags: '#Happy' },
  { id: 10, 
    name: 'User 11', 
    Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnU-2is9fhPKyumrA6XmpbIjyOaoqwEoYyFMjHuHFHvU3Xxu7SxC6GUCvIYaD6kXY6ERI&usqp=CAU',
     description: 'Happy days', 
     tags: '#Happy' },
  { id: 11, 
    name: 'User 12', 
    Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NBcUtamcQLjkrXRGDGcEBLR2SMrN7_rzFQo7dSjKkzL5QgR9iz90bOZ-28zRDheZKeM&usqp=CAU',
     description: 'Happy days', 
     tags: '#Happy' },
];

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const navigation = useNavigation();

  // Function to handle search input
  const handleSearch = (text) => {
    setSearchText(text);
    if (text === '') {
      setFilteredPosts(posts); // Reset to full list if search text is empty
    } else {
      const filtered = posts.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search by name"
          style={styles.searchInput}
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>

      {/* Post List */}
      <View style={styles.listContainer}>
        <FlatList
          data={filteredPosts}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.columnWrapper}
          contentContainerStyle={styles.contentContainer}
          renderItem={({ item }) => (
         <TouchableOpacity style={styles.card}
         onPress={()=>navigation.navigate('(tabs)',{
          screen:'profile',
          params:{
            name:item.name,
            image:item.Image,
            description:item.description
          }
         })}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Image source={{ uri: item.Image }} style={styles.cardImage} />
         </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  searchInput: {
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  listContainer: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  card: {
    width: '45%',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
});
