import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
  fullName:String;
  password:String;
  about:String;
  photo:String;
  email: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },

    updateUser: (
      state,
      action: PayloadAction<{ id: number; data: Partial<User> }>
    ) => {
      const { id, data } = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.users[userIndex] = { ...state.users[userIndex], ...data }; // Problem is here
      }
    },
    

    deleteUser: (state, action: PayloadAction<number>) => {
      state.users.splice(action.payload, 1);
    },
  },
});

export const { addUser, updateUser, deleteUser } = UserSlice.actions;
export default UserSlice.reducer;
