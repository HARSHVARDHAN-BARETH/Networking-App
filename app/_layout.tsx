import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>

      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(Screen)" options={{ headerShown: false }} />
        <Stack.Screen
          name="signin"
          options={{ presentation: "modal", headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          options={{ presentation: "modal", headerShown: false }}
        />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="modesSelection" options={{ headerShown: false }} />
        <Stack.Screen name="timeScreen" options={{ headerShown: false }} />
      </Stack>
      </PersistGate>

    </Provider>
  );
}
