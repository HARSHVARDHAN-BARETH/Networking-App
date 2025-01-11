import { Stack } from 'expo-router';



export default function RootLayout() {
 
  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="signin" options={{ presentation: 'modal',headerShown: false }} />
        <Stack.Screen name="signup" options={{ presentation: 'modal',headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }}/>
      </Stack>
  );
}