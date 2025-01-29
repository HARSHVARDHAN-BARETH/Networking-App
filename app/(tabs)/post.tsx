import { View, Text, TextInput, TouchableOpacity, Button, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { RouteProp } from "@react-navigation/native";
import { addPost,deletePost } from "../redux/slices/postSlice";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";


const post = () => {
  
  const navigation = useNavigation();
  const route = useRoute<RouteProp<{ params: { userName: String,userId:String } }, 'params'>>();
  const { userName,userId } = route.params || {};
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postImage, setPostImage] = useState("");

  const posts = useSelector((state: RootState) => state.posts.posts);
  const dispatch: AppDispatch = useDispatch();

  const handleAddPost = () => {

    console.log("Post Title:", postTitle);
    console.log("Post Description:", postDescription);
    console.log("Post Image:", postImage);
    console.log("User ID:", userId); 

  
    if (postTitle.trim() && postDescription.trim() && postImage.trim() && userId) {
      const currentDate = new Date();
      dispatch(
        addPost({
          id: Date.now(),
          userId: userId, 
          title: postTitle,
          description: postDescription,
          image: postImage,
          date: currentDate.toISOString(),
        })
      );


      setPostTitle("");
      setPostDescription("");
      setPostImage("");
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };


  const userPosts = posts.filter((post) => post.userId === userId);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "500", marginBottom: 10 }}>
        Create a Post
      </Text>


      <View>
        <TextInput
          placeholder="Enter Post Title"
          value={postTitle}
          onChangeText={setPostTitle}
          style={{
            fontSize: 18,
            borderBottomWidth: 1,
            marginBottom: 20,
            paddingBottom: 5,
          }}
        />
        <TextInput
          placeholder="Enter Description"
          value={postDescription}
          onChangeText={setPostDescription}
          style={{
            fontSize: 18,
            borderBottomWidth: 1,
            marginBottom: 20,
            paddingBottom: 5,
          }}
        />
        <TextInput
          placeholder="Enter Image URL"
          value={postImage}
          onChangeText={setPostImage}
          style={{
            fontSize: 18,
            borderBottomWidth: 1,
            marginBottom: 20,
            paddingBottom: 5,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#1e90ff",
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 0,
            borderColor:'black',
            borderWidth:1
          }}
          onPress={handleAddPost}
        >
          <Text style={{ fontSize: 18, color: "#fff" }}>Add Post</Text>
        </TouchableOpacity>
      </View>


      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 30 }}>
        Your Posts:
      </Text>
      {userPosts.length > 0 ? (
        userPosts.map((post) => (
          <View
            key={post.id}
            style={{
              marginVertical: 10,
              padding: 10,
              borderWidth: 1,
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 14, color: "gray" }}>
              {formatDate(post.date)}
            </Text>
           <View>
           <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {post.title}
            </Text>
            <TouchableOpacity onPress={()=>dispatch(deletePost(post.id))}>
            </TouchableOpacity>
           </View>
           <View style={{width:320,height:400}}> 
           <Image
              style={{ width: 320, height: 395, marginTop: 10 }}
              source={{ uri: post.image }}
            />
           </View>
          </View>
        ))
      ) : (
        <Text style={{ fontSize: 16, color: "#555" }}>No posts found.</Text>
      )}
    </ScrollView>
  );
};

export default post;
