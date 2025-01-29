import React from 'react';
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation, useRouter } from 'expo-router';
import { RouteProp, useRoute } from '@react-navigation/native';

export default function TabLayout() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<{ params: { userName: String,userId:String,selectedModes:String } }, 'params'>>();
  // const { userName,userId } = route.params || {};

  const { userName,userId,selectedModes } = route.params || {};  

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{
        title: "Home",
        tabBarIcon: ({ color }) => (
          <Ionicons name="home-outline" size={22} color="black" />
        ),
      }}
      initialParams={{userName,userId, selectedModes}} />
      
      <Tabs.Screen name="feed" options={{
        title: "Feed",
        tabBarIcon: ({ color }) => (
          <Feather name="search" size={24} color="black" />

        ),
      }}
      initialParams={{selectedModes}} />
     

         <Tabs.Screen
        name="post"
        options={{
          title: "Post",
          tabBarIcon: ({ color }) => (
            <AntDesign name="pluscircleo" size={24} color="black" />
          ),
        }}
        initialParams={{ userId }} // Pass params here
      />
      <Tabs.Screen name="reelse" options={{
        title: "Reels",
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="ondemand-video" size={24} color="black" />
        ),
      }} />
      {/* Pass userId as params to the "post" screen */}
   
      <Tabs.Screen name="profile" options={{
        title: "Profile",
        tabBarIcon: ({ color }) => (
          <AntDesign name="user" size={24} color="black" />

        ),
      }}
      initialParams={{userName}} 
      />
    </Tabs>
  );
}
