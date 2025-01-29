import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const FeedPage = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const posts = useSelector((state: RootState) => state.posts.posts);

  const getPostsByUser = (userId: string | number) => {
    if (!userId) return [];
    return posts.filter((post) => String(post.userId) === String(userId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Feed Page</Text>
<View style={{width:'90%',alignSelf:'center'}}>
{users.length > 0 ? (
        <FlatList
          data={users}
          keyExtractor={(user) => user.id}
          renderItem={({ item: user }) => {
            const userPosts = getPostsByUser(user.id);

            return (
              <View style={styles.userContainer}>
                <Text style={styles.userName}>{user.name}</Text>
                {userPosts.length > 0 ? (
                  <FlatList
                    data={userPosts}
                    keyExtractor={(post) => post.id}
                    renderItem={({ item: post }) => (
                      <View style={styles.postContainer}>
                        <Text style={styles.postTitle}>{post.title}</Text>
                        <Text style={styles.postDescription}>
                          {post.description}
                        </Text>
                        <Image
                          style={styles.postImage}
                          source={{ uri: post.image }}
                        />
                        <Text style={styles.postDate}>
                          {new Date(post.date).toLocaleString()}
                        </Text>
                      </View>
                    )}
                  />
                ) : (
                  <Text style={styles.noPostsText}>No posts found.</Text>
                )}
              </View>
            );
          }}
        />
      ) : (
        <Text style={styles.noUsersText}>No users found.</Text>
      )}
</View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  userContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  postContainer: {
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 5
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "bold"
  },
  postDescription: {
    fontSize: 14,
    color: "#555", marginVertical: 5
  },
  postImage: {
    width: "100%",
    height: 150, borderRadius: 5,
    marginBottom: 5
  },
  postDate: {
    fontSize: 12,
    color: "gray"
  },
  noPostsText: {
    fontSize: 14,
    color: "#888",
    fontStyle: "italic"
  },
  noUsersText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center"
  },
});

export default FeedPage;
