import React from 'react';
import DetailSlot from './DetailSlot';
import styled from 'styled-components';

const KnownContent = styled.div`
  .item {
    display: flex;
    margin: 10px 0 20px;
    font-size: 12px;
    .title {
      width: 64px;
      color: #666;
    }
    .intro {
      flex: 1;
      color: #333;
    }
  }
`;

const DetailKnown = ({ knowndata = {} }) => {
  return (
    <div className="detailknown">
      <DetailSlot title="预订须知" moreText="详情">
        <KnownContent>
          {knowndata.orderRules?.map((item, index) => (
            <div className="item" key={index}>
              <span className="title">{item.title}</span>
              <span className="intro">{item.introduction}</span>
            </div>
          ))}
        </KnownContent>
      </DetailSlot>
    </div>
  );
};

export default DetailKnown;