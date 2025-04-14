import React from 'react';
import styled from 'styled-components';

const ItemListContainer = styled.div`
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
`;

const ItemImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  object-fit: cover;
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

const TagContainer = styled.div`
  display: flex;
  font-size: 12px;
  margin-top: 5px;
`;

const TagItem = styled.div`
  color: #fff;
  margin-left: 5px;
  background-color: red;
  border-radius: 2px;
  padding: 2px 5px;
`;

const InfoContainer = styled.div`
  margin-top: 10px;
  display: flex;
  font-size: 12px;
  color: #666;
`;

const InfoItem = styled.div`
  margin-right: 18px;
`;

const PriceContainer = styled.div`
  margin-top: 10px;
  display: flex;
`;

const PriceItem = styled.div`
  margin-right: 20px;
  &.oldprice {
    color: #999;
  }
  &.newprice {
    color: red;
    font-size: 18px;
  }
`;

const SearchItem = ({ itemdata = [] }) => {
  return (
    <ItemListContainer>
      {itemdata.map((item, index) => (
        <div className="item" key={index}>
          <ItemBody>
            <LeftSection>
              <ItemImage src={item.defaultPicture} alt={item.unitName} />
            </LeftSection>
            <RightSection>
              <ItemHeader>
                <p>{item.unitName}</p>
              </ItemHeader>
              <TagContainer>
                {item.houseTags?.slice(0, 3).map((tag, idx) => (
                  <TagItem key={idx}>{tag.text}</TagItem>
                ))}
              </TagContainer>
              <InfoContainer>
                <InfoItem>{item.address}</InfoItem>
                {item.allActiveAndRedPacket?.memberName && (
                  <InfoItem>{item.allActiveAndRedPacket.memberName}</InfoItem>
                )}
              </InfoContainer>
              <PriceContainer>
                <PriceItem className="oldprice">原价:￥{item.productPrice}</PriceItem>
                <PriceItem className="newprice">优惠价:￥{item.finalPrice}</PriceItem>
              </PriceContainer>
            </RightSection>
          </ItemBody>
        </div>
      ))}
    </ItemListContainer>
  );
};

export default SearchItem;