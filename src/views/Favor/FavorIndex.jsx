import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const FavorContainer = styled.div`
  width: 100%;
`;

const TitleHeader = styled.div`
  width: 100%;
  height: 100px;
  margin: 0 auto;
  color: #fff;
  font-size: 12px;
  background-color: #ff9854;
  .title-name {
    text-align: center;
    line-height: 100px;
    font-size: 18px;
  }
`;

const TabHeader = styled.div`
  display: flex;
  padding: 10px 20px;
  background-color: #ff9854;
  justify-content: space-evenly;
  height: 50px;
  align-items: center;
`;

const TabItem = styled(NavLink)`
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: #fff;
  border-radius: 5px;
  text-decoration: none;
  color: #333;
  &.active {
    color: red;
    font-weight: bold;
  }
`;

const MainContent = styled.div`
  padding: 16px;
`;

const FavorIndex = () => {
  return (
    <FavorContainer>
      {/* 标题 */}
      <TitleHeader>
        <h5 className="title-name">我的收藏</h5>
      </TitleHeader>
      {/* 选项 */}
      <TabHeader>
        <TabItem to="/favor/favors">收藏</TabItem>
        <TabItem to="/favor/history">历史记录</TabItem>
      </TabHeader>
      {/* 内容区域 */}
      <MainContent>
        <Outlet />
      </MainContent>
    </FavorContainer>
  );
};

export default FavorIndex;