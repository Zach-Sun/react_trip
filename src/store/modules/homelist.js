// src/store/modules/homelist.js
import { createSlice } from '@reduxjs/toolkit';
import getHomeList from '@/service/modules/homelist';

const homeListSlice = createSlice({
  name: 'homelist',
  initialState: {
    homelistdata: [],
    currentpage: 1
  },
  reducers: {
    appendHomeListData: (state, action) => {
      state.homelistdata.push(...action.payload);
    },
    incrementPage: (state) => {
      state.currentpage++;
    }
  }
});

// 对应原 Pinia 的 action
export const fetchHomeList = () => async (dispatch, getState) => {
  const currentPage = getState().homelist.currentpage;
  const res = await getHomeList(currentPage);
  dispatch(appendHomeListData(res.data));
  dispatch(incrementPage());
};

export const { appendHomeListData, incrementPage } = homeListSlice.actions;
export default homeListSlice.reducer;