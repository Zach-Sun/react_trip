import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import allOrderReducer, { fetchAllOrder } from './modules/allorder';
import categoriesReducer, { fetchCategories } from './modules/categories';
import cityReducer, { fetchAllCityData, setCurrentCity } from './modules/city';
import detailReducer, { getDetailData } from './modules/detail';
import favorReducer, { fetchFavor } from './modules/favor';
import historyReducer, { fetchHistory } from './modules/history';
import homeListReducer, { fetchHomeList } from './modules/homelist';
import hotSuggestsReducer, { fetchHotSuggests } from './modules/hotSuggests';
import loadingReducer, { setLoading } from './modules/loading';
import notOrderReducer, { fetchNotOrder } from './modules/notorder';
import searchReducer, { fetchSearch } from './modules/search';
import getTimeReducer, { setStartTime, setEndTime } from './modules/gettime';

export const store = configureStore({
  reducer: {
    allOrder: allOrderReducer,
    categories: categoriesReducer,
    city: cityReducer,
    detail: detailReducer,
    favor: favorReducer,
    history: historyReducer,
    homelist: homeListReducer,
    hotSuggests: hotSuggestsReducer,
    loading: loadingReducer,
    notorder: notOrderReducer,
    search: searchReducer,
    gettime: getTimeReducer
  }
});

// 导出用于组件中的 hooks
export const useLoadingStore = () => ({
  isLoading: useSelector((state) => state.loading.isLoading),
  setLoading: (payload) => store.dispatch(setLoading(payload))
});

export const useAllOrderStore = () => ({
  allorderdata: useSelector(state => state.allOrder.allorderdata),
  fetchAllOrder: () => store.dispatch(fetchAllOrder())
});

export const useCategoriesStore = () => ({
  categoriedata: useSelector(state => state.categories.categoriedata),
  fetchCategories: () => store.dispatch(fetchCategories())
});

export const useCityStore = () => ({
  citydata: useSelector(state => state.city.citydata),
  currentcity: useSelector(state => state.city.currentcity),
  fetchAllCityData: () => store.dispatch(fetchAllCityData()),
  setCurrentCity: (payload) => store.dispatch(setCurrentCity(payload))
});

export const useDetailStore = () => ({
  detaildata: useSelector(state => state.detail.detaildata),
  getDetailData: (houseId) => store.dispatch(getDetailData(houseId))
});

export const useFavorStore = () => ({
  favordata: useSelector(state => state.favor.favordata),
  fetchFavor: () => store.dispatch(fetchFavor())
});

export const useHistoryStore = () => ({
  historydata: useSelector(state => state.history.historydata),
  fetchHistory: () => store.dispatch(fetchHistory())
});

export const useHomeListStore = () => ({
  homelistdata: useSelector(state => state.homelist.homelistdata),
  currentpage: useSelector(state => state.homelist.currentpage),
  fetchHomeList: () => store.dispatch(fetchHomeList())
});

export const useHotSuggestsStore = () => ({
  hotSuggestdata: useSelector(state => state.hotSuggests.hotSuggestdata),
  fetchHotSuggests: () => store.dispatch(fetchHotSuggests())
});

export const useNotOrderStore = () => ({
  notorderdata: useSelector(state => state.notorder.notorderdata),
  fetchNotOrder: () => store.dispatch(fetchNotOrder())
});

export const useSearchStore = () => ({
  searchdata: useSelector(state => state.search.searchdata),
  fetchSearch: () => store.dispatch(fetchSearch())
});

export const useGetTimeStore = () => ({
  starttime: useSelector(state => state.gettime.starttime),
  endtime: useSelector(state => state.gettime.endtime),
  setStartTime: (payload) => store.dispatch(setStartTime(payload)),
  setEndTime: (payload) => store.dispatch(setEndTime(payload))
});

export default store;