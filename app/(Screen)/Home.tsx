import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation, useRouter} from 'expo-router'
import { RouteProp, useRoute } from '@react-navigation/native'

const Home = () => {
  const route = useRoute<RouteProp<{params:{name:String,title:String,description:String}}, 'params'>>();
  const {name,title,description} = route.params||{}
  const navigation = useNavigation();
  return (
    <View style={{flex:1, backgroundColor:'black'}}>
       <View style={{width:'90%', alignSelf:'center', marginTop:30}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Text style={{color:'white', fontSize:25, marginBottom:20}}>{title}</Text>
          <Image style={[styles.shadowContainer,{width:'100%',height:400, borderRadius:20}]} source={{uri:name}}/>
          <Text style={{color:'white',fontSize:25, marginTop:20}}>{description}</Text>
        </TouchableOpacity>
       </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  shadowContainer:{
    shadowColor: 'white', // Shadow color
    shadowOffset: { width: 1, height: 5 }, // Shadow position
    shadowOpacity: 1.5, // Opacity of the shadow
    shadowRadius: 10, // Blur effect
    elevation: 10, // Shadow on Android
  }
})