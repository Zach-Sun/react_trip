// src/store/modules/hotSuggests.js
import { createSlice } from '@reduxjs/toolkit';
import getHotSuggests from '@/service/modules/hotSuggests';

const hotSuggestsSlice = createSlice({
  name: 'hotSuggests',
  initialState: {
    hotSuggestdata: []  // 保持与原 Pinia 相同的字段名和初始值
  },
  reducers: {
    setHotSuggestData: (state, action) => {
      state.hotSuggestdata = action.payload;  // 直接替换数据
    }
  }
});

// 对应原 Pinia 的 action
export const fetchHotSuggests = () => async (dispatch) => {
  const res = await getHotSuggests();
  dispatch(setHotSuggestData(res.data));
};

export const { setHotSuggestData } = hotSuggestsSlice.actions;
export default hotSuggestsSlice.reducer;