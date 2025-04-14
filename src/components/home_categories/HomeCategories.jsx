import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchCategories } from '@/store/modules/categories';

const CategoriesContainer = styled.div`
  display: flex;
  margin-top: 70px;
  overflow-x: auto;
  padding: 10px 0;
`;

const CategoryItem = styled.div`
  width: 70px;
  height: 70px;
  text-align: center;
  flex-shrink: 0;
  padding: 0 5px;
  font-size: 12px;
`;

const CategoryImage = styled.img`
  width: 32px;
  height: 32px;
  margin: 0 auto;
  display: block;
`;

const HomeCategories = () => {
  const dispatch = useDispatch();
  const { categoriedata } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <CategoriesContainer>
      {Array.isArray(categoriedata) && categoriedata?.map((item, index) => (
        <CategoryItem key={index}>
          <CategoryImage src={item.pictureUrl} alt={item.title} />
          <div>{item.title}</div>
        </CategoryItem>
      ))}
    </CategoriesContainer>
  );
};

export default HomeCategories;