// src/store/modules/history.js
import { createSlice } from '@reduxjs/toolkit';
import getHistory from '@/service/modules/history';

const historySlice = createSlice({
  name: 'history',
  initialState: {
    historydata: {}  // 保持与原 Pinia 相同的字段名
  },
  reducers: {
    setHistoryData: (state, action) => {
      state.historydata = action.payload;  // 直接替换数据
    }
  }
});

// 对应原 Pinia 的 action
export const fetchHistory = () => async (dispatch) => {
  const res = await getHistory();
  dispatch(setHistoryData(res.data));
};

export const { setHistoryData } = historySlice.actions;
export default historySlice.reducer;