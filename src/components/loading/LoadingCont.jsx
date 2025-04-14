import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import loadingGif from '@/assets/img/home/full-screen-loading.gif';
import loadingBg from '@/assets/img/home/loading-bg.png';

const LoadingContainer = styled.div`
  z-index: 999;
  margin: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

const LoadingBackground = styled.div`
  width: 104px;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${loadingBg}) 0 0 / 100% 100%;
`;

const LoadingImage = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 8px;
`;

const LoadingCont = () => {
  const isLoading = useSelector(state => state.loading.isLoading);

  if (!isLoading) return null;

  return (
    <LoadingContainer>
      <LoadingBackground>
        <LoadingImage src={loadingGif} alt="加载中" />
      </LoadingBackground>
    </LoadingContainer>
  );
};

export default LoadingCont;