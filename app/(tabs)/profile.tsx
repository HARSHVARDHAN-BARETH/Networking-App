import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { RouteProp, useRoute } from '@react-navigation/native';

const profile = () => {
  const route = useRoute<RouteProp<{ params: { name: String, image: String, description: String } }, 'params'>>();
  const { name, image, description } = route.params || {};
  const navigation = useNavigation();
  const [isFollowing, setIsFollowing] = useState(false); // State for follow button

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing); // Toggle the follow state
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 10 }}>Profile Page</Text>
      <View style={{ width: '90%', alignSelf: 'center', marginTop: 20 }}>
        <View style={{ width: '100%', height: 300 }}>
          <Image style={{ width: '100%', height: 300 }} source={{ uri: image }} />
        </View>
        <Text style={{ fontSize: 25, marginTop: 20 }}>{name}</Text>
        <Text style={{ fontSize: 20, marginTop: 10 }}>{description}</Text>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          style={[
            styles.followButton,
            { backgroundColor: isFollowing ? 'red' : '#1e90ff' } // Dynamic background color
          ]}
          onPress={handleFollowToggle} // Handle button press
        >
          <Text style={{ fontSize: 18, color: '#fff' }}>
            {isFollowing ? 'Unfollow' : 'Follow'} {/* Dynamic text */}
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  followButton: {
    width: 100,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
