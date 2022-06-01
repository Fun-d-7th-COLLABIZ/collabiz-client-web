import { useState } from 'react';
import qs from "qs";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch as fasSearch } from '@fortawesome/free-solid-svg-icons';
import API from '../../api/api';

function MainSearchAndCollaboBox(props) {
  const [searchWord, setSearchWord] = useState('');
  var testKeyword = ["#프론트엔드", "#디자이너", "#영상제작", "#회계사"];

  async function search() {
    if (searchWord.trim() === '') {
      alert('검색어를 입력해주세요.');
      return;
    }
    console.log('searchWord=', searchWord);
    try {
      var result = await axios.get('/search', {
        params: {
          regionCondition: searchWord,
          categoryCondition: searchWord,
          keywordCondition: searchWord,
        },
        // paramsSerializer: params => {
        //   return qs.stringify(params, {arrayFormat: 'brackets'})
        // }
      });
      console.log('result=', result);
    } catch (e) {
      console.log('main_search error: ', e);
    }
  }

  return (
    <div className="position-absolute" style={{
      height: "320px",
      backgroundColor: "white",
      top: "142px",
      width: "1172px",
      boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.1)",
      // background: "linear-gradient(180deg, rgba(255, 255, 255, 0.32) 61.98%, rgba(255, 255, 255, 0.005) 99.99%, rgba(255, 255, 255, 0) 100%)"
    }}>
      <div className="mg-t-58 text-center color-717171 fnt-size-19 fw-500"
        style={{letterSpacing: `${-0.05}em`}}
      >
        우리 회사와 어울리는&nbsp; 
        <span className="color-primary fw-700"
          style={{textDecoration: "underline",
            textDecorationColor: "#ECE0EF",
            textDecorationWidth: "206px",
            textDecorationThickness: "10px",
            textUnderlineOffset: "-8px"}}
          >콜라보레이션</span>
        &nbsp;을 찾아보세요
      </div>
      <div className="d-flex align-items-center" style={{padding: "0 66px"}}>
        <div style={{width: "50%"}}>
          <div className={"w-100pct mt-2 input-icon-container d-flex align-items-stretch"}
            style={{borderRadius: "48px"}}
          >
            <div className="flex-fill">
              <input type="text" className="w-100 h-100 ps-4"
                // TODO: onChange
                placeholder={"키워드 / 업종 검색"}
                onChange={(e) => setSearchWord(e.target.value)}
              />
            </div>
            <button type="button" className={"btn p-0"}
              onClick={search}
            >
              {/* <img src={`${process.env.PUBLIC_URL}/images/icon_search.svg`} alt="search_icon" /> */}
              <FontAwesomeIcon icon={fasSearch} className="size-18 color-979797" style={{color: "#747474", padding: `${14}px`,}}/>
            </button>
          </div>
          <div className="d-flex justify-content-center flex-wrap py-2">
            {testKeyword.map((v, i, a) => (
              <button key={i} type="button"
                className="btn py-1 px-3 me-2 flex-shrink-0 fnt-size-7"
                style={{color: "#7a6381", wordBreak: "break-all", maxWidth: `${100}%`, backgroundColor: "#F1EEF1", borderRadius: `${18}px`}}
                // TODO: search keyword
                // onClick={(e) => _removeKeyword(i)}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
        <div style={{height: "157px", borderLeft: "2px solid #d1d1d1", margin: "26px 64px"}}></div>
        <div className="d-flex" style={{width: "50%"}}>
          <div>
            <button className="btn btn-back-yellow fnt-size-8 fw-700"
              onClick={() => window.location.href = "/collaborations/post"}
              style={{width: "456px", height: "55px", borderRadius: "50px"}}
            >
              콜라보레이션 등록
            </button>
            <div className="mg-t-10 text-center fw-500 color-717171" style={{fontSize: "17px"}}>원하는 콜라보레이션이 없으신가요?</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSearchAndCollaboBox;