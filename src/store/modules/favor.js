import { createSlice } from '@reduxjs/toolkit';
import getFavorData from '@/service/modules/favor';

const favorSlice = createSlice({
  name: 'favor',
  initialState: {
    favordata: {}
  },
  reducers: {
    setFavorData: (state, action) => {
      state.favordata = action.payload;
    }
  }
});

export const fetchFavor = () => async (dispatch) => {
  const res = await getFavorData();
  dispatch(setFavorData(res.data));
};

export const { setFavorData } = favorSlice.actions;
export default favorSlice.reducer;