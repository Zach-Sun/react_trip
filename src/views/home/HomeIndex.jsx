import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { throttle } from 'lodash';
import SearchTabbar from '@/components/tabbar/SearchTabbar';
import HomeList from '@/components/home-list/HomeList';
import HomeCategories from '@/components/home_categories/HomeCategories';
import SearchBox from './components/SearchBox';
import { fetchHomeList } from '@/store/modules/homeList';
import bannerImg from '@/assets/img/home/banner.webp';

const HomeContainer = styled.div`
  height: 100vh;
  padding-bottom: 50px;
  box-sizing: border-box;
  overflow-y: auto;
`;

const Title = styled.div`
  margin: 15px auto;
  padding: 0 135px;
  font-size: 25px;
  font-weight: 700;
  color: #ff9854;
  text-align: center;
`;

const Banner = styled.div`
  img {
    width: 100%;
    display: block;
  }
`;

const useScrollHandler = (fetchMoreData) => {
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = throttle((e) => {
      const { scrollTop, offsetHeight, scrollHeight } = e.target;
      // 触底加载更多
      if (scrollTop + offsetHeight + 1 >= scrollHeight) {
        fetchMoreData();
      }
      // 显示/隐藏搜索栏
      setShowSearch(scrollTop >= 500);
    }, 500);
    const container = document.querySelector('.home-container');
    container?.addEventListener('scroll', handleScroll);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, [fetchMoreData]);

  return showSearch;
};

const HomeIndex = () => {
  const dispatch = useDispatch();
  const showSearch = useScrollHandler(() => dispatch(fetchHomeList()));

  return (
    <HomeContainer className="home-container">
      <Title>弘源旅途</Title>
      <Banner>
        <img src={bannerImg} alt="旅行banner" />
      </Banner>
      <SearchBox />
      <HomeCategories />
      {showSearch && <SearchTabbar />}
      <HomeList />
    </HomeContainer>
  );
};

export default HomeIndex;