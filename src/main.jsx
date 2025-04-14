import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '@/App';
import store from '@/store';
// import { AliveScope } from 'react-activation'
import 'normalize.css';
import '@/assets/css/index.css';

// 百度地图脚本动态加载
const loadBaiduMap = () => {
  const script = document.createElement('script');
  script.src = 'https://api.map.baidu.com/getscript?v=3.0&&type=webgl&ak=cVUYlyAZOX43yKC4GNEHqPuwnPpGgovf';
  document.body.appendChild(script);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AliveScope> */}
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    {/* </AliveScope> */}
  </React.StrictMode>
);

// 加载百度地图
loadBaiduMap();