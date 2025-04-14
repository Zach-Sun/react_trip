import React from 'react';
import DetailSlot from './DetailSlot';
import styled from 'styled-components';
import { Button } from 'antd';

// 使用 styled-components 实现样式
const IntroContainer = styled.div`
  .top img {
    width: 100%;
    border-radius: 3px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px; /* 2.66667vw ≈ 10px */
    .left {
      display: flex;
      .info {
        .name {
          margin-top: 8px; /* 2.13333vw ≈ 8px */
          font-size: 16px; /* 4.26667vw ≈ 16px */
          font-weight: 600;
        }
        .tags {
          display: flex;
          margin-top: 5px; /* 1.33333vw ≈ 5px */
          font-size: 12px; /* 3.2vw ≈ 12px */
          .diver {
            margin: 0 5px; /* 1.33333vw ≈ 5px */
          }
        }
      }
      img {
        width: 54px; /* 14.4vw ≈ 54px */
        height: 54px; /* 14.4vw ≈ 54px */
      }
    }
    .right {
      .contact-btn {
        height: 24px; /* 6.4vw ≈ 24px */
        line-height: 24px;
        border-radius: 5px; /* 1.33333vw ≈ 5px */
        padding: 0 12px; /* 3.2vw ≈ 12px */
        font-size: 12px;
        border: none;
        background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
        color: #fff;
      }
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    margin: 50px 10px 10px; /* 13.33333vw ≈ 50px, 2.66667vw ≈ 10px */
    font-size: 12px; /* 3.2vw ≈ 12px */
    .item {
      .title {
        color: #999;
      }
      .score {
        margin: 5px 0; /* 1.33333vw ≈ 5px */
        font-size: 18px; /* 4.8vw ≈ 18px */
        font-weight: 700;
        color: #333;
      }
    }
  }
`;

const DetailIntroduce = ({ intrducedata = {} }) => {
  return (
    <div className="introduce">
      <DetailSlot title="房东介绍" moreText="房东主页">
        <IntroContainer>
          {/* 顶部图片 */}
          {intrducedata.topScroll && (
            <div className="top">
              <img src={intrducedata.topScroll} alt="顶部图片" />
            </div>
          )}
          {/* 房东信息头部 */}
          <div className="header">
            <div className="left">
              {intrducedata.hotelLogo && (
                <div className="image">
                  <img src={intrducedata.hotelLogo} alt="房东logo" />
                </div>
              )}
              <div className="info">
                <div className="name">{intrducedata.hotelName}</div>
                {/* 标签 */}
                <div className="tags">
                  {intrducedata.hotelTags?.map((item, index) => (
                    <div className="item" key={index}>
                      <span>{item.tagText?.text}</span>
                      {index < intrducedata.hotelTags.length - 1 && (
                        <span className="diver">|</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="right">
              <Button className="contact-btn">联系房东</Button>
            </div>
          </div>
          {/* 底部评分信息 */}
          <div className="bottom">
            {intrducedata.hotelSummary?.map((item, index) => (
              <div className="item" key={index}>
                <div className="title">{item.title}</div>
                <div className="score">{item.introduction}</div>
                <div className="desc title">{item.tip}</div>
              </div>
            ))}
          </div>
        </IntroContainer>
      </DetailSlot>
    </div>
  );
};

export default DetailIntroduce;