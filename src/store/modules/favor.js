// src/store/modules/favor.js
import { createSlice } from '@reduxjs/toolkit';
import getFavorData from '@/service/modules/favor';

const favorSlice = createSlice({
  name: 'favor',
  initialState: {
    favordata: {}  // 保持与原 Pinia 相同的字段名
  },
  reducers: {
    setFavorData: (state, action) => {
      state.favordata = action.payload;  // 直接替换数据
    }
  }
});

// 对应原 Pinia 的 action
export const fetchFavor = () => async (dispatch) => {
  const res = await getFavorData();
  dispatch(setFavorData(res.data));
};

export const { setFavorData } = favorSlice.actions;
export default favorSlice.reducer;