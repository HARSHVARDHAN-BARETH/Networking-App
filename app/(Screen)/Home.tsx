import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation, useRouter} from 'expo-router'
import { RouteProp, useRoute } from '@react-navigation/native'
import MyProducts from '@/components/MyProducts'

const Home = () => {
  const route = useRoute<RouteProp<{params:{name:String,title:String,description:String}}, 'params'>>();
  const {name,title,description} = route.params||{}

  return (
      <MyProducts title={title} name={name} description={description}/>
  )
}

export default Home

