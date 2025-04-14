import React, { useState } from 'react';
import DetailSlot from './DetailSlot';
import { Rate } from 'antd';
import styled from 'styled-components';

const CommentContainer = styled.div`
  padding: 10px 0; /* 2.66667vw ≈ 10px */
  .header {
    display: flex;
    .left {
      display: flex;
      align-items: center;
      .score {
        width: 65px; /* 17.33333vw ≈ 65px */
        height: 100%;
        color: #333;
        position: relative;
        font-weight: 600;
        .text {
          font-size: 48px; /* 12.8vw ≈ 48px */
          position: relative;
          z-index: 9;
        }
        .line {
          width: 66px; /* 17.6vw ≈ 66px */
          height: 6px; /* 1.6vw ≈ 6px */
          background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
          border-radius: 3px; /* 0.8vw ≈ 3px */
          position: absolute;
          bottom: 6px; /* 1.6vw ≈ 6px */
          z-index: 5;
        }
      }
      .info {
        margin-left: 19px; /* 5.06667vw ≈ 19px */
        font-size: 12px; /* 3.2vw ≈ 12px */
        color: #333;
        .count {
          margin: 3px 0; /* 0.8vw ≈ 3px */
          color: #999;
        }
      }
    }
    .right {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      justify-content: flex-end;
      .item {
        margin-left: 5px; /* 1.33333vw ≈ 5px */
        font-size: 12px;
        color: #666;
      }
    }
  }
  .tags {
    display: flex;
    margin: 10px 0; /* 2.66667vw ≈ 10px */
    flex-wrap: wrap;
    .item {
      padding: 3px 5px; /* 0.8vw ≈ 3px, 1.33333vw ≈ 5px */
      margin-right: 8px; /* 2.13333vw ≈ 8px */
      margin-top: 5px; /* 1.33333vw ≈ 5px */
      border-radius: 8px; /* 2.13333vw ≈ 8px */
      font-size: 12px;
      color: #666;
      background: #f5f5f5;
    }
  }
  .export {
    padding: 10px; /* 2.66667vw ≈ 10px */
    border-radius: 6px; /* 1.6vw ≈ 6px */
    background-color: #f7f9fb;
    .user {
      display: flex;
      .touxiang img {
        width: 32px; /* 8.53333vw ≈ 32px */
        height: 32px;
        border-radius: 50%;
      }
      .infos {
        margin-left: 8px; /* 2.13333vw ≈ 8px */
        .date {
          margin-top: 3px;
          font-size: 12px;
          color: #999;
        }
      }
    }
    .text {
      font-size: 12px;
      line-height: 16px; /* 4.26667vw ≈ 16px */
      color: #333;
      margin-top: 16px;
    }
  }
`;

const DetailHotExport = ({ hotexportdata = {} }) => {
  const [value] = useState(hotexportdata?.overall);

  return (
    <div className="hotexport">
      <DetailSlot 
        title="热门评论" 
        moreText={`${hotexportdata.totalCountStr || ''}条评论`}
      >
        <CommentContainer>
          {/* 评分头部 */}
          <div className="header">
            <div className="left">
              <div className="score">
                <span className="text">{hotexportdata.overall}</span>
                <div className="line"></div>
              </div>
              <div className="info">
                <div className="title">{hotexportdata.scoreTitle}</div>
                <div className="count">{hotexportdata.totalCount}条评论</div>
                {hotexportdata.overall != null && (
                  <div className="star">
                    <Rate 
                      value={value} 
                      disabled 
                      allowHalf 
                      style={{ fontSize: 12 }}
                      color="#ffd21e"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="right">
              {hotexportdata.subScores?.map((item, index) => (
                <span className="item" key={index}>{item}</span>
              ))}
            </div>
          </div>
          {/* 标签区域 */}
          <div className="tags">
            {hotexportdata.commentTagVo?.map((item, index) => (
              <span className="item" key={index}>{item.text}</span>
            ))}
          </div>
          {/* 评论内容 */}
          {hotexportdata.comment && (
            <div className="export">
              <div className="user">
                <div className="touxiang">
                  <img src={hotexportdata.comment.userAvatars} alt="用户头像" />
                </div>
                <div className="infos">
                  <div className="name">{hotexportdata.comment.userName}</div>
                  <div className="date">{hotexportdata.comment.checkInDate}</div>
                </div>
              </div>
              <div className="text">{hotexportdata.comment.commentDetail}</div>
            </div>
          )}
        </CommentContainer>
      </DetailSlot>
    </div>
  );
};

export default DetailHotExport;