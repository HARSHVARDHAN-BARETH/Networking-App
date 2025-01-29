// StoriesScreen.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadStories, removeExpiredStories, deleteStory } from '../redux/slices/storieSlice';
import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from 'expo-router';

const StoriesScreen = () => {
  const dispatch = useDispatch();
  const stories = useSelector((state) => state.stories.stories);
   const navigation = useNavigation();
  // Load stories and set up interval to remove expired stories
  useEffect(() => {
    dispatch(loadStories());
    const interval = setInterval(() => {
      dispatch(removeExpiredStories());
    }, 60 * 60 * 1000); // Check every hour
    return () => clearInterval(interval);
  }, [dispatch]);

  // Render the story list
  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{gap:20}}
        renderItem={({ item }) => (
          <View style={styles.storyCard}>
            {/* Delete button */}
            <Text style={{color:'#fff'}} onPress={()=>navigation.goBack()}>Back</Text>
            <TouchableOpacity
              style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}
              onPress={() => dispatch(deleteStory(item.id))} // Pass item.id to deleteStory
            >
              <AntDesign name="delete" size={24} color="#fff" />
            </TouchableOpacity>
            <View style={{ width: 320, height: 300, justifyContent: 'center', alignItems: 'center', aspectRatio:1.2 }}>
              <Image resizeMode="contain" source={{ uri: item.image }} style={styles.storyImage} />
            </View>

            {/* Story details */}
            <Text style={styles.storyTitle}>{item.title}</Text>
            <Text style={styles.storyDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default StoriesScreen;

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#000' },
  storyCard: { marginBottom: 16, borderWidth: 1, borderColor: '#fff', padding: 8, width:340 ,height:400,marginTop:50},
  storyImage: { width: '100%', height: 300, aspectRatio: 1.2, alignSelf: 'center'},
  storyTitle: { fontWeight: 'bold', color: '#fff', marginVertical: 4 },
  storyDescription: { color: '#fff' },
});
