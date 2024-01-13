import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister, getUsers ,updateUser , getUsersById , getUserCartById} from "./userApi";
let userToken = localStorage.getItem("userToken");
let userId = localStorage.getItem("userId");

const initialState = {
  loginedUser: [],
  userRegister: [],
  userLogout: [],
  allUser: [],
  putUser:[],
  getSingle:[],
  cart:[],
  token:userToken,
  id:userId,
  status: "idle",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "success";
        state.loginedUser = action.payload;
        console.log(action.payload);
      })
      .addCase(userLogin.rejected, (state) => {
        state.status = "failed";
      })

      // ====================================================================

      .addCase(userRegister.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.userRegister = action.payload;
      })
      .addCase(userRegister.rejected, (state) => {
        state.status = "Failed";
      })

      // ======================================================================

      .addCase(getUsers.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.allUser = action.payload;
        // console.log(state.singleProduct);
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = "Failed";
      })

    // =====================================================================

    //         .addCase(deleteCategoryById.pending, (state) => {
    //             state.status = "Loading";
    //         })
    //         .addCase(deleteCategoryById.fulfilled, (state, action) => {
    //             state.deleteCategoryById = action.payload;
    //         })
    //         .addCase(deleteCategoryById.rejected, (state) => {
    //             state.status = "Failed";
    //         })



    .addCase(updateUser.pending, (state) => {
        state.status = "Loading";
    })
    .addCase(updateUser.fulfilled, (state, action) => {
        state.putUser = action.payload;
        console.log(state.putUser);
    })
    .addCase(updateUser.rejected, (state) => {
        state.status = "Failed";
    })

// =====================================================================

    .addCase(getUsersById.pending, (state) => {
  state.status = "Loading";
    })
    .addCase(getUsersById.fulfilled, (state, action) => {
      state.getSingle = action.payload;
      // console.log(state.singleProduct);
    })
    .addCase(getUsersById.rejected, (state) => {     
  state.status = "Failed";
    })


    .addCase(getUserCartById.pending, (state) => {
      state.status = "Loading";
        })
        .addCase(getUserCartById.fulfilled, (state, action) => {
          state.cart = action.payload;
          // console.log(state.singleProduct);
        })
        .addCase(getUserCartById.rejected, (state) => {     
      state.status = "Failed";
        })


  },
});

export default userSlice.reducer;
