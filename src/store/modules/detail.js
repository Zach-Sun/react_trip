// src/store/modules/detail.js
import { createSlice } from '@reduxjs/toolkit';
import getDetail from '@/service/modules/detail';

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    detaildata: {}  // 保持与原 Pinia 相同的字段名
  },
  reducers: {
    setDetailData: (state, action) => {
      state.detaildata = action.payload;  // 直接替换数据
    }
  }
});

// 对应原 Pinia 的 action（带参数版本）
export const getDetailData = (houseId) => async (dispatch) => {
  const res = await getDetail(houseId);  // 保持参数传递
  dispatch(setDetailData(res.data));
};

export const { setDetailData } = detailSlice.actions;
export default detailSlice.reducer;