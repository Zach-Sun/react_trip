import React from 'react';
import styled from 'styled-components';

const DetailTextContainer = styled.div`
  .intro {
    padding: 16px 12px; /* 4.26667vw ≈ 16px, 3.2vw ≈ 12px */
    border-top: 5px solid #f2f3f4; /* 1.33333vw ≈ 5px */
    .title {
      font-size: 14px; /* 3.73333vw ≈ 14px */
      color: #000;
      font-weight: 700;
    }
    .content {
      margin-top: 10px; /* 2.66667vw ≈ 10px */
      font-size: 12px; /* 3.2vw ≈ 12px */
      line-height: 1.5;
      color: #666;
    }
  }
`;

const DetailText = ({ textdata = {} }) => {
  return (
    <DetailTextContainer>
      <div className="intro">
        <h2 className="title">{textdata.title}</h2>
        <div className="content">{textdata.introduction}</div>
      </div>
    </DetailTextContainer>
  );
};

export default DetailText;