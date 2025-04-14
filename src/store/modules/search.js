// src/store/modules/search.js
import { createSlice } from '@reduxjs/toolkit';
import getSearch from '@/service/modules/search';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchdata: {}  // 保持与原 Pinia 相同的字段名
  },
  reducers: {
    setSearchData: (state, action) => {
      state.searchdata = action.payload;  // 直接替换数据
    }
  }
});

// 对应原 Pinia 的 action
export const fetchSearch = () => async (dispatch) => {
  const res = await getSearch();
  dispatch(setSearchData(res.data));
};

export const { setSearchData } = searchSlice.actions;
export default searchSlice.reducer;