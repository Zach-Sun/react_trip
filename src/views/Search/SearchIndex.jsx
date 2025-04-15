import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import SearchTabbar from '@/components/tabbar/SearchTabbar';
import SearchResult from '@/components/search/SearchResult';
import SearchItem from '@/components/search/SearchItem';
import Favors from '../../components/favor/Favors';

const SearchContainer = styled.div`
  &.tabbarhidden {
    padding-bottom: 0;
  }
`;

const TopBar = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  padding: 10px 0;
`;

const BackButton = styled.div`
  z-index: 99;
  margin-left: 5px;
  line-height: 40px;
  color: #ff9854;
  cursor: pointer;
`;

const SearchBarWrapper = styled.div`
  flex: 1;
  padding: 0 30px;
`;

const MoreText = styled.div`
  z-index: 99;
  position: absolute;
  right: 5px;
  font-size: 12px;
  line-height: 45px;
  color: #666;
`;

const MainContent = styled.div`
  padding: 10px 0;
`;

const SearchIndex = () => {
  const navigate = useNavigate();
  const { searchdata } = useSelector(state => state.search);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <SearchContainer className="tabbarhidden">
      <TopBar>
        <BackButton onClick={handleBack}>
          <LeftOutlined style={{ fontSize: '20px' }} />
        </BackButton>
        <SearchBarWrapper>
          <SearchTabbar />
        </SearchBarWrapper>
        <MoreText>更多</MoreText>
      </TopBar>
      <MainContent>
        <Favors />
      </MainContent>
    </SearchContainer>
  );
};

export default SearchIndex;