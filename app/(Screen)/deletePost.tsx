import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { RouteProp, useRoute } from "@react-navigation/native";
import { deletePost } from "../redux/slices/postSlice";


const DeletePost = () => {

    const posts = useSelector((state: RootState) => state.posts.posts);
    const dispatch: AppDispatch = useDispatch();
  

  return (
    <View style={{flex:1}}>
      <Text>deletePost</Text>
      <View style={{width:'90%',alignSelf:'center',flex:1}}>
        <FlatList
        data={posts}
        renderItem={({item,index})=>{
            return(
                <View>
                  <View style={{width:300,height:400}}>
                  <Image style={{width:'100%',height:400}} source={{uri:item.image}}/>

                  </View>
                  <Text onPress={()=>dispatch(deletePost(index))}>Delete</Text>
                </View>
            )
        }}/>
      </View>
    </View>
  )
}

export default DeletePost