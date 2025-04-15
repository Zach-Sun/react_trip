// src/router/index.js
import { createHashRouter, Navigate } from 'react-router-dom';
import App from '@/App';
import HomeView from '@/views/home/HomeIndex';
import Favors from '@/components/favor/Favors';
import History from '@/components/favor/History';
import FavorIndex from '@/views/Favor/FavorIndex';
import MessageIndex from '@/views/Message/MessageIndex';
import OrderIndex from '@/views/Order/OrderIndex';
import AllOrder from '@/components/order/AllOrder';
import NotOrder from '@/components/order/NotOrder';
import CityBox from '@/views/home/components/CityBox';
import SearchIndex from '@/views/Search/SearchIndex';
import DetailIndex from '@/views/Detail/DetailIndex';
import LoginIndex from '@/views/Login/LoginIndex';

// 路由守卫
const withAuth = (Component) => {
  return () => {
    const account = localStorage.getItem('account');
    const currentHash = window.location.hash.slice(1);
    if (!account && currentHash !== '/login') {
      return <Navigate to="/login" replace />;
    }
    return <Component />;
  };
};

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: 'home',
        element: <HomeView />,
      },
      {
        path: 'favor',
        element: withAuth(FavorIndex),
        children: [
          {
            path: 'favors',
            element: <Favors />,
          },
          {
            path: 'history',
            element: <History />,
          },
          {
            index: true,
            element: <Navigate to="favors" replace />,
          },
        ],
      },
      {
        path: 'message',
        element: withAuth(MessageIndex),
      },
      {
        path: 'order',
        element: withAuth(OrderIndex),
        children: [
          {
            path: 'allorder',
            element: <AllOrder />,
          },
          {
            path: 'notorder',
            element: <NotOrder />,
          },
          {
            index: true,
            element: <Navigate to="allorder" replace />,
          },
        ],
      },
      {
        path: 'city',
        element: withAuth(CityBox),
      },
      {
        path: 'search',
        element: withAuth(SearchIndex),
      },
      {
        path: 'detail/:id',
        element: withAuth(DetailIndex),
      },
      {
        path: 'login',
        element: <LoginIndex />,
      },
    ],
  },
]);

export default router;