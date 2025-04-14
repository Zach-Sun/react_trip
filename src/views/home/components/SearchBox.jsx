import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Calendar, Toast } from 'antd-mobile';
import styled from 'styled-components';
import { formatMonthDay, getDiffDays } from '@/utils/format_dayjs';
import { setStartTime, setEndTime } from '@/store/modules/gettime';
import locationIcon from '@/assets/img/home/icon_location.png';

const SearchContainer = styled.div`
  padding: 10px 0;
`;

const PositionRow = styled.div`
  height: 50px;
  display: flex;
  padding: 5px 20px;
  align-items: center;
`;

const CityText = styled.div`
  flex: 1;
  font-size: 16px;
  font-weight: bold;
`;

const LocationButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #999;
  cursor: pointer;
`;

const LocationIcon = styled.img`
  width: auto;
  height: 20px;
  margin-left: 5px;
`;

const DateRow = styled.div`
  display: flex;
  height: 50px;
  padding: 5px 20px;
  align-items: center;
`;

const DateItem = styled.div`
  flex: 1;
  position: relative;
`;

const DateLabel = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 5px;
`;

const DateValue = styled.div`
  font-size: 14px;
`;

const StayCount = styled.div`
  margin: 0 15px;
`;

const PeopleRow = styled.div`
  display: flex;
  height: 50px;
  padding: 5px 20px;
  align-items: center;
  color: #666;
  font-size: 14px;
`;

const InputRow = styled.div`
  height: 50px;
  padding: 5px 20px;
  color: #999;
  font-size: 14px;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
`;

const HotSuggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 15px;
  margin-top: -15px;
`;

const HotItem = styled.div`
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
  font-size: 12px;
  color: #3f4954;
  background-color: #f1f3f5;
`;

const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Button = styled.div`
  width: 85%;
  height: 38px;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  color: #fff;
  background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
  cursor: pointer;
`;

const SearchBox = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [stayCount, setStayCount] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentCity } = useSelector(state => state.city);
  const { starttime, endtime } = useSelector(state => state.gettime);
  const { hotSuggestdata } = useSelector(state => state.hotSuggests); // 修正属性名
  const startTimeText = formatMonthDay(starttime);
  const endTimeText = formatMonthDay(endtime);

  const handleCityClick = () => {
    navigate('/city');
  };

  const handlePositionClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`纬度: ${latitude}，经度: ${longitude}`);
          Toast.show('定位成功');
        },
        (error) => {
          let errorMessage = '';
          switch(error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = '用户拒绝了请求地理定位';
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = '位置信息不可用';
              break;
            case error.TIMEOUT:
              errorMessage = '请求用户地理位置超时';
              break;
            case error.UNKNOWN_ERROR:
              errorMessage = '未知错误';
              break;
          }
          Toast.show(errorMessage);
        }
      );
    } else {
      Toast.show('您的浏览器不支持地理定位');
    }
  };

  const handleDateConfirm = (values) => {
    const [start, end] = values;
    dispatch(setStartTime(start));
    dispatch(setEndTime(end));
    setStayCount(getDiffDays(start, end));
    setShowCalendar(false);
  };

  const handleSearch = () => {
    navigate({
      pathname: '/search',
      search: `?start_time=${startTimeText}&end_time=${endTimeText}`
    });
  };

  return (
    <SearchContainer>
      <PositionRow>
        <CityText onClick={handleCityClick}>
          {currentCity?.cityName || '选择城市'}
        </CityText>
        <LocationButton onClick={handlePositionClick}>
          我的位置
          <LocationIcon src={locationIcon} alt="定位" />
        </LocationButton>
      </PositionRow>
      <DateRow onClick={() => setShowCalendar(true)}>
        <DateItem>
          <DateLabel>入住</DateLabel>
          <DateValue>{startTimeText}</DateValue>
        </DateItem>
        <StayCount>共{stayCount}晚</StayCount>
        <DateItem>
          <DateLabel>离店</DateLabel>
          <DateValue>{endTimeText}</DateValue>
        </DateItem>
      </DateRow>
      <Calendar
        visible={showCalendar}
        onClose={() => setShowCalendar(false)}
        onConfirm={handleDateConfirm}
        selectionMode="range"
        color="#ff9854"
      />
      <PeopleRow>
        <div style={{ flex: 1 }}>价格</div>
        <div>人数</div>
      </PeopleRow>
      <InputRow>
        <SearchInput type="text" placeholder="关键字/位置/民宿名" />
      </InputRow>
      <HotSuggestions>
        {hotSuggestdata?.map((item, index) => (
          <HotItem key={index}>{item.tagText?.text}</HotItem>
        ))}
      </HotSuggestions>
      <SearchButton>
        <Button onClick={handleSearch}>开始搜索</Button>
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBox;