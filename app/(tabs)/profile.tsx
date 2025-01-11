import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const profile = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30, textAlign:'center'}}>Profile Page</Text>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  }
})