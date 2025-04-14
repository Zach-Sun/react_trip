import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HomeContent from './HomeContent';
import HomeContentDiscount from './HomeContentDiscount';
import { fetchHomeList } from '@/store/modules/homelist';

const HomeListContainer = styled.div`
  padding: 20px 0;
`;

const Title = styled.div`
  font-size: 15px;
  padding: 0 20px;
  margin-bottom: 15px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

const HomeList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { homelistdata } = useSelector(state => state.homelist);

  useEffect(() => {
    dispatch(fetchHomeList());
  }, [dispatch]);

  const handleItemClick = (itemData) => {
    navigate(`/detail/${itemData.houseId}`);
  };

  return (
    <HomeListContainer>
      <Title>
        <h2>热门精选</h2>
      </Title>
      <ContentWrapper>
        {homelistdata?.map((item, index) => {
          if (item.discoveryContentType === 9) {
            return (
              <div key={index} onClick={() => handleItemClick(item.data)}>
                <HomeContent itemdata={item.data} />
              </div>
            );
          } else if (item.discoveryContentType === 3) {
            return (
              <div key={index} onClick={() => handleItemClick(item.data)}>
                <HomeContentDiscount itemdata={item.data} />
              </div>
            );
          }
          return null;
        })}
      </ContentWrapper>
    </HomeListContainer>
  );
};

export default HomeList;