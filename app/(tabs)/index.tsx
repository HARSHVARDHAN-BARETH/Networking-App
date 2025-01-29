import { Button, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { RouteProp, useRoute } from '@react-navigation/native';
import myArray from '@/components/array';
import UserContent from '@/components/userContent';
import AppConstants from '@/components/constants/dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { loadStories, removeExpiredStories } from '../redux/slices/storieSlice';
import type { RootState, AppDispatch } from "../redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";


const HomeScreen = () => {
    const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute<RouteProp<{ params: { userName: String,userId:String, selectedModes:String } }, 'params'>>();
  const { userName, userId, selectedModes } = route.params || {};

   const users = useSelector((state: RootState) => state.users.users);
    const posts = useSelector((state: RootState) => state.posts.posts);
  
    const getPostsByUser = (userId: string | number) => {
      if (!userId) return [];
      return posts.filter((post) => String(post.userId) === String(userId));
    };
    console.log(selectedModes);

 const filteredContent = selectedModes.includes("All")
   ? Object.values(UserContent).flat()
   : selectedModes.flatMap((mode) => UserContent[mode]);

  // const [Array, setArray] = useState([
  //   {
  //     id: 0,
  //     name: 'User 1',
  //     photo: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
  //     Bio: 'Software Developer, India',
  //     description: 'Just one small positive thought in the morning can change your whole day',
  //     image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  //     tags: '#welcome #good',
  //     comments: [],
  //   },
  //   {
  //     id: 1,
  //     name: 'User 2',
  //     photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCwXFbpWQJzEvfTNGePdj95M250jlNpMFIZ_hlTsd6Go6ZsEX9asR-Z0H8Y4PZwcV0bAY&usqp=CAU',
  //     Bio: 'Software Engineer, India',
  //     description: '“Try not to become a man of success, but rather try to become a man of value.”',
  //     image: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
  //     tags: '#welcome #good',
  //     comments: [],
  //   },
  //   {
  //     id: 2,
  //     name: 'User 3',
  //     photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuBJT5wHCiGz1_ahHSkMCToJutWRc7_GtpEklerkC0wtu0zj9j0mRsCuUVCWRx4gtCQkc&usqp=CAU',
  //     Bio: 'UI UX, India',
  //     description: 'Success consists of going from failure to failure without loss of enthusiasm',
  //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-I8sc0-8ejEAggzXAm9mxB0TmKWm24XJUQaWz-WyBgtiungnZDwvC1LaBX5CUrvLmcT4&usqp=CAU',
  //     tags: '#welcome #good',
  //     comments: [],
  //   },
  //   {
  //     id: 3,
  //     name: 'User 4',
  //     photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADCNb2Pjkg0GPJOwfI9Ktfp4EtO6VNMsw6nbkDKEDp2X0pu4AhDVDQiPQBJ-K_Y2gdys&usqp=CAU',
  //     Bio: 'Python Developer, India',
  //     description: 'Either you run the day or the day runs you, it means you can manage, control the time what you want',
  //     image: 'https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg',
  //     tags: '#welcome #good',
  //     comments: [],
  //   },
  //   {
  //     id: 4,
  //     name: 'User 5',
  //     photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXkm9cY-Ipyw3K7evHgNYtEyyE8BR-UnS_038_nPtW_tMa2vVNLCvUghurggQQ-Vzq0c&usqp=CAU',
  //     Bio: 'React Developer, India',
  //     description: 'Perseverance is not a long race; it is many short races one after the other.',
  //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6D6L-tO--2vsGd6XlgXwFpa3LWthJwXFmR8f7vVz7ZvBzhLSsk2Lqg1DYbuvCbBS6PBM&usqp=CAU',
  //     tags: '#welcome #good',
  //     comments: [],
  //   },
  //   {
  //     id: 5,
  //     name: 'User 6',
  //     photo: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
  //     Bio: 'Software Developer, India',
  //     description: 'Action is the foundational key to all success',
  //     image: 'https://rszr.getimg.ai/resize?url=https%3A%2F%2Fimg1.getimg.ai%2Fgenerated%2F3bcfb5df-0400-40c2-b31d-3e8b08e29ade%2Fimg-7rFkxY2FNxXdYTStZ33D0.jpeg&type=webp&width=3840&speed=5',
  //     tags: '#welcome #good',
  //     comments: [],
  //   },
  //   {
  //     id: 6,
  //     name: 'User 7',
  //     photo: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369989.png',
  //     Bio: 'ML Engineer, India',
  //     description: 'Just made something pretty cool Every step, every detail, every prompt wes all in this thread',
  //     image: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-800x525.jpg',
  //     tags: '#welcome #good',
  //     comments: [],
  //   },
  //   {
  //     id: 7,
  //     name: 'User 8',
  //     photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScdEP0XYKKbu-mQ7XY8mzYlbZqjAMXr_nDqHInVXmNm_dNsld1aLON8Ud4KNx6g8u2JuA&usqp=CAU',
  //     Bio: 'Java Developer, India',
  //     description: '“It is never too late to be what you might have been.”',
  //     image: 'https://pixlr.com/images/generator/image-editor.webp',
  //     tags: '#welcome #good',
  //     comments: [],
  //   },
  //   {
  //     id: 8,
  //     name: 'User 9',
  //     photo: 'https://png.pngtree.com/png-vector/20221203/ourmid/pngtree-cartoon-style-female-user-profile-icon-vector-illustraton-png-image_6489286.png',
  //     Bio: 'Software Developer, India',
  //     description: '“Opportunities don’t happen, you create them.”',
  //     image: 'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
  //     tags: '#welcome #good',
  //     comments: [],
  //   },
  // ]);  

  const [islike,setLike] = useState(false)
  const [comment, setComment] = useState('');
  const [showInput, setShowInput] = useState(null); 
  const [accordionIndex, setAccordionIndex] = useState(null); 


  const [loginTime, setLoginTime] = useState(null);

  useEffect(() => {
    const checkLoginTime = async () => {
      const storedLoginTime = await AsyncStorage.getItem("loginTime");
      console.log("Login Time:", storedLoginTime); // Debugging purpose
      setLoginTime(storedLoginTime); // Store it in state if needed
    };

    checkLoginTime();
  }, []);



  const handleAddComment = (index) => {
    if (comment.trim()) {

      const updatedArray = [...Array]; 

      updatedArray[index] = {
        ...updatedArray[index], 
        comments: [...updatedArray[index].comments, comment.trim()], 
      };
  

      setArray(updatedArray); 
      setComment('');
      setShowInput(null);
    }
  };
  
  const toggleAccordion = (index) => {
    setAccordionIndex(accordionIndex === index ? null : index);
  };

  const stories = useSelector((state) => state.stories.stories);

  useEffect(() => {
    dispatch(loadStories());
    const interval = setInterval(() => {
      dispatch(removeExpiredStories());
    }, 60 * 60 * 1000); // Check every hour
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
      <Text style={{ fontSize: 20, marginLeft: 13 }} onPress={()=>navigation.navigate('(Screen)',{screen:'EditProfile',params:{username:userName}})}><Text style={{color:'crimson',marginRight:5}}>Welcome!</Text>{userName}</Text>

      {loginTime ? (
        <Text onPress={()=>navigation.navigate('(Screen)',{
          screen:'calculateTime'
        })} style={{ fontSize: 10, marginTop: 10 }}>
          Login Time: {new Date(parseInt(loginTime)).toLocaleString()}
        </Text>
      ) : (
        <Text style={{ fontSize: 16, marginTop: 10 }}>
          Fetching login time...
        </Text>
      )}
      </View>
    
      <View style={{ width: '90%',
         alignSelf: 'center',flexDirection:'row',alignItems:'center',
          marginTop: AppConstants.AppMargin.margint10,
          marginLeft:AppConstants.AppMargin.margin20 }}>
          <FlatList
  data={[...stories].sort((a, b) => b.createdAt - a.createdAt).slice(0, 1)} // Sirf latest story dikhane ke liye
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={[styles.storyCard, {}]}
      onPress={() =>
        navigation.navigate("(Screen)", {
          screen: "viewStory",
        })
      }
    >
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("(Screen)", {
            screen: "storyManagment",
          })
        }
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1e90ff",
          borderRadius: 50,
          width: 30,
          height: 30,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: [{ translateX: -15 }, { translateY: -10 }],
          zIndex: 2,
        }}
      >
        <Text style={{ fontSize: 40, color: "#fff" }}>+</Text>
      </TouchableOpacity>
      <Image
        source={{ uri: item.image }}
        style={[styles.storyImage, { borderRadius: 50 }]}
      />
    </TouchableOpacity>
  )}
/>

        <FlatList
          data={filteredContent}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <View >
                <TouchableOpacity onPress={() => navigation.navigate('(Screen)', {
                  screen: 'Home',
                  params: {
                    name: item.image,
                    title: item.name,
                    description: item.description
                  }
                })}>
                  <Image style={{ width: 100, height: 100, borderRadius: '50%', borderColor: 'red', borderWidth: 2 }} source={{ uri: item.image }} />
                </TouchableOpacity>
              </View>
            )
          }} />
      </View>

      <View style={{ width: '90%', 
        flex: 1, alignSelf: 'center', 
        borderColor: 'black', 
        marginTop: AppConstants.AppMargin.margint10,
        padding:AppConstants.AppPadding.padding10 }}>
       
        <FlatList
          data={filteredContent}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <View style={{ marginTop: AppConstants.AppMargin.margin20 }}>
                
               <View style={{flexDirection:'row', gap:10}}>
               <Image style={{width:30,height:30, borderRadius:'50%'}} source={{uri:item.photo}}/>
                <Text style={{ fontSize: 25 }}>{item.name}</Text>
               </View>
                <TouchableOpacity onPress={() => navigation.navigate('(Screen)', {
                  screen: 'userProfile',
                  params: {
                    photo:item.photo,
                    bio:item.Bio,
                    name: item.name,
                    image: item.image,
                    description: item.description,
                    comment:item.comments,
                    userName:userName
                  }
                })}>
                  <Image source={{ uri: item.image }} style={{ width: '100%', height: 290, marginTop: 10, borderRadius: 20 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: AppConstants.AppFont.fontSize20, 
                  marginTop: AppConstants.AppMargin.margint10 }}>{item.description}</Text>
                <Text style={{ color: 'blue', fontSize: 15, marginTop: 5 }}>{item.tags}</Text>


                 
                <View style={{ flexDirection: 'row', backgroundColor: AppConstants.AppBgColor.bgWhite, gap: 10 }}>
                <TouchableOpacity style={{backgroundColor:islike?'#fff':'#fff'}} 
                    onPress={()=>setLike(!islike)}>
                        <Text style={{fontSize:AppConstants.AppFont.fontSize20}}>
                        {
                          islike ? '♡' : '❤️'
                        }
                        </Text>
                    </TouchableOpacity>   

                    {/* comments */}
                    {showInput === index ? (
                    <View style={[styles.commentInputContainer, { padding: 5, flexDirection: 'row', height: 20, alignItems: 'center', gap: 10, marginTop: 15 }]}>

                      <TextInput
                        style={[styles.input, { width: 230 }]}
                        placeholder="Write a comment..."
                        value={comment}
                        onChangeText={setComment}
                      />
                      <Text style={{fontSize:30}} onPress={() => handleAddComment(index)}>✅</Text>
                    </View>
                  ) : (
                    <TouchableOpacity
                      onPress={() => setShowInput(index)}
                    >
                      <Image style={{ width: 30, height: 30 }} source={require('../../assets/images/comment.png')} />
                    </TouchableOpacity>
                  )}

                  <View>
                    <TouchableOpacity
                      onPress={() => toggleAccordion(index)}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 5,
                        backgroundColor: '#fff',
                        borderRadius: 5,
                      }}
                    >
                      {accordionIndex === index ? (
                        <Image
                          style={{ width: 20, height: 20 }}
                          source={require('../../assets/images/up-arrow.png')}
                        />
                      ) : (
                        <Image
                          style={{ width: 20, height: 20 }}
                          source={require('../../assets/images/arrow.png')}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>

                <View>
                  {accordionIndex === index && (
                    <View style={styles.commentsContainer}>
                      {item.comments.length > 0 ? (
                        item.comments.map((comment, commentIndex) => (
                          <Text key={commentIndex} style={styles.commentText}>
                            {comment}
                          </Text>
                        ))
                      ) : (
                        <Text style={styles.noCommentsText}>No comments yet.</Text>
                      )}
                    </View>
                  )}
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
    flex: 1,
    backgroundColor: AppConstants.AppBgColor.bgWhite
  },
  commentButton: {
    marginTop: AppConstants.AppMargin.margint10,
    backgroundColor: '#007BFF',
    padding: AppConstants.AppPadding.padding10,
    borderRadius: 10,
    alignItems: 'center',
  },
  commentButtonText: {
    color: AppConstants.AppColor.fontColorWhite,
    fontSize: AppConstants.AppFont.fontSize15,
    fontWeight: 'bold',
  },
  commentText: {
    marginTop: AppConstants.AppMargin.margint10,
    fontSize: AppConstants.AppFont.fontSize15,
    fontStyle: 'italic',
    color: 'gray',
  },
  commentInputContainer: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    marginTop: 10,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
  storyCard: { marginBottom: 16,  padding: 8 },
  storyImage: {borderColor:'red',borderWidth:2,marginTop:10, width: 100, height: 100 },
  storyTitle: { fontWeight: 'bold', marginVertical: 4 },
  storyDescription: { color: 'gray' },

  accordionButton: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
  },
  accordionButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  commentsContainer: {
    paddingTop: 0,
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  noCommentsText: {
    fontSize: 14,
    color: '#888',
  },

})