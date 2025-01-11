import React from 'react';
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name='index' options={{
        title: 'Home',
        tabBarIcon: ({ color }) => (
          <Ionicons name='home-outline' size={22} color="black" />
        )
      }} />
      <Tabs.Screen name='profile' options={{
        title: 'Profile',
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name='user' size={22} color="black" />
        )
      }} />
      <Tabs.Screen name='feed' options={{
        title: 'Feed',
        tabBarIcon: ({ color }) => (
          <AntDesign name="pluscircleo" size={24} color="black" />
        )
      }} />
    </Tabs>
  );
}