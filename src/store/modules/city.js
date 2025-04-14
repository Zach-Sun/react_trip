// src/store/modules/city.js
import { createSlice } from '@reduxjs/toolkit';
import { getCityAll } from '@/service/modules/city';

const citySlice = createSlice({
  name: 'city',
  initialState: {
    citydata: {},
    currentcity: {
      cityName: "南京" // 保持默认值完全相同
    }
  },
  reducers: {
    setCityData: (state, action) => {
      state.citydata = action.payload;
    },
    setCurrentCity: (state, action) => {
      state.currentcity = action.payload;
    }
  }
});

// 对应原 Pinia 的 action
export const fetchAllCityData = () => async (dispatch) => {
  const res = await getCityAll();
  dispatch(setCityData(res.data));
};

export const { setCityData, setCurrentCity } = citySlice.actions;
export default citySlice.reducer;