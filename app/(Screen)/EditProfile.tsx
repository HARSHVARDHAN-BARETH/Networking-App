import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { RouteProp, useRoute } from '@react-navigation/native';

const EditProfile = () => {
    const route = useRoute<RouteProp<{ params: { username: String} }, 'params'>>();
      const {username } = route.params || {};
  return (
    <View>
      <Text>Hey!, {username}</Text>
    </View>
  )
}

export default EditProfile