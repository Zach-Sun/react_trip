import React, { Suspense } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import DownTabbar from './components/tabbar/DownTabbar';
import LoadingCont from './components/loading/LoadingCont';

// 懒加载组件
const Home = React.lazy(() => import('./views/home/HomeIndex'));
const Favor = React.lazy(() => import('./views/Favor/FavorIndex'));
const Message = React.lazy(() => import('./views/Message/MessageIndex'));
const Order = React.lazy(() => import('./views/Order/OrderIndex'));
const CityBox = React.lazy(() => import('./views/home/components/CityBox'));
const Search = React.lazy(() => import('./views/Search/SearchIndex'));
const Detail = React.lazy(() => import('./views/Detail/DetailIndex'));
const Login = React.lazy(() => import('./views/Login/LoginIndex'));
const Favors = React.lazy(() => import('./components/favor/Favors'));
const History = React.lazy(() => import('./components/favor/History'));
const OrderIndex1 = React.lazy(() => import('./views/order/OrderIndex1'));
const OrderIndex2 = React.lazy(() => import('./views/order/OrderIndex2'));

const App = () => {
  return (
    <div>
      <DownTabbar />
      <Suspense fallback={<LoadingCont />}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favor" element={<Favor />}>
            <Route path="favors" element={<Favors />} />
            <Route path="history" element={<History />} />
          </Route>
          <Route path="/message" element={<Message />} />
          <Route path="/order" element={<Order />}></Route>
          <Route path="/order/allorder" element={<OrderIndex1 />} />
          <Route path="/order/notorder" element={<OrderIndex2 />} />
          <Route path="/city" element={<CityBox />} />
          <Route path="/search" element={<Search />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
      <LoadingCont />
    </div>
  );
};

export default App; 