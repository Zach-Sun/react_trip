import React, { useState, useEffect, useMemo } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const OrderItemContainer = styled.div`
  width: 100%;
`;

const ItemBody = styled.div`
  padding: 20px;
  display: flex;
`;

const LeftSection = styled.div`
  .item-img {
    width: 100px;
    height: 100px;
    border-radius: 5px;
    object-fit: cover;
  }
`;

const RightSection = styled.div`
  flex: 1;
`;

const RightBody = styled.div`
  padding: 0 15px;
  .item-title {
    font-size: 16px;
    font-weight: 700;
  }
  .time-text {
    font-size: 12px;
    color: #666;
    margin-top: 5px;
  }
  .address-text {
    margin-top: 5px;
    width: 170px;
    font-size: 12px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .control-buttons {
    margin-top: 10px;
    display: flex;
    align-items: center;
    .ant-btn {
      margin-right: 10px;
    }
  }
  .countdown-text {
    margin-top: 5px;
    color: #999;
    font-size: 12px;
  }
`;

const ItemOrder = ({ itemdata = {} }) => {
  const [payAmount, setPayAmount] = useState(itemdata.prepayAmount || 0);
  const [status, setStatus] = useState(itemdata.orderStatus || 0);
  // 时间格式化
  const formattedTime = useMemo(() => {
    const minutes = Math.floor(payAmount / 60);
    const seconds = payAmount % 60;
    return `${minutes}分${seconds}秒`;
  }, [payAmount]);

  // 倒计时效果
  useEffect(() => {
    let timer;
    if (payAmount > 0) {
      timer = setInterval(() => {
        setPayAmount(prev => prev > 0 ? prev - 1 : 0);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [payAmount]);

  const handleCancel = () => {
    setPayAmount(0);
    setStatus(0);
  };

  return (
    <OrderItemContainer>
      <ItemBody>
        <LeftSection>
          <img 
            src={itemdata.unitPicture} 
            alt={itemdata.hotelName} 
            className="item-img" 
          />
        </LeftSection>
        <RightSection>
          <RightBody>
            <div className="item-title">{itemdata.hotelName}</div>
            <div className="time-text">
              预定: {itemdata.checkInDate}-{itemdata.checkInLatestTime} 至{' '}
              {itemdata.checkOutDate}-{itemdata.checkOutLatestTime}
            </div>
            <div className="address-text">
              地址: {itemdata.address}
            </div>
            <div className="control-buttons">
              {status === 1 && (
                <>
                  {payAmount !== 0 && (
                    <div className="countdown-text">
                      {formattedTime} {itemdata.summary}
                    </div>
                  )}
                  {payAmount === 0 ? (
                    <Button size="small" type="default">
                      已取消
                    </Button>
                  ) : (
                    <Button 
                      size="small" 
                      type="primary" 
                      danger
                      onClick={handleCancel}
                    >
                      取消
                    </Button>
                  )}
                </>
              )} 
              <Button size="small" type={status === 1 ? 'primary' : 'default'}>
                {itemdata.orderStatusDesc}
              </Button>
              {status !== 1 && (
                <Button size="small" type="default">
                  再次订购
                </Button>
              )}
            </div>
          </RightBody>
        </RightSection>
      </ItemBody>
    </OrderItemContainer>
  );
};

export default ItemOrder;