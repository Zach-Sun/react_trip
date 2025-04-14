import React from 'react';
import styled from 'styled-components';
import { Rate } from 'antd';

const FavorItemContainer = styled.div`
  width: 100%;
  height: 667px;
  overflow-y: auto;
  padding-bottom: 50px;
`;

const ItemBody = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 10px;
  padding-left: 5px;
`;

const LeftSection = styled.div`
  position: relative;
  padding-bottom: 10px;
  .item-img {
    width: 120px;
    height: 120px;
    border-radius: 10px;
    object-fit: cover;
  }
  .comment-number {
    width: 50px;
    height: 25px;
    position: absolute;
    left: 0;
    top: 0;
    color: #ff9854;
    background-color: rgba(255, 244, 216, 0.9);
    border-bottom-right-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
`;

const RightSection = styled.div`
  flex: 1;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`;

const ItemHeader = styled.div`
  p {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 700;
    margin: 0;
  }
`;

const StarRating = styled.div`
  margin: 8px 0;
  .ant-rate {
    font-size: 16px;
  }
`;

const InfoContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
  .info-item {
    margin-right: 18px;
  }
`;

const PriceContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .price {
    margin-right: 20px;
  }
  .old-price {
    color: #999;
    text-decoration: line-through;
    font-size: 14px;
  }
  .new-price {
    color: #ff4d4f;
    font-size: 18px;
    font-weight: 600;
  }
`;

const FavorItem = ({ itemdata = [] }) => {
  return (
    <FavorItemContainer>
      {itemdata.map((item, index) => (
        <div className="item" key={index}>
          <ItemBody>
            <LeftSection>
              <img 
                src={item.defaultPicture} 
                alt={item.unitName} 
                className="item-img" 
              />
              {item.commentBrief?.commentBrief && (
                <span className="comment-number">
                  {item.commentBrief.commentBrief}
                </span>
              )}
            </LeftSection>
            <RightSection>
              <ItemHeader>
                <p>{item.unitName}</p>
              </ItemHeader>
              <StarRating>
                <Rate 
                  value={item.rankScore} 
                  disabled 
                  allowHalf 
                  style={{ color: '#ffd21e' }}
                />
              </StarRating>
              <InfoContainer>
                <div className="info-item">{item.unitInfor}</div>
                {item.allActiveAndRedPacket?.memberName && (
                  <div className="info-item">
                    {item.allActiveAndRedPacket.memberName}
                  </div>
                )}
              </InfoContainer>
              <PriceContainer>
                <div className="price old-price">
                  原价:￥{item.productPrice}
                </div>
                <div className="price new-price">
                  优惠价:￥{item.finalPrice}
                </div>
              </PriceContainer>
            </RightSection>
          </ItemBody>
        </div>
      ))}
    </FavorItemContainer>
  );
};

export default FavorItem;