import React from 'react';
import styled from 'styled-components';
import { Rate } from 'antd';

const HistoryListContainer = styled.div`
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
  .comment-badge {
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
  margin: -8px 0 4px 0; /* 调整与FavorItem不同的间距 */
  .ant-rate {
    font-size: 16px;
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  color: #666;
  margin-bottom: 6px;
  .info-text-item {
    margin-right: 6px;
    border-radius: 2px;
    padding: 1px 4px;
    background-color: #f5f5f5;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;
  .price-item {
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

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 6px;
  .tag-item {
    margin-right: 8px;
    margin-bottom: 4px;
    padding: 2px 6px;
    border-radius: 2px;
    background-color: #ff9854;
    color: #f5f5f5;
    font-size: 12px;
  }
`;

const HistoryItem = ({ itemdata = [] }) => {
  return (
    <HistoryListContainer>
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
                <span className="comment-badge">
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
              <InfoText>
                {item.unitSummeries?.map((text, idx) => (
                  <span key={idx} className="info-text-item">
                    {text.text}
                  </span>
                ))}
              </InfoText>
              <PriceContainer>
                <div className="price-item old-price">
                  原价:￥{item.productPrice}
                </div>
                <div className="price-item new-price">
                  优惠价:￥{item.finalPrice}
                </div>
              </PriceContainer>
              <TagContainer>
                {item.unitTags?.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="tag-item">
                    {tag.tagName}
                  </span>
                ))}
              </TagContainer>
            </RightSection>
          </ItemBody>
        </div>
      ))}
    </HistoryListContainer>
  );
};

export default HistoryItem;