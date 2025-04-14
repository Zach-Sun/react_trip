import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SearchBar, Tabs, IndexBar, Cell } from 'antd-mobile';
import styled from 'styled-components';
import { fetchAllCityData, setCurrentCity } from '@/store/modules/city';

const CityContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.div`
  z-index: 9;
  position: relative;
  background: #fff;
`;

const CityListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const HotCitiesSection = styled.div`
  font-size: 12px;
  background: #f5f5f5;
`;

const HotTitle = styled.div`
  padding-left: 15px;
  padding-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
`;

const HotCitiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;
`;

const HotCityItem = styled.div`
  width: 70px;
  height: 28px;
  color: #000;
  background-color: #fff4ec;
  margin: 6px 0;
  text-align: center;
  border-radius: 10px;
  line-height: 28px;
  cursor: pointer;
`;

const CityBox = () => {
  const [searchValue, setSearchValue] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cityData } = useSelector(state => state.city);

  useEffect(() => {
    dispatch(fetchAllCityData());
  }, [dispatch]);

  const currentGroup = cityData?.[activeTab] || {};
  const indexList = currentGroup?.cities?.map(item => item.group) || [];

  const handleSelectCity = (city) => {
    dispatch(setCurrentCity(city));
    navigate(-1);
  };

  const handleHotCityClick = (city) => {
    dispatch(setCurrentCity(city));
    navigate(-1);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <CityContainer className="tabbarhidden">
      <TopSection>
        <SearchBar
          value={searchValue}
          onChange={setSearchValue}
          placeholder="城市/区域/位置"
          onCancel={handleBack}
          style={{ '--background': '#f5f5f5' }}
        />
        
        <Tabs
          activeKey={activeTab.toString()}
          onChange={(key) => setActiveTab(parseInt(key))}
          activeLineStyle={{
            '--active-line-color': '#ff9854',
            '--active-title-color': '#ff9854'
          }}
        >
          {cityData?.map((item, index) => (
            <Tabs.Tab title={item.title} key={index.toString()} />
          ))}
        </Tabs>
      </TopSection>

      <CityListContainer>
        <HotCitiesSection>
          <HotTitle>热门</HotTitle>
          <HotCitiesList>
            {currentGroup?.hotCities?.map((city, index) => (
              <HotCityItem 
                key={`hot-${index}`}
                onClick={() => handleHotCityClick(city)}
              >
                {city.cityName}
              </HotCityItem>
            ))}
          </HotCitiesList>
        </HotCitiesSection>

        <IndexBar>
          {currentGroup?.cities?.map((group, index) => (
            <React.Fragment key={`group-${index}`}>
              <IndexBar.Anchor index={group.group} />
              {group.cities?.map((city, cityIndex) => (
                <Cell 
                  key={`city-${cityIndex}`}
                  title={city.cityName}
                  onClick={() => handleSelectCity(city)}
                />
              ))}
            </React.Fragment>
          ))}
        </IndexBar>
      </CityListContainer>
    </CityContainer>
  );
};

export default CityBox;