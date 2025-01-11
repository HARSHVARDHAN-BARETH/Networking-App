import { Stack } from "expo-router";

const ScreenLayout = () => {
  return (
    <Stack>
      {/* Home screen is defined here */}
      <Stack.Screen name="Home" options={{ title: "Home Screen" }} />
    </Stack>
  );
};

export default ScreenLayout;
