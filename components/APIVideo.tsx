// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
// import Video from 'react-native-video';
// import axios from 'axios';

// interface VideoData {
//   id: number;
//   tags: string;
//   user: string;
//   views: number;
//   likes: number;
//   comments: number;
//   videos: {
//     tiny: {
//       url: string;
//       thumbnail: string;
//     };
//     small: {
//       url: string;
//       thumbnail: string;
//     };
//     medium: {
//       url: string;
//       thumbnail: string;
//     };
//     large: {
//       url: string;
//       thumbnail: string;
//       height:number;

//     };
//   };
// }

// const VideoList = () => {
//   const [videos, setVideos] = useState<VideoData[]>([]);

//   const fetchVideos = async () => {
//     try {
//       const response = await axios.get(
//         'https://pixabay.com/api/videos/?key=48395595-82493b77b86ca78abc8e51aa5&q=yellow+flowers&pretty=true'
//       );
//       setVideos(response.data.hits);
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//     }
//   };

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   const renderItem = ({ item }: { item: VideoData }) => (
//     <View style={styles.card}>

//      <View style={{width:'100%',height:200}}>
//      <Video
//         source={{ uri: item.videos.large.url }}
//         style={styles.video}
//         resizeMode="contain"
//         repeat
//         muted
//         controls={false} 
//         // autoplay
//       />

//      </View>
//       <View style={styles.details}>
//         <Text style={styles.tags}>Tags: {item.tags}</Text>
//         <Text style={styles.info}>Views: {item.views}</Text>
//         <Text style={styles.info}>Likes: {item.likes}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={videos}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderItem}
//         showsVerticalScrollIndicator={false}
//       />
//     </View>
//   );
// };

// export default VideoList;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     padding: 10,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     backgroundColor:'#000',
//     textAlign: 'center',
//   },
//   card: {
//     backgroundColor: '#000',
//     borderRadius: 10,
//     marginBottom: 3,
//     overflow: 'hidden',
//     height:320,
//     elevation: 3,
//   },
//   video: {
//     width: Dimensions.get('window').width - 60, 
//     height: 300,
//   },
//   details: {
//     padding: 0,
//   },
//   tags: {
//     fontSize: 14,
//     fontWeight: '300',
//     color: '#fff',
//     marginBottom: 5,
//   },
//   info: {
//     fontSize: 12,
//     color: '#fff',
//   },
// });
