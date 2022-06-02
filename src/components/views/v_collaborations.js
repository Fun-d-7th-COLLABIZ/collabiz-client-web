import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { CollaborationsPopularityRanking, MainContainer, CardNewCollabo, CardCompletedCollabo } from "../blueprints";
import { DataForTest } from "../data";

function VCollaborations() {
  const location = useLocation();
  const [page, setPage] = useState('');
  let pageName = location.state.page;
  useEffect(() => {
    setPage(pageName);
  }, []);

  const pages = ['popular', 'new', 'completed'];
  const commonComponent = (
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
    </MainContainer>
  );
  
  return (
    <div style={{height: "100%"}}>
      {/* 인기순위 */}
      {page === pages[0] ?
        <MainContainer>
          {commonComponent}
          <div className="mg-t-100">
            <CollaborationsPopularityRanking data={DataForTest.popularityRankingData}/>
          </div>
          <div className="pd-b-100"></div>
        </MainContainer>

        
      : page === pages[1] ?
        // 신규 콜라보
        <div className="">
          {commonComponent}
          <div className="mg-t-40 pd-t-30" style={{backgroundColor: "#F7F5F7"}}>
            <MainContainer className="mg-t-80">
              <div className="d-flex flex-wrap" style={{width: "100%"}}>
                {DataForTest.newCollabos.map((p, i) =>
                  <CardNewCollabo key={i} idx={i} newCollabo={DataForTest.newCollabos[i]}/>
                )}
              </div>
            </MainContainer>
            <div className="pd-b-180"></div>
          </div>
        </div>
      
        // 성사된 콜라보
        : <div className="">
            {commonComponent}
            <div className="mg-t-40 pd-t-30" style={{backgroundColor: "#F7F5F7"}}>
              <MainContainer className="mg-t-80">
                <div className="d-flex flex-wrap" style={{width: "100%"}}>
                  {DataForTest.completedCollabos.map((p, i) =>
                    <div className="mg-t-20"
                      style={Object.assign({width: "281px", height: "197px", borderRadius: "8px", flex: "0 0 31.7%"}, ((i + 1) % 4 === 0) ? {} : {marginRight: "16px"})}>
                      <CardCompletedCollabo key={i} completedCollabos={DataForTest.completedCollabos[i]}/>
                    </div>
                  )}
                  {/* <CarouselCompletedCollabo completedCollabos={DataForTest.completedCollabos}/> */}
                </div>
              </MainContainer>
              <div className="pd-b-180"></div>
            </div>
          </div>
      }
    </div>
  );
}

export default VCollaborations;