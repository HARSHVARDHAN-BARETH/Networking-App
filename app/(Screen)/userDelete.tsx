import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { RouteProp, useRoute } from "@react-navigation/native";
import { deleteUser } from "../redux/slices/userSlice";



const userDelete = () => {
    const users = useSelector((state: RootState) => state.users.users);
    const dispatch: AppDispatch = useDispatch();

  return (
    <View>
      <Text>userDelete</Text>
                <FlatList
                    data={users}
                    renderItem={({ item, index }) => (
                        <View key={index} style={{ marginTop: 10 }}>
                            <Image source={{uri:item.photo}} style={{width:100,height:100}}/>
                            <Text>{item.fullName}</Text>
                            <Text>{item.name}</Text>
                            <Text>{item.password}</Text>
                            <Text>{item.about}</Text>
                            <TouchableOpacity onPress={()=>dispatch(deleteUser(index))}>
                                <Text>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
           
    </View>
  )
}

export default userDelete