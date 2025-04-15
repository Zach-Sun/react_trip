import React from 'react';
import DetailSlot from './DetailSlot';
import styled from 'styled-components';

const HouseRoomContainer = styled.div`
  padding: 5px 0;
  border-radius: 6px;
  font-size: 12px;
  background-color: #f7f9fb;
  .facility-item {
    display: flex;
    margin: 25px 0;
    .head {
      width: 90px;
      text-align: center;
      img {
        width: 20px;
        height: 20px;
      }
      .text {
        margin-top: 5px;
        color: #000;
      }
    }
    .list {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .facility-detail {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        width: 50%;
        margin: 4px 0;
        .icon {
          margin: 0 6px;
          color: #07c160;
          &::before {
            content: "✓";
          }
        }
      }
    }
  }
`;

const DetailFacility = ({ facilitydata = {} }) => {
  return (
    <div className="detailhost">
      <DetailSlot title="房屋设施" moreText="全部设施">
        <HouseRoomContainer>
          {facilitydata.houseFacilitys?.map((item, index) => (
            facilitydata.facilitySort?.includes(index) && (
              <div className="facility-item" key={index}>
                {/* 设施分类标题 */}
                <div className="head">
                  <img src={item.icon} alt={item.groupName} />
                  <div className="text">{item.groupName}</div>
                </div>
                {/* 设施列表 */}
                <div className="list">
                  {item.facilitys?.slice(0, 4).map((facility, idx) => (
                    <div className="facility-detail" key={idx}>
                      <i className="icon"></i>
                      <span>{facility.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </HouseRoomContainer>
      </DetailSlot>
    </div>
  );
};

export default DetailFacility;