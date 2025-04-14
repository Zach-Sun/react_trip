import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailData } from '@/store/modules/detail';
import { NavBar } from 'antd-mobile';
import styled from 'styled-components';
import DetailBanner from '@/components/detail/DetailBanner';
import HouseInfos from '@/components/detail/HouseInfos';
import DetailFacility from '@/components/detail/DetailFacility';
import DetailIntroduce from '@/components/detail/DetailIntroduce'; // 修正导入名称
import DetailHotExport from '@/components/detail/DetailHotExport';
import DetailKnown from '@/components/detail/DetailKnown';
import DetailPosition from '@/components/detail/DetailPosition';
import DetailText from '@/components/detail/DetailText';
import FooterLogo from '@/components/detail/FooterLogo';

const DetailContainer = styled.div`
  background-color: #f7f8fa;
  padding-bottom: 50px; /* 避免底部内容被遮挡 */
  /* 修复 antd-mobile NavBar 固定定位问题 */
  .adm-nav-bar {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: white;
  }
`;

const ContentSection = styled.section`
  margin-bottom: 12px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledNavBar = styled(NavBar)`
  --height: 44px;
  --border-bottom: none;
  .adm-nav-bar-title {
    font-weight: 600;
    color: #333;
  }
  .adm-nav-bar-back-arrow {
    font-size: 18px;
    color: #666;
  }
`;

const DetailIndex = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detaildata } = useSelector(state => state.detail);

  // 返回上一页
  const onClickLeft = () => navigate(-1);

  // 获取详情数据
  useEffect(() => {
    dispatch(getDetailData(id));
  }, [dispatch, id]);

  return (
    <DetailContainer className="detail">
      {/* 标题栏 */}
      <StyledNavBar back="返回" backArrow onBack={onClickLeft}>
        房屋详情
      </StyledNavBar>
      {/* 轮播图 */}
      {detaildata?.mainPart && (
        <ContentSection className="swipe">
          <DetailBanner 
            bannerdata={detaildata.mainPart.topModule?.housePicture?.housePics} 
          />
        </ContentSection>
      )}
      {/* 主要评论 */}
      <ContentSection className="infos">
        <HouseInfos infosdata={detaildata?.mainPart?.topModule} />
      </ContentSection>
      {/* 房屋设施 */}
      <ContentSection className="housefitly" name="设施">
        <DetailFacility
          facilitydata={detaildata?.mainPart?.dynamicModule?.facilityModule?.houseFacility}
        />
      </ContentSection>
      {/* 房东介绍 */}
      <ContentSection className="hostintroduce" name="房东">
        <DetailIntroduce
          intrducedata={detaildata?.mainPart?.dynamicModule?.landlordModule}
        />
      </ContentSection>
      {/* 热门评论 */}
      <ContentSection className="hotexports" name="评论">
        <DetailHotExport
          hotexportdata={detaildata?.mainPart?.dynamicModule?.commentModule}
        />
      </ContentSection>
      {/* 预订须知 */}
      <ContentSection className="detailknowns" name="须知">
        <DetailKnown
          knowndata={detaildata?.mainPart?.dynamicModule?.rulesModule}
        />
      </ContentSection>
      {/* 位置周边 */}
      <ContentSection className="positions" name="周边">
        <DetailPosition
          positiondata={detaildata?.mainPart?.dynamicModule?.positionModule}
        />
      </ContentSection>
      {/* 价格说明 */}
      <ContentSection className="detailtext">
        <DetailText
          textdata={detaildata?.mainPart?.introductionModule}
        />
      </ContentSection>
      {/* 底部 */}
      <ContentSection className="footer">
        <FooterLogo />
      </ContentSection>
    </DetailContainer>
  );
};

export default DetailIndex;