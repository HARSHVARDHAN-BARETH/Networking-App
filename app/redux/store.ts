import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "../redux/slices/userSlice";
import postReducer from "../redux/slices/postSlice";
import storyReducer from '../redux/slices/storieSlice'
// Utility Functions with TypeScript
export const saveData = async (key: string, value: unknown): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving data to AsyncStorage:", error);
  }
};

export const getData = async <T>(key: string): Promise<T | null> => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? (JSON.parse(data) as T) : null;
  } catch (error) {
    console.error("Error retrieving data from AsyncStorage:", error);
    return null;
  }
};

// Redux Persist Configuration
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

// Root Reducer: Combine all slices
const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
  stories:storyReducer
});

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux Store Configuration
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
    }),
});

// Persistor
export const persistor = persistStore(store);

// TypeScript Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
