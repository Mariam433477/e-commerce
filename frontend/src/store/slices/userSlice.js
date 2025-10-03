import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addUser, getUsers } from "../../custom/Api/userApi";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return await getUsers();
});

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (newUser) => {
    return await addUser(newUser);
  }
);
export const loginUser = createAsyncThunk(
  "users/loginUser",
  async ({ email, password }) => {
    const users = await getUsers();

    
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) throw new Error("Invalid email or password");

    return user;  
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    status: "idle",
    error: null,
     loggedInUser: null,
  },
  reducers: {
     logout: (state) => {
      state.loggedInUser = null; 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.list.push(action.payload);  
      });


      builder.addCase(loginUser.fulfilled, (state, action) => {
  state.loggedInUser = action.payload;  
})
.addCase(loginUser.rejected, (state, action) => {
  state.error = action.error.message;
});
  },
});

 
export const { logout } = usersSlice.actions;
export const userReducer = usersSlice.reducer;