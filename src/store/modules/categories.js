// src/store/modules/categories.js
import { createSlice } from '@reduxjs/toolkit';
import getCategories from '@/service/modules/categories';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categoriedata: {} // 保持与原 Pinia 完全相同的字段名
  },
  reducers: {
    setData: (state, action) => {
      state.categoriedata = action.payload; // 直接替换数据
    }
  }
});

// 对应原 Pinia 的 action
export const fetchCategories = () => async (dispatch) => {
  const res = await getCategories();
  dispatch(setData(res.data)); // 完全相同的赋值逻辑
};

export const { setData } = categoriesSlice.actions;
export default categoriesSlice.reducer;