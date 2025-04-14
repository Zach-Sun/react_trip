// src/store/modules/gettime.js
import { createSlice } from '@reduxjs/toolkit';

const startTime = new Date();
const endTime = new Date();
endTime.setDate(startTime.getDate() + 1);

const getTimeSlice = createSlice({
  name: 'gettime',
  initialState: {
    starttime: startTime,
    endtime: endTime
  },
  reducers: {
    setStartTime: (state, action) => {
      state.starttime = action.payload;
    },
    setEndTime: (state, action) => {
      state.endtime = action.payload;
    }
  }
});

export const { setStartTime, setEndTime } = getTimeSlice.actions;
export default getTimeSlice.reducer;