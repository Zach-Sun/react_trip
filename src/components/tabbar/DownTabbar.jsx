import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tabbardata from '@/assets/data/tabbar';

const TabBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  background-color: #fff;
  border-top: 1px solid #f0f0f0;
`;

const TabBarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
`;

const TabItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: ${props => props.$active ? '#ff9854' : '#666'};
  cursor: pointer;
  flex: 1;
`;

const TabIcon = styled.img`
  height: 25px;
  margin-bottom: 4px;
`;

const DownTabbar = () => {
  const [activeKey, setActiveKey] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const index = tabbardata.findIndex(item => item.path === location.pathname);
    if (index !== -1) setActiveKey(index);
  }, [location.pathname]);

  const getImageUrl = (imgName) => {
    return new URL(`/src/assets/img/tabbar/${imgName}`, import.meta.url).href;
  };

  return (
    <TabBarContainer>
      <TabBarWrapper>
        {tabbardata.map((item, index) => (
          <TabItem
            key={item.path}
            $active={activeKey === index}
            onClick={() => {
              setActiveKey(index);
              navigate(item.path);
            }}
          >
            <TabIcon 
              src={getImageUrl(activeKey === index ? item.imgactive : item.img)} 
              alt={item.text} 
            />
            <span>{item.text}</span>
          </TabItem>
        ))}
      </TabBarWrapper>
    </TabBarContainer>
  );
};

export default DownTabbar;