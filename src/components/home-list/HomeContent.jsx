import React from 'react';
import { Rate } from 'antd';
import styled from 'styled-components';

const ContentContainer = styled.div`
  display: flex;
`;

const ContentInfo = styled.div`
  padding: 10px;
  position: relative;
`;

const CoverImage = styled.img`
  width: 167px;
  height: 226px;
  border-radius: 5px;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  position: absolute;
  bottom: 18px;
  color: #fff;
  font-size: 12px;
  padding: 8px 10px;
  width: 100%;
`;

const HouseName = styled.div`
  width: 150px;
  height: 30px;
  margin: 5px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const PriceAndStar = styled.div`
  display: flex;
  align-items: center;
`;

const PriceText = styled.div`
  margin: 0 3px;
`;

const HomeContent = ({ itemdata = {} }) => {
  const starNumber = Number(itemdata.commentScore) || 0;

  return (
    <ContentContainer>
      <ContentInfo>
        <CoverImage src={itemdata.image?.url} alt={itemdata.houseName} />
        
        <InfoContainer>
          <div className="infoall">{itemdata.summaryText}</div>
          <HouseName>{itemdata.houseName}</HouseName>
          <PriceAndStar>
            <Rate 
              value={starNumber} 
              disabled 
              allowHalf 
              style={{ color: '#fff', fontSize: 14 }} 
            />
            <PriceText>￥{itemdata.finalPrice}</PriceText>
          </PriceAndStar>
        </InfoContainer>
      </ContentInfo>
    </ContentContainer>
  );
};

export default HomeContent;