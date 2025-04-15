import { createSlice } from '@reduxjs/toolkit';
import getHistory from '@/service/modules/history';

const historySlice = createSlice({
  name: 'history',
  initialState: {
    historydata: {}
  },
  reducers: {
    setHistoryData: (state, action) => {
      state.historydata = action.payload;
    }
  }
});

export const fetchHistory = () => async (dispatch) => {
  const res = await getHistory();
  dispatch(setHistoryData(res.data));
};

export const { setHistoryData } = historySlice.actions;
export default historySlice.reducer;