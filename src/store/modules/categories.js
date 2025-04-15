import { createSlice } from '@reduxjs/toolkit';
import getCategories from '@/service/modules/categories';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categoriedata: {}
  },
  reducers: {
    setData: (state, action) => {
      state.categoriedata = action.payload;
    }
  }
});

export const fetchCategories = () => async (dispatch) => {
  const res = await getCategories();
  dispatch(setData(res.data));
};

export const { setData } = categoriesSlice.actions;
export default categoriesSlice.reducer;