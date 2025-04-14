import React from 'react';
import styled from 'styled-components';
import { RightOutlined } from '@ant-design/icons';

const HouseInfosContainer = styled.div`
  padding: 16px;
  background-color: #fff;
  .housename {
    font-weight: 700;
    font-size: 20px;
    color: #333;
    text-align: justify;
    line-height: 24px;
    overflow: hidden;
    margin-bottom: 6px;
  }
  .tags {
    margin: 10px 0;
    
    .item {
      font-size: 12px;
      margin: 0 2px;
      padding: 1px 3px;
    }
  }
  .host {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    margin: 12px 0;
    border-radius: 5px;
    font-size: 12px;
    background-color: #f5f7fa;
    .left {
      .score {
        font-size: 18px;
        font-weight: 700;
        color: #333;
      }
      .title {
        color: #333;
        font-weight: 700;
        margin: 0 3px;
      }
      .export {
        color: #666;
      }
    }
  }
  .position {
    .address {
      font-size: 14px;
      font-weight: 700;
      color: #333;
    }
  }
  .right {
    color: #ff9854;
    display: flex;
    align-items: center;
    
    .anticon {
      margin-left: 4px;
    }
  }
`;

const HouseInfos = ({ infosdata = {} }) => {
  return (
    <HouseInfosContainer>
      {/* 房屋名称 */}
      <div className="housename">{infosdata.houseName}</div>
      {/* 标签 */}
      <div className="tags">
        {infosdata.houseTags?.map((item, index) => (
          <span className="item" key={index}>
            {item.tagText?.text}
          </span>
        ))}
      </div>
      {/* 评论信息 */}
      <div className="host">
        <div className="left">
          <span className="score">{infosdata.commentBrief?.overall}</span>
          <span className="title">{infosdata.commentBrief?.scoreTitle}</span>
          <span className="export">{infosdata.commentBrief?.commentBrief}</span>
        </div>
        <div className="right">
          <span>{infosdata.commentBrief?.totalCount}条评论</span>
          <RightOutlined />
        </div>
      </div>
      {/* 位置信息 */}
      <div className="position host">
        <div className="left address">{infosdata.nearByPosition?.address}</div>
        <div className="right">
          <span>地图·周边</span>
          <RightOutlined />
        </div>
      </div>
    </HouseInfosContainer>
  );
};

export default HouseInfos;