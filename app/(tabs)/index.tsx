import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const array = [
  {
    image:'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
  },
  {
    image:'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
  },
  {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-I8sc0-8ejEAggzXAm9mxB0TmKWm24XJUQaWz-WyBgtiungnZDwvC1LaBX5CUrvLmcT4&usqp=CAU'
  },
  {
    image:'https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg'
  },
  {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6D6L-tO--2vsGd6XlgXwFpa3LWthJwXFmR8f7vVz7ZvBzhLSsk2Lqg1DYbuvCbBS6PBM&usqp=CAU'
  },
  {
    image:'https://rszr.getimg.ai/resize?url=https%3A%2F%2Fimg1.getimg.ai%2Fgenerated%2F3bcfb5df-0400-40c2-b31d-3e8b08e29ade%2Fimg-7rFkxY2FNxXdYTStZ33D0.jpeg&type=webp&width=3840&speed=5'
  },
  {
    image:'https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-800x525.jpg'
  },
  {
    image:'https://pixlr.com/images/generator/image-editor.webp'
  },
  {
    image:'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true'
  },
]

const posts = [
  {
    id:0,
    name:'User 1',
    Image:'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
    description:'Just made something pretty cool Every step, every detail, every prompt wes all in this thread',
    tags:'#Welcome #Success'
  },
  {
    id:1,
    name:'User 2',
    Image:'https://pixlr.com/images/generator/image-editor.webp',
    description:'Just made something pretty cool Every step, every detail, every prompt wes all in this thread',
    tags:'#Welcome #Success'
  },
]
const HomeScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text></Text>
      <View style={{width:'90%', alignSelf:'center', marginTop:20}}>
            <FlatList
            data={array}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap:10}}
            horizontal
            renderItem={({item,index})=>{
              return(
                <View >
                  <Image style={{width:100,height:100, borderRadius:'50%',borderColor:'red',borderWidth:2}} source={{uri:item.image}}/>
                </View>
              )
            }}/>
      </View>
      <View style={{width:'90%',flex:1,alignSelf:'center', borderColor:'black',marginTop:10}}>
       <FlatList
       data={posts}
       showsVerticalScrollIndicator={false}
       renderItem={({item,index})=>{
        return(
          <View style={{marginTop:20}}>
            <Text style={{fontSize:25}}>{item.name}</Text>
            <Image source={{uri:item.Image}} style={{width:'100%',height:290,marginTop:10, borderRadius:20}} />
            <Text style={{fontSize:22, marginTop:10}}>{item.description}</Text>
            <Text style={{color:'blue', fontSize:20}}>{item.tags}</Text>
            </View>
        )
       }}
       />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:'white'
  }
})