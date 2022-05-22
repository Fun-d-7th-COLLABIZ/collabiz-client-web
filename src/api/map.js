/* global kakao */
import React, { useEffect } from "react";

const Map = (props) => {
  useEffect(() => {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
      mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
      };

    let map = new kakao.maps.Map(mapContainer, mapOption);

    map.setDraggable(false);
    map.setZoomable(false);

    console.log("loading kakaomap");
  }, []);

  return (
    <div>
      <div id="map" style={{width: `${props.width}px`, height: `${props.height}px`}}>
      </div>
    </div>
  );
};

export default Map;