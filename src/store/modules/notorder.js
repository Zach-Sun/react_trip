import { createSlice } from '@reduxjs/toolkit';
import getNotOrder from '@/service/modules/notorder';

const notOrderSlice = createSlice({
  name: 'notorder',
  initialState: {
    notorderdata: {}
  },
  reducers: {
    setNotOrderData: (state, action) => {
      state.notorderdata = action.payload;
    }
  }
});

export const fetchNotOrder = () => async (dispatch) => {
  const res = await getNotOrder();
  dispatch(setNotOrderData(res.data));
};

export const { setNotOrderData } = notOrderSlice.actions;
export default notOrderSlice.reducer;