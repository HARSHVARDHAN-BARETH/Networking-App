import { Button, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { RouteProp, useRoute } from '@react-navigation/native';

type Props = {}

const array = [
  { 
    name:'User 1',
    description:'Just made something pretty cool Every step, every detail, every prompt wes all in this thread',
    image:'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
   tags:'#welcome #good'
  },
  {
    name:'User 2',
    description:'Just made something pretty cool Every step, every detail, every prompt wes all in this thread',
        image:'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
        tags:'#welcome #good'

  },
  {
    name:'User 3',
    description:'Just made something pretty cool Every step, every detail, every prompt wes all in this thread',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-I8sc0-8ejEAggzXAm9mxB0TmKWm24XJUQaWz-WyBgtiungnZDwvC1LaBX5CUrvLmcT4&usqp=CAU'
  },
  {
    name:'User 4',
    description:'Just made something pretty cool Every step, every detail, every prompt wes all in this thread',
        image:'https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg'
  },
  {
    name:'User 5',
    description:'Just made something pretty cool Every step, every detail, every prompt wes all in this thread',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6D6L-tO--2vsGd6XlgXwFpa3LWthJwXFmR8f7vVz7ZvBzhLSsk2Lqg1DYbuvCbBS6PBM&usqp=CAU'
  },
  {
    name:'User 6',
    description:'Just made something pretty cool Every step, every detail, every prompt wes all in this thread',
        image:'https://rszr.getimg.ai/resize?url=https%3A%2F%2Fimg1.getimg.ai%2Fgenerated%2F3bcfb5df-0400-40c2-b31d-3e8b08e29ade%2Fimg-7rFkxY2FNxXdYTStZ33D0.jpeg&type=webp&width=3840&speed=5'
  },
  {
    name:'User 7',
    description:'Just made something pretty cool Every step, every detail, every prompt wes all in this thread',
        image:'https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-800x525.jpg'
  },
  {
    name:'User 1',
    description:'Just made something pretty cool Every step, every detail, every prompt wes all in this thread',
    image:'https://pixlr.com/images/generator/image-editor.webp'
  },
  {
    name:'User 1',
    description:'Just made something pretty cool Every step, every detail, every prompt wes all in this thread',
    image:'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true'
  },
]

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<{ params: { name: String } }, 'params'>>();
  const { name } = route.params || {};

  const [comment,setComment] = useState('comment...');
  const [show,setShow] = useState(false)

  const reset = ()=>{
    setComment('');
    setShow(false)
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20, marginLeft:13}}>{name}</Text>
      <View style={{width:'90%', alignSelf:'center', marginTop:20}}>
            <FlatList
            data={array}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap:10}}
            horizontal
            renderItem={({item,index})=>{
              return(
                <View >
                  <TouchableOpacity onPress={()=>navigation.navigate('(Screen)',{
                    screen:'Home',
                    params:{
                      name:item.image,
                      title:item.name,
                      description:item.description
                    }
                  })}>
                  <Image style={{width:100,height:100, borderRadius:'50%',borderColor:'red',borderWidth:2}} source={{uri:item.image}}/>
                  </TouchableOpacity>
                </View>
              )
            }}/>
      </View>
      <View style={{width:'90%',flex:1,alignSelf:'center', borderColor:'black',marginTop:10}}>
       <FlatList
       data={array}
       showsVerticalScrollIndicator={false}
       renderItem={({item,index})=>{
        return(
          <View style={{marginTop:20}}>
            <Text style={{fontSize:25}}>{item.name}</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('(tabs)',{
              screen:'profile',
              params:{
                name:item.name,
                image:item.image,
                description:item.description
              }
            })}>
              <Image source={{uri:item.image}} style={{width:'100%',height:290,marginTop:10, borderRadius:20}} />
            </TouchableOpacity>
            <Text style={{fontSize:22, marginTop:10}}>{item.description}</Text>
            <Text style={{color:'blue', fontSize:15, marginTop:5}}>{item.tags}</Text>
            
            <View>
               {
                (show) ? (<View>
                  <Text> <TextInput placeholder={`${comment}`} onChangeText={(e)=>setComment(e)} value={comment}/></Text>
                </View>) : (<View>
                  <TextInput placeholder='comment...' onChangeText={(e)=>setComment(e)} value={comment}/>
                     {comment.trim().length > 0 && (
    <Button
      title="Submit"
      onPress={() => setShow(true)}
    />
  )}
                </View>     )
               } 
            </View>
            
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