import React, { useEffect, useRef, useState } from 'react';
import DetailSlot from './DetailSlot';

const DetailPosition = ({ positiondata = {} }) => {
  const mapRef = useRef(null);
  const [mapInstance, setMapInstance] = useState(null);
  const [marker, setMarker] = useState(null);
  // 初始化地图
  const initMap = () => {
    if (!positiondata.longitude || !positiondata.latitude || !mapRef.current) return;
    // 清除旧地图实例
    if (mapInstance) {
      mapInstance.clearOverlays();
    }
    // 创建新地图实例
    const map = new window.BMapGL.Map(mapRef.current);
    const point = new window.BMapGL.Point(positiondata.longitude, positiondata.latitude);
    map.centerAndZoom(point, 18);
    map.enableScrollWheelZoom(true);
    // 清除旧标记
    if (marker) {
      map.removeOverlay(marker);
    }
    // 添加新标记
    const newMarker = new window.BMapGL.Marker(point);
    map.addOverlay(newMarker);
    setMapInstance(map);
    setMarker(newMarker);
  };

  // 组件挂载时初始化
  useEffect(() => {
    // 检查百度地图API是否已加载
    if (typeof window.BMapGL !== 'undefined') {
      initMap();
    } else {
      console.error('百度地图API未加载');
      // 可以在这里添加API加载重试逻辑
    }
    // 清理函数
    return () => {
      if (mapInstance) {
        mapInstance.clearOverlays();
      }
    };
  }, []);

  // 监听positiondata变化
  useEffect(() => {
    if (positiondata.longitude && positiondata.latitude) {
      initMap();
    }
  }, [positiondata.longitude, positiondata.latitude]);

  return (
    <div className="detailposition">
      <DetailSlot title="位置周边" moreText="更多周边信息">
        <div style={{ height: "250px" }} className="baidu-map" ref={mapRef}></div>
      </DetailSlot>
    </div>
  );
};

export default DetailPosition;