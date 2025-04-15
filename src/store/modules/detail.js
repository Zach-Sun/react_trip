import { createSlice } from '@reduxjs/toolkit';
import getDetail from '@/service/modules/detail';

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    detaildata: {}
  },
  reducers: {
    setDetailData: (state, action) => {
      state.detaildata = action.payload;
    }
  }
});

export const getDetailData = (houseId) => async (dispatch) => {
  const res = await getDetail(houseId);
  dispatch(setDetailData(res.data));
};

export const { setDetailData } = detailSlice.actions;
export default detailSlice.reducer;