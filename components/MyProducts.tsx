import { View, Text,Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

const MyProducts = ({title,name,description}) => {
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

export default MyProducts

const styles = StyleSheet.create({
    shadowContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
        borderRadius: 10,
        shadowColor: '#000', 
        shadowOpacity: 0.35, 
        shadowRadius: 10, 
        shadowOffset: { width: 0, height: 4 }, 
        elevation: 12, 
      },
    
});
      
