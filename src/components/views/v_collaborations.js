import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { CollaborationsPopularityRanking, MainContainer } from "../blueprints";
import { DataForTest } from "../data";

function VCollaborations() {
  const location = useLocation();
  const [page, setPage] = useState('');
  let pageName = location.state.page;
  useEffect(() => {
    setPage(pageName);
  }, []);

  const pages = ['popular', 'new', 'completed'];
  
  return (
    <MainContainer className="mg-t-80">
      <div>
        <img style={{width: "1172px", height: "135px"}} alt="banner_01" src={`${process.env.PUBLIC_URL}/images/banners/banner_02.png`}/>
      </div>
      <div className="mg-t-70">
        <button className={"btn fw-700 fnt-size-9 " + (pages.indexOf(page) === 0 ? "color-primary" : "color-c4c4c4")}
          onClick={() => setPage('popular')}
          style={
            pages.indexOf(page) === 0
            ? {textDecoration: "underline",
              textDecorationColor: "#691B9A",
              textDecorationWidth: "206px",
              textDecorationThickness: "3px",
              textUnderlineOffset: "3px"}
            : null
          }
        >
          콜라보인기순위
        </button>
        <button className={"btn fw-700 fnt-size-9 " + (pages.indexOf(page) === 1 ? "color-primary" : "color-c4c4c4")}
          onClick={() => setPage('new')}
          style={
            pages.indexOf(page) === 1
            ? {textDecoration: "underline",
              textDecorationColor: "#691B9A",
              textDecorationWidth: "206px",
              textDecorationThickness: "3px",
              textUnderlineOffset: "3px"}
            : null
          }
        >
          신규콜라보</button>
        <button className={"btn fw-700 fnt-size-9 " + (pages.indexOf(page) === 2 ? "color-primary" : "color-c4c4c4")}
          onClick={() => setPage('completed')}
          style={
            pages.indexOf(page) === 2
            ? {textDecoration: "underline",
              textDecorationColor: "#691B9A",
              textDecorationWidth: "206px",
              textDecorationThickness: "3px",
              textUnderlineOffset: "3px"}
            : null
          }
        >
          성사된 콜라보
        </button>
      </div>
      <div className="mg-t-100">
        <CollaborationsPopularityRanking data={DataForTest.popularityRankingData}/>
      </div>
    </MainContainer>
  );
}

export default VCollaborations;