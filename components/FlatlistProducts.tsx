import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router';
import Array from './array'

const FlatlistProducts = ()=>{
  
  const navigation = useNavigation();

  const handlePress = (item) => {
       navigation.navigate(()=>'(Screen)',{
        screen: 'Home',
        params: {
          name: item.image,
          title: item.name,
          description: item.description
        }
       })
  

  return (
    <View>
      <FlatList
        data={Array}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
        horizontal
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity onPress={() => handlePress(item)}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    borderColor: 'red',
                    borderWidth: 2,
                  }}
                  source={{ uri: item.image }}
                />
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
}

export default FlatlistProducts;
