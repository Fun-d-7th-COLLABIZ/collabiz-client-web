import { useState, useEffect } from 'react';
import API from '../../api/api';
import { DataAuth, DataForTest } from "../data";
import { MainContainer, CardOngoingCollabo, CardFinishedCollabo } from "../blueprints";
import { LeftSidebarMypage } from "../fragments";

function VFinishedCollabo() {
  const [order, setOrder] = useState('latest');
  const [finishedCollabo, setFinishedCollabo] = useState([]);
  const memberId = DataAuth.get().id;
  
  useEffect(() => {
    async function getOngoingCollabo() {
      try {
        // TODO: change api
        var result = await API.db.get(`/myPage/myOffer/${memberId}`);
        setFinishedCollabo(result.data);
      } catch (e) {
        console.log('finished_collabo error: ', e);
      }
    }
    getOngoingCollabo();
  }, []);

  return (
    <div className="w-100 bg-f0f0f0" style={{height: `${100}%`}}>
      <MainContainer className="d-flex" style={{paddingBottom: `${170}px`}}>
        <div className="d-flex " style={{height: `${100}%`}}>
          <LeftSidebarMypage />
        </div>
        <div
          className="position-relative mg-l-80 mg-t-138 pd-x-40 pd-y-40 bg-ffffff"
          style={{maxWidth: `${875}px`}}
        >
          <div className="position-absolute fnt-size-9" style={{top: "-32px", left: "12px"}}>진행중인 콜라보</div>
          <div className="d-flex pb-1 justify-content-between align-items-center">
            <div className="ps-2 fnt-size-7">총 {DataForTest.finishedCollabo.length} 건</div>
            <div>
              <button className={"btn py-0 px-2 fnt-size-7 " + (order === 'latest' ? "fw-700" : "color-979797")}
                onClick={() => setOrder('latest')}
              >
                최신순
              </button>
              <span className="color-dedede">|</span>
              <button className={"btn py-0 px-2 fnt-size-7 " + (order === 'popular' ? "fw-700" : "color-979797")}
                onClick={() => setOrder('popular')}
              >
                인기순
              </button>
            </div>
          </div>
          <hr className="p-0 m-0 color-dedede" style={{height: `${1}px`, width: `${795}px`, opacity: 1}}/>
            {DataForTest.finishedCollabo.map((collabo, i) => 
              <CardFinishedCollabo key={i} data={collabo}/>
            )}
        </div>
      </MainContainer>
    </div>
  );
}

export default VFinishedCollabo;