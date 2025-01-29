import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface MovieData {
   Title: string;
   Year: string;
   Rated: string;
   Released: string;
   Runtime: string;
   Genre: string;
   Director: string;
   Writer: string;
   Actors: string;
}

const Movie = () => {
   const [value, setValue] = useState<MovieData[]>([]);

   const movieApi = async () => {
       try {
           const response = await axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=3cdf22be');
           const movie: MovieData = response.data;
           setValue([movie]); 
       } catch (error) {
           console.error('error!', error);
       }
   };

   useEffect(() => {
       movieApi();
   }, []);

   return (
       <View style={{flex:1,backgroundColor:'#fff'}}>
           <Text>Movies</Text>
           <FlatList
               data={value}
               keyExtractor={(item, index) => index.toString()}
               renderItem={({ item }) => (
                   <View>
                       <Text> {item.Title}</Text>
                       <Text>{item.Year}</Text>
                       <Text>{item.Genre}</Text>
                       <Text>{item.Writer}</Text>
                       <Text>{item.Actors}</Text>
                       <Text>{item.Released}</Text>
                       <Text>{item.Rated}</Text>
                   </View>
               )}
           />
       </View>
   );
};

export default Movie;
