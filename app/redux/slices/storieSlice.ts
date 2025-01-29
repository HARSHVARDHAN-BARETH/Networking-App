import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootState } from "../store";

const STORAGE_KEY = "user_stories";

// Story type
interface Story {
  id: number;
  content: string;
  createdAt: number;
}

// Slice state type
interface StoriesState {
  stories: Story[];
  loading: boolean;
}

const initialState: StoriesState = {
  stories: [],
  loading: false,
};

// Load stories from AsyncStorage
export const loadStories = createAsyncThunk<Story[]>("stories/load", async () => {
  const storedStories = await AsyncStorage.getItem(STORAGE_KEY);
  return storedStories ? (JSON.parse(storedStories) as Story[]) : [];
});

// Save stories to AsyncStorage
const saveStoriesToStorage = async (stories: Story[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(stories));
  } catch (error) {
    console.error("Error saving stories to AsyncStorage:", error);
  }
};

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    addStory: (state, action: PayloadAction<Omit<Story, "id" | "createdAt">>) => {
      const newStory: Story = {
        ...action.payload,
        id: Date.now(),
        createdAt: Date.now(),
      };
      state.stories.push(newStory);
      saveStoriesToStorage(state.stories);
    },
    removeExpiredStories: (state) => {
      const currentTime = Date.now();
      state.stories = state.stories.filter(
        (story) => currentTime - story.createdAt < 24 * 60 * 60 * 1000 // Keep stories less than 24 hours old
      );
      saveStoriesToStorage(state.stories);
    },
    deleteStory: (state, action: PayloadAction<number>) => {
      state.stories = state.stories.filter(
        (story) => story.id !== action.payload // Remove story with the given id
      );
      saveStoriesToStorage(state.stories);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadStories.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadStories.fulfilled, (state, action) => {
        state.loading = false;
        state.stories = action.payload;
      });
  },
});

export const { addStory, removeExpiredStories, deleteStory } = storiesSlice.actions;
export const selectStories = (state: RootState) => state.stories;
export default storiesSlice.reducer;

