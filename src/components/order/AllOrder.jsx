import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllOrder } from '@/store/modules/allorder';
import ItemOrder from './ItemOrder';

const AllOrder = () => {
  const dispatch = useDispatch();
  const { allorderdata } = useSelector(state => state.allOrder);

  useEffect(() => {
    dispatch(fetchAllOrder());
  }, [dispatch]);

  return (
    <div className="alloder">
      <div className="oderitemlist">
        {allorderdata?.data?.orders?.map((item, index) => (
          <ItemOrder key={index} itemdata={item} />
        ))}
      </div>
    </div>
  );
};

export default AllOrder;