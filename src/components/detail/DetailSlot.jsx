import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import styled from 'styled-components';

// 使用 styled-components 合并样式
const SectionContainer = styled.div`
  padding: 0 15px;
  margin-top: 12px;
  border-top: 5px solid #f2f3f4;
  background-color: #fff;
  .header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    .title {
      font-size: 20px;
      color: #333;
    }
  }
  .content {
    padding: 8px 0;
  }
  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 44px;
    line-height: 44px;
    color: #ff9854;
    font-size: 14px;
    font-weight: 600;
  }
`;

const Section = ({ title = " ", moreText = " ", children }) => {
  return (
    <SectionContainer>
      <div className="header">
        <h2 className="title">{title}</h2>
      </div>
      <div className="content">
        {children}
      </div>
      <div className="footer">
        <span className="more">查看{moreText}</span>
        <ArrowRightOutlined style={{ marginLeft: 4 }} />
      </div>
    </SectionContainer>
  );
};

export default Section;