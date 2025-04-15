import { createSlice } from '@reduxjs/toolkit';
import getHotSuggests from '@/service/modules/hotSuggests';

const hotSuggestsSlice = createSlice({
  name: 'hotSuggests',
  initialState: {
    hotSuggestdata: []
  },
  reducers: {
    setHotSuggestData: (state, action) => {
      state.hotSuggestdata = action.payload;
    }
  }
});

export const fetchHotSuggests = () => async (dispatch) => {
  const res = await getHotSuggests();
  dispatch(setHotSuggestData(res.data));
};

export const { setHotSuggestData } = hotSuggestsSlice.actions;
export default hotSuggestsSlice.reducer;