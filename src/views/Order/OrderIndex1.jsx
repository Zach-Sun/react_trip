import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import AllOrder from '../../components/order/AllOrder';

const ShoppingCarContainer = styled.div`
  width: 100%;
  background-color: #ff9854;
`;

const TitleHeader = styled.div`
  width: 100%;
  height: 100px;
  margin: 0 auto;
  border-radius: 10px;
  color: #fff;
  font-size: 12px;
  .name {
    text-align: center;
    line-height: 100px;
    font-size: 18px;
  }
`;

const BodyContainer = styled.div`
  background-color: #fff;
  padding: 40px 20px;
  border-radius: 20px;
`;

const TabBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const TabLink = styled(NavLink)`
  width: 100px;
  height: 50px;
  color: #fff;
  background-color: #ccc;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  text-decoration: none;
  &.active {
    background-color: #ff9854 !important;
  }
`;

const OrderIndex1 = () => {
  return (
    <ShoppingCarContainer>
      <TitleHeader>
        <h5 className="name">我的订单</h5>
      </TitleHeader>
      <BodyContainer>
        <TabBar>
          <TabLink to="/order/allorder">全部订单</TabLink>
          <TabLink to="/order/notorder">待付款</TabLink>
        </TabBar>
        <div className="main">
          <AllOrder />
        </div>
      </BodyContainer>
    </ShoppingCarContainer>
  );
};

export default OrderIndex1;