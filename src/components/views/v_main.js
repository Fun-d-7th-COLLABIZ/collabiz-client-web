import React, { useEffect, useState } from 'react';
import API from '../../api/api';
import { Link } from 'react-router-dom';
import { CardNewCollabo, CarouselCompletedCollabo, CarouselNotice, CarouselPopularMember, MainPopularityRanking, MainContainer, MainSearchAndCollaboBox } from '../blueprints';
import { DataForTest } from '../data';
function VMain() {
  const [popularityRankingData, setPopularityRankingData] = useState([]);

  useEffect(() => {
    async function getPopularityRanking() {
      var result = await API.db.get('/collaborations/ranking');
      setPopularityRankingData(result.data);
    }
    getPopularityRanking();
  }, []);

  

  const limit = 6;
  var newCollaboCards = [];
  for (var i = 0; i < limit; i++) {
    newCollaboCards.push(<CardNewCollabo key={i} idx={i} newCollabo={DataForTest.newCollabos[i]}/>);
  }

  return (
    <div className="w-100-full" style={{minHeight: `${100}vh`}}>
      <div className="d-flex flex-column">
        <div className="position-relative">
          <img src={`${process.env.PUBLIC_URL}/images/main_background_top.png`} alt="main_background_top"
            style={{backgroundColor: "#704C79", backgroundBlendMode: "multiply"}}
          />
        </div>
        <MainContainer>
          <MainSearchAndCollaboBox/>
        </MainContainer>

        <div className="pd-t-100">
          <MainContainer>
            <div className="d-flex">
              <div className="position-relative flex-column">
                <div className="color-primary fnt-size-12 fw-700">콜라비즈 소식</div>
                <div style={{width: "451px", height: "243px", zIndex: "999"}}>
                  <CarouselNotice notices={DataForTest.notices}/>
                </div>
              </div>
              <div
                className="position-relative"
                style={{right: "32px", zIndex: "-1"}}
              >
                <img style={{width: "753px", height: "350px"}} alt="notice_meeting" src={`${process.env.PUBLIC_URL}/images/notice_meeting.png`}/>
              </div>
            </div>
          </MainContainer>
        </div>
        
        <MainContainer className="mg-t-70">
          <div className="">
            <img style={{width: "1172px", height: "135px"}} alt="banner_01" src={`${process.env.PUBLIC_URL}/images/banners/banner_01.png`}/>
          </div>
        </MainContainer>

        <div className="pd-t-80" style={{height: `${520}px`}}>
          <MainPopularityRanking data={DataForTest.popularityRankingData}/>
        </div>

        <div className="pd-t-40" style={{height: `${793}px`, backgroundColor: "#F7F5F7"}}>
          <MainContainer>
            <div className="d-flex justify-content-between align-item-center">
              <div className="fnt-size-12 fw-700" style={{color: "#6D6D6D"}}>신규 콜라보</div>
              <div className="" style={{border: "1px solid #8D7A92", borderRadius: "26px"}}>
                <Link className="btn py-1 px-4 fnt-size-8 fw-700" style={{color: "#562C62"}}
                  // onClick={() => {window.location.href = '/collaborations';}}
                  to={{pathname: '/collaborations', state: {scrollTo: [0, 0], page: "new"}}}
                >
                  더보기
                </Link>
              </div>
            </div>
            <div className="d-flex flex-wrap" style={{width: "100%", height: "100%"}}>
              {newCollaboCards}
            </div>
          </MainContainer>
        </div>

        <div style={{height: `${409}px`, backgroundImage: "url(/images/main_background_mid.png)", backgroundColor: "#704C79"}}>
          <MainContainer>
            <div className="mg-t-50 color-ffffff fnt-size-12 fw-700">성사된 콜라보</div>
            <CarouselCompletedCollabo completedCollabos={DataForTest.completedCollabos}/>
          </MainContainer>
        </div>

        <MainContainer className="mg-t-165 pd-b-100">
          <div className="fnt-size-12 fw-700" style={{color: "#6d6d6d"}}>인기업체</div>
          <CarouselPopularMember popularMembers={DataForTest.popularMembers}/>
        </MainContainer>
        
      </div>
    </div>
  );
}

export default VMain;