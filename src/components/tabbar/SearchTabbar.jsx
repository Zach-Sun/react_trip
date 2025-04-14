import React from 'react';
import { useSelector } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import { formatMonthDay } from '@/utils/format_dayjs';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  z-index: 9;
  background-color: #fff;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 45px;
  line-height: 45px;
  padding: 0 10px;
  font-size: 14px;
  color: #999;
  border-radius: 6px;
  background: #f2f4f6;
`;

const SearchTime = styled.div`
  display: flex;
  flex-direction: column;
`;

const TimeItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: normal;
  font-size: 10px;
  font-weight: bold;
  color: black;
`;

const SearchBody = styled.div`
  position: relative;
  flex: 1;
  padding: 0 6px;
  text-align: left;
  border-left: 1px solid #fff;
`;

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
`;

const SearchTabbar = () => {
  const { starttime, endtime } = useSelector(state => state.gettime);
  const start_time = formatMonthDay(starttime);
  const end_time = formatMonthDay(endtime);

  return (
    <SearchBarContainer>
      <SearchWrapper>
        <SearchTime>
          <TimeItem className="starttime">住 {start_time}</TimeItem>
          <TimeItem className="endtime">离 {end_time}</TimeItem>
        </SearchTime>
        <SearchBody>关键字/位置/民宿</SearchBody>
        <SearchIcon>
          <SearchOutlined />
        </SearchIcon>
      </SearchWrapper>
    </SearchBarContainer>
  );
};

export default SearchTabbar;