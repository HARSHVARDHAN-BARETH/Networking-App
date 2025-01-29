import { Stack } from "expo-router";

const ScreenLayout = () => {
  return (
    <Stack>
      {/* Home screen is defined here */}
      <Stack.Screen name="Home" options={{ title: "Home Screen" , headerShown:false}} />
      <Stack.Screen name="EditProfile" options={{ title: "Home Screen" , headerShown:false}} />
      <Stack.Screen name="movie" options={{ title: "Home Screen" , headerShown:false}} />
      <Stack.Screen name="userDelete" options={{ title: "Home Screen" , headerShown:false}} />

      <Stack.Screen name="userProfile" options={{ title: "Home Screen" , headerShown:false}} />
      <Stack.Screen name="userFeed" options={{ title: "Home Screen" , headerShown:false}} />
      <Stack.Screen name="viewStory" options={{ title: "Home Screen" , headerShown:false}} />
      <Stack.Screen name="storyManagment" options={{ title: "Home Screen" , headerShown:false}} />
      <Stack.Screen name="calculateTime" options={{ title: "Home Screen" , headerShown:false}} />
      <Stack.Screen name="deletePost" options={{ title: "Home Screen" , headerShown:false}} />
    </Stack>
  );
};

export default ScreenLayout;
