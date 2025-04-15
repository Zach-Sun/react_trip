import { createSlice } from '@reduxjs/toolkit';
import getSearch from '@/service/modules/search';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchdata: {}
  },
  reducers: {
    setSearchData: (state, action) => {
      state.searchdata = action.payload;
    }
  }
});

export const fetchSearch = () => async (dispatch) => {
  const res = await getSearch();
  dispatch(setSearchData(res.data));
};

export const { setSearchData } = searchSlice.actions;
export default searchSlice.reducer;