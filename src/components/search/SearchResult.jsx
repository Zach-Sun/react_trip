import React, { useState } from 'react';
import styled from 'styled-components';

const ResultBarContainer = styled.div`
  width: 100%;
`;

const ListContainer = styled.div`
  padding: 10px 20px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: #fff;
  align-items: center;
  overflow-x: auto;
  text-align: center;
`;

const MenuItemWrapper = styled.div`
  height: 30px;
  width: 100%;
  border-radius: 5px;
  font-size: 13px;
  margin-right: 20px;
  padding: 0 7px;
  line-height: 30px;
  color: #666;
  background-color: #ccc;
  white-space: nowrap;
  cursor: pointer;
  &.active {
    color: red;
  }
`;

const SearchResult = ({ itemdata = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleItemClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <ResultBarContainer>
      <ListContainer>
        {itemdata.map((item, index) => (
          <MenuItemWrapper
            key={index}
            className={currentIndex === index ? 'active' : ''}
            onClick={() => handleItemClick(index)}
          >
            {item.label}
          </MenuItemWrapper>
        ))}
      </ListContainer>
    </ResultBarContainer>
  );
};

export default SearchResult;