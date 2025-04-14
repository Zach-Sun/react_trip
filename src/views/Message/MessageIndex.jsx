import React from 'react';
import styled from 'styled-components';
import logoImg from '@/assets/img/logo.jpg';
import checkIcon from '@/assets/img/detail/icon_check.png';

const MessageContainer = styled.div`
  width: 100%;
  background-color: #ff9854;
  display: flex;
  flex-wrap: wrap;
`;

const TitleHeader = styled.div`
  width: 100%;
  height: 100px;
  margin: 0 auto;
  border-radius: 10px;
  color: #fff;
  font-size: 12px;
`;

const TitleName = styled.h5`
  text-align: center;
  line-height: 100px;
  font-size: 18px;
  margin: 0;
`;

const UserInfo = styled.div`
  display: flex;
  padding: 20px 0;
`;

const AvatarWrapper = styled.div`
  padding: 0 20px;
`;

const AvatarImg = styled.img`
  object-fit: contain;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const UserDetail = styled.div`
  flex: 1;
  font-size: 26px;
  padding: 20px;
`;

const VipBadge = styled.div`
  margin-top: 10px;
  font-size: 16px;
`;

const MainContent = styled.div`
  margin-top: 140px;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
`;

const ItemList = styled.div`
  padding: 20px;
`;

const ListItem = styled.div`
  padding: 0 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
`;

const ItemIcon = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

const ItemContent = styled.div`
  flex: 1;
  display: flex;
  padding-left: 20px;
  justify-content: space-between;
`;

const ItemText = styled.span`
  text-align: center;
  line-height: 50px;
  color: #666;
`;

const ItemArrow = styled.span`
  line-height: 50px;
  color: #ccc;
`;

const FooterSpace = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
`;

const MessageIndex = () => {
  const infodata = [
    {name: '我的简介'},
    {name: '我的设置'},
    {name: '我的订单'},
    {name: '我的收藏'},
    {name: '浏览记录'},
    {name: '退出登录'},
  ];

  return (
    <MessageContainer>
      <TitleHeader>
        <TitleName>我的信息</TitleName>
        <UserInfo>
          <AvatarWrapper>
            <AvatarImg src={logoImg} alt="用户头像" />
          </AvatarWrapper>
          <UserDetail>
            <div className="username">Lannes Sun</div>
            <VipBadge>飞向月球</VipBadge>
          </UserDetail>
        </UserInfo>
      </TitleHeader>
      <MainContent>
        <ItemList>
          {infodata.map((item, index) => (
            <ListItem key={index}>
              <ItemIcon>
                <img src={checkIcon} alt="图标" />
              </ItemIcon>
              <ItemContent>
                <ItemText>{item.name}</ItemText>
                <ItemArrow>&gt;</ItemArrow>
              </ItemContent>
            </ListItem>
          ))}
        </ItemList>
        <FooterSpace />
      </MainContent>
    </MessageContainer>
  );
};

export default MessageIndex;