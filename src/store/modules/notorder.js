// src/store/modules/notorder.js
import { createSlice } from '@reduxjs/toolkit';
import getNotOrder from '@/service/modules/notorder';

const notOrderSlice = createSlice({
  name: 'notorder',
  initialState: {
    notorderdata: {}  // 保持与原 Pinia 相同的字段名（修正拼写为 notorderdata）
  },
  reducers: {
    setNotOrderData: (state, action) => {
      state.notorderdata = action.payload;
    }
  }
});

// 对应原 Pinia 的 action
export const fetchNotOrder = () => async (dispatch) => {
  const res = await getNotOrder();
  dispatch(setNotOrderData(res.data));
};

export const { setNotOrderData } = notOrderSlice.actions;
export default notOrderSlice.reducer;