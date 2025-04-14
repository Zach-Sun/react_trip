// src/store/modules/allorder.js
import { createSlice } from '@reduxjs/toolkit';
import { getAllOrders } from '@/service/modules/allorder';

const allOrderSlice = createSlice({
  name: 'allOrder',
  initialState: {
    allorderdata: {}
  },
  reducers: {
    setData: (state, action) => {
      state.allorderdata = action.payload;
    }
  }
});

// 对应原 action
export const fetchAllOrder = () => async (dispatch) => {
  const res = await getAllOrders();
  dispatch(setData(res.data));
};

export const { setData } = allOrderSlice.actions;
export default allOrderSlice.reducer;