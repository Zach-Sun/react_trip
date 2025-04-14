import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHistory } from '@/store/modules/history';
import HistoryItem from './HistoryItem';

const History = () => {
  const dispatch = useDispatch();
  const { historydata } = useSelector(state => state.history);

  // 获取历史记录数据
  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);

  return (
    <div className="history-container">
      <HistoryItem itemdata={historydata?.data?.items || []} />
    </div>
  );
};

export default History;