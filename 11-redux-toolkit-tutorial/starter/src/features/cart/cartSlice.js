import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//import { openModal } from "../modal/modalSlice";
//import cartItems from "../../cartItems";

const url = "https://course-api.com/react-useReducer-cart-project";

// export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
//   return fetch(url)
//     .then((resp) => resp.json())
//     .catch((error) => console.log(error));
// });

// export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
//   try {
//     const resp = await fetch(url);
//     const data = await resp.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//     return;
//   }
// });

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkApi) => {
    try {
      console.log(name);
      //console.log(thunkApi);
      //console.log(thunkApi.getState());
      //thunkApi.dispatch(openModal());
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue("something went wrong");
    }
  }
);

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  // extraReducers: {
  //   [getCartItems.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [getCartItems.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     state.cartItems = action.payload;
  //   },
  //   [getCartItems.rejected]: (state) => {
  //     state.isLoading = false;
  //   },
  // },

  //builder callback notation
  extraReducers:(builder)=>{
    builder.addCase(getCartItems.pending,(state)=>{
      state.isLoading = true;
    })
    .addCase(getCartItems.fulfilled,(state,action)=>{
      console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    })
    .addCase(getCartItems.rejected,(state,action)=>{
      console.log(action);
      state.isLoading = false;
    })
  }
});


export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
