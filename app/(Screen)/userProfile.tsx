import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { RouteProp, useRoute } from '@react-navigation/native';

const userProfile = () => {
  const route = useRoute<RouteProp<{ params: {photo:String,bio:String, name: String, image: String, description: String, comment:String, userName:String } }, 'params'>>();
  const {photo,bio, name, image, description, comment, userName } = route.params || {};
  const navigation = useNavigation();
  const [isFollowing, setIsFollowing] = useState(false); // State for follow button

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing); // Toggle the follow state
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 10 }}>Profile Page</Text>
      <ScrollView>
      <View style={{ width: '90%', alignSelf: 'center', marginTop: 20 }}>
        <View style={{ width: '100%', height: 200 , alignItems:'center'}}>
          <Image style={{ width: '60%', height: 200 , borderRadius:'50%'}} source={{ uri: photo }} />
        </View>
        <Text style={{ fontSize: 25, marginTop: 10 }}>{name}</Text>
        <Text style={{ fontSize: 18, marginTop: 2 }}>{bio}</Text>
      <View style={{ marginTop: 10 }}>
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

      <View style={{marginTop:10}}>
        <Text style={{textAlign:'center', marginTop:10,fontSize:20,borderBottomColor:'gray',borderBottomWidth:1}}>All Activities</Text>
         <View style={{width:'100%',height:200, marginTop:10}}>
         <Image style={{width:'100%',height:200,marginTop:10}} source={{uri:image}}/>
         </View>

         <View style={{marginTop:20,height:100}}>
          <Text style={{fontSize:20}}>{description}</Text>
          <Text style={{color:'gray'}}>{`${userName} by ${comment}`}</Text>
         </View>
      </View>

      </View>
      </ScrollView>
    </View>
  );
};

export default userProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  followButton: {
    width: 100,
    padding: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
