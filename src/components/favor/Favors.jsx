import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFavor } from '@/store/modules/favor';
import FavorItem from './FavorItem';

const Favors = () => {
  const dispatch = useDispatch();
  const { favordata } = useSelector(state => state.favor);

  // 获取收藏数据
  useEffect(() => {
    dispatch(fetchFavor());
  }, [dispatch]);

  return (
    <div className="favor-container">
      <FavorItem itemdata={favordata?.data?.items || []} />
    </div>
  );
};

export default Favors;