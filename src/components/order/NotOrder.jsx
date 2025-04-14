import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotOrder } from '@/store/modules/notorder';
import ItemOrder from './ItemOrder';

const NotOrder = () => {
  const dispatch = useDispatch();
  const { notorderdata } = useSelector(state => state.notorder);

  useEffect(() => {
    dispatch(fetchNotOrder());
  }, [dispatch]);

  return (
    <div className="notoder">
      <div className="itemlist">
        {notorderdata?.data?.orders?.map((item, index) => (
          <ItemOrder key={index} itemdata={item} />
        ))}
      </div>
    </div>
  );
};

export default NotOrder;