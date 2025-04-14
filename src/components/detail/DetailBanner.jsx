import React, { useMemo } from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';

const BannerContainer = styled.div`
  position: relative;
  .banner-img {
    width: 100%;
    height: auto;
  }
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    display: flex;
    padding: 2px 5px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
    span {
      padding: 0 3px;
    }
    .active {
      background-color: orange;
      color: black;
      border-radius: 1px;
    }
  }
`;

const DetailBanner = ({ bannerdata = [] }) => {
  // 处理分组数据
  const bannerGroup = useMemo(() => {
    const group = {};
    for (const item of bannerdata) {
      group[item.enumPictureCategory] = [];
    }
    for (const item of bannerdata) {
      group[item.enumPictureCategory].push(item);
    }
    return group;
  }, [bannerdata]);

  // 处理名称显示
  const getName = (name) => {
    return name.replace("：", "").replace("【", "").replace("】", "");
  };

  // 自定义指示器
  const CustomIndicator = ({ currentSlide }) => {
    return (
      <div className="custom-indicator">
        {Object.entries(bannerGroup).map(([key, value]) => (
          <span 
            key={key}
            className={bannerdata[currentSlide]?.enumPictureCategory === key ? 'active' : ''}
          >
            {getName(value[0].title)}
          </span>
        ))}
      </div>
    );
  };

  return (
    <BannerContainer>
      <Carousel autoplay autoplaySpeed={3000} dots={false}>
        {bannerdata.map((item, index) => (
          <div key={index}>
            <img src={item.url} alt="" className="banner-img" />
          </div>
        ))}
      </Carousel>
      <CustomIndicator />
    </BannerContainer>
  );
};

export default DetailBanner;