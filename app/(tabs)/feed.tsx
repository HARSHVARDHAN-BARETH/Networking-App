import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Array from '@/components/array';
import AppConstants from '@/components/constants/dimensions';
import UserContent from '@/components/userContent';
import { RouteProp, useRoute } from '@react-navigation/native';

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(Array);

  const navigation = useNavigation();
  const route = useRoute<RouteProp<{ params: { userName: String, userId: String, selectedModes: String } }, 'params'>>();
  const { userName, userId, selectedModes } = route.params || {};

  const filteredContent = selectedModes.includes("All")
    ? Object.values(UserContent).flat()
    : selectedModes.flatMap((mode) => UserContent[mode]);

  const handleSearch = (text) => {
    setSearchText(text);
    if (text === '') {
      setFilteredPosts(Array);
    } else {
      const filtered = Array.filter((item) =>
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
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate('(Screen)', {
                  screen: 'userProfile',
                  params: {
                    photo: item.photo,
                    name: item.name,
                    bio: item.Bio,
                    image: item.image,
                    description: item.description,
                  },
                })
              }
            >
              {/* Conditionally render the image or photo */}
              <Image
                source={{ uri: searchText ? item.photo : item.image }}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>{item.name}</Text>
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
    backgroundColor: AppConstants.AppBgColor.bgWhite,
  },
  searchContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: AppConstants.AppMargin.margin20,
    marginBottom: AppConstants.AppMargin.margint10,
    padding: AppConstants.AppPadding.padding10,
  },
  searchInput: {
    fontSize: AppConstants.AppFont.fontSize20,
    padding: AppConstants.AppPadding.padding10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  listContainer: {
    flex: 1,
    width: '90%',
    padding: AppConstants.AppPadding.padding10,
    alignSelf: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 0,
  },
  contentContainer: {
    paddingBottom: AppConstants.AppPadding.padding20,
  },
  card: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontSize: AppConstants.AppFont.fontSize15,
    fontWeight: 'bold',
    marginBottom: AppConstants.AppMargin.margint10,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 0,
  },
});
