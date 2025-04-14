import React from 'react';
import { EnvironmentOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const ContentContainer = styled.div`
  display: flex;
`;

const ContentInfo = styled.div`
  padding: 8px;
`;

const CoverImage = styled.img`
  width: 168px;
  height: 113px;
  border-radius: 5px;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  width: 170px;
  height: 121px;
  font-size: 14px;
`;

const LocationInfo = styled.div`
  margin: 8px;
  font-size: 12px;
  color: #666;
  display: flex;
  align-items: center;
`;

const HouseName = styled.div`
  margin-left: 13px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SummaryText = styled.div`
  margin-left: 8px;
  margin-top: 5px;
  font-size: 12px;
  color: #666;
`;

const PriceContainer = styled.div`
  display: flex;
  margin: 8px;
  align-items: center;
`;

const FinalPrice = styled.div`
  color: #ff9854;
  font-size: 14px;
`;

const OriginalPrice = styled.div`
  margin: 0 3px;
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
`;

const DiscountBadge = styled.div`
  background-image: linear-gradient(270deg, #f66, #ff9f9f);
  color: #fff;
  padding: 1px 6px;
  font-size: 12px;
  border-radius: 5px;
`;

const HomeContentDiscount = ({ itemdata = {} }) => {
  return (
    <ContentContainer>
      <ContentInfo>
        <CoverImage src={itemdata.image?.url} alt={itemdata.houseName} />
        <InfoContainer>
          <LocationInfo>
            <EnvironmentOutlined style={{ marginRight: 4 }} />
            <span className="ip">{itemdata.location}</span>
          </LocationInfo>
          <HouseName>{itemdata.houseName}</HouseName>
          <SummaryText>{itemdata.summaryText}</SummaryText>
          <PriceContainer>
            <FinalPrice>￥{itemdata.finalPrice}</FinalPrice>
            <OriginalPrice>￥{itemdata.productPrice}</OriginalPrice>
            {itemdata.priceTipBadge?.text && (
              <DiscountBadge>{itemdata.priceTipBadge.text}</DiscountBadge>
            )}
          </PriceContainer>
        </InfoContainer>
      </ContentInfo>
    </ContentContainer>
  );
};

export default HomeContentDiscount;