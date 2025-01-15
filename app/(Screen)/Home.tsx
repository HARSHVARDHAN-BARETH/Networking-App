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

<<<<<<< HEAD
=======
const styles = StyleSheet.create({
  shadowContainer:{
    shadowColor: 'white', // Shadow color
    shadowOffset: { width: 1, height: 5 }, // Shadow position
    shadowOpacity: 1.5, // Opacity of the shadow
    shadowRadius: 10, // Blur effect
    elevation: 10, // Shadow on Android
  }
})
>>>>>>> ba7a8ff0d6222e050faa50abb313d28d1f5f07f8
