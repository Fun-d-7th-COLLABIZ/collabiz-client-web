import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft as fasChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { MainContainer } from "../blueprints";
import DatePicker, { setDefaultLocale } from 'react-datepicker';
// import { getYear } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
setDefaultLocale("ko")

function VCollaboRegistration() {
  // const _ = require('lodash');

  const [currentStep, setCurrentStep] = useState('콜라보 정보 등록');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [title, setTitle] = useState('');
  const [neededService, setNeededService] = useState('');
  const [providedService, setProvidedService] = useState('');
  const [detail, setDetail] = useState('');
  const [place, setPlace] = useState('');
  const [placeDescription, setPlaceDescription] = useState('');
  const [keywordSource, setKeywordSource] = useState('');
  const [keyword, setKeyword] = useState(Array);

  const step = [
    '콜라보 정보 등록',
    '등록 기간 설정',
    '콜라보 장소 설정',
    '키워드 설정',
    '파일 첨부(추가)',
    '등록하기',
  ];

  function _handleAddKeyword(e) {
    if (e.keyCode !== 13 || keywordSource === '') // enter key
      return;

    e.preventDefault();

    let newKeyword = keywordSource.slice();
    
    setKeywordSource('');
    setKeyword(keyword.concat(newKeyword));
  }

  function _removeKeyword(idx) {
    let tempKeyword = keyword.slice();
    tempKeyword.splice(idx, 1);

    setKeyword(tempKeyword);
  }
  
  // const years = _.range(2022, getYear(new Date()) + 1, 1);
  // const months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October", 
  //   "November",
  //   "December"
  // ];

  return (
    <div className="w-100 bg-f0f0f0" style={{height: `${100}%`}}>
      <MainContainer className="d-flex" style={{paddingBottom: `${170}px`}}>
        <div>
          <div className="pd-t-80 fnt-size-14 fw-700">콜라보레이션 등록</div>
          <div className="mg-t-80 fnt-size-8 color-979797">콜라보레이션 등록</div>
          <div className="mg-t-46"
            style={{width: `${210}px`}}
          >
            {step.map((v, i) => {
              return (
                <div key={i}>
                  <button
                    onClick={(e) => setCurrentStep(v)}
                    className={"btn fnt-size-8" + (v === currentStep ? " fw-600"  : " color-979797")}
                  >
                    {i + 1}. {v}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="mg-t-46 fnt-size-8 color-979797">콜라보레이션 등록 완료</div>
        </div>
        

        {/* STEP 1 : 콜라보 정보 등록 */}
        {currentStep === step[0] ?
        <div
          className="mg-l-80 mg-t-80 pd-x-40 pd-y-40 bg-ffffff"
          style={{width: `${800}px`}}
        >
          <div className="fnt-size-12">콜라보 정보 등록</div>
          <hr className="mg-t-40 color-dedede" style={{height: `${1}px`, width: `${690}px`, opacity: 1}}/>
          <div className="mg-t-30 fnt-size-9 fw-700">콜라보 제목</div>
          <div className="mt-2 fnt-size-8">필요한 재화나 서비스 중심으로 제목을 작성해주세요.</div>
          <div className="mt-2">
            <input type="text"
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              style={{width: `${100}%`}}
              className="p-2"
              placeholder="예) 영상 촬영 및 편집 가능한 인력을 구합니다."></input>
          </div>

          <div className="mg-t-40 fnt-size-9 fw-700">필요 서비스</div>
          <div className="mt-2 fnt-size-8">필요한 재화나 서비스를 작성해주세요.</div>
          <div className="mt-2">
            <input type="text"
              onChange={(e) => setNeededService(e.target.value)}
              name="neededService"
              style={{width: `${100}%`}}
              className="p-2" placeholder="예) 영상 촬영 및 편집 가능한 인력"></input>
          </div>

          <div className="mg-t-40 fnt-size-9 fw-700">제공 가능 서비스</div>
          <div className="mt-2 fnt-size-8">제공 가능한 재화나 서비스를 작성해주세요.</div>
          <div className="mt-2">
            <input type="text"
              onChange={(e) => setProvidedService(e.target.value)}
              name="providedService"
              style={{width: `${100}%`}}
              className="p-2"
              placeholder="예) 영화 및 드라마 시나리오 기획"></input>
          </div>

          <div className="mg-t-40 fnt-size-9 fw-700">콜라보 상세 내용</div>
          <div className="mt-2 fnt-size-8">필요한 재화 또는 서비스, 제공 가능한 재화 또는 서비스를 중심으로 작성해주세요.</div>
          {/* TODO: EDITOR */}
          <div className="mt-2">
            <input type="text"
              onChange={(e) => setDetail(e.target.value)}
              name="detail"
              style={{width: `${100}%`}}
              className="p-2"
              placeholder="예) 시나리오 작가 000입니다.
                엔터테인먼트 회사에 지원하기 위해 나만의 포트폴리오를 만들고 있습니다.
                제가 작성한 시나리오로 3분짜리 동영상 제작을 계획 중에 있습니다.
                영상 촬영 및 편집이 가능하신 분이나 업체를 구하며 
                회사 홍보 글, 시나리오 등 글쓰기에 관련된 모든 작업 가능합니다. 연락 부탁드립니다."></input>
          </div>
          <div className="mg-t-80 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={() => setCurrentStep(step[1])}>다음</button>
          </div>
        </div>
        : <span></span>}

        {/* STEP 2 : 등록 기간 설정 */}
        {currentStep === step[1] ?
        <div
          className="mg-l-80 mg-t-80 pd-x-40 pd-y-40 bg-ffffff"
          style={{width: `${800}px`}}
        >
          <div className="fnt-size-12">등록 기간 설정</div>
          <hr className="mg-t-40 color-dedede" style={{height: `${1}px`, width: `${690}px`, opacity: 1}}/>
          <div className="mg-t-30 fnt-size-9 fw-700">모집 기간</div>
          <div className="mt-2 fnt-size-8">등록한 콜라보가 공개되는 기간입니다.</div>
          <div className="mt-2 d-flex">
            <div style={{width: `${50}%`}}>
              <DatePicker
                // renderCustomHeader={({
                //   date,
                //   decreaseMonth,
                //   increaseMonth,
                //   prevMonthButtonDisabled,
                //   nextMonthButtonDisabled
                // }) => (
                //   <div className="date-custom-header">
                //     <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                //       <FontAwesomeIcon icon={fasChevronLeft}/>
                //     </button>
                //     <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                //       <FontAwesomeIcon icon={fasChevronRight}/>
                //     </button>
                //   </div>
                // )}
                // locale="ko"
                // showPopperArrow={false}
                selected={startDate}
                placeholderText="선택해주세요."
                onChange={(date) => setStartDate(date)}/>
            </div>
            <div style={{width: `${50}%`}}>
              <DatePicker
                // locale="ko"
                // showPopperArrow={false}
                selected={endDate}
                placeholderText="선택해주세요."
              onChange={(date) => setEndDate(date)}/>
            </div>
          </div>

          <div className="mg-t-80 d-flex justify-content-between">
            <button className="btn color-primary" onClick={() => setCurrentStep(step[0])}>
              <FontAwesomeIcon icon={fasChevronLeft}/>&nbsp;&nbsp;이전
            </button>
            <button className="btn btn-primary" onClick={() => setCurrentStep(step[2])}>다음</button>
          </div>
        </div>
        : <span></span>}

        {/* STEP 3 : 콜라보 장소 설정 */}
        {currentStep === step[2] ?
        <div
          className="mg-l-80 mg-t-80 pd-x-40 pd-y-40 bg-ffffff"
          style={{width: `${800}px`}}
        >
          <div className="fnt-size-12">콜라보 장소 설정</div>
          <hr className="mg-t-40 color-dedede" style={{height: `${1}px`, width: `${690}px`, opacity: 1}}/>
          <div className="mg-t-30 fnt-size-9 fw-700">콜라보 장소</div>
          <div className="mt-2 fnt-size-8">제공받는 재화나 서비스를 어디서 받고 싶으신가요?</div>
          <div className="mt-2">
            <input type="text"
              onChange={(e) => setPlace(e.target.value)}
              name="place"
              style={{width: `${100}%`}}
              className="p-2"
              placeholder="주소를 입력해 주세요."></input>
          </div>

          <div className="mg-t-40 fnt-size-9 fw-700">상세 설명(선택)</div>
          <div className="mt-2 fnt-size-8">콜라보 장소에 대해 상세히 설명해 주세요.</div>
          <div className="mt-2">
            <input type="text"
              onChange={(e) => setPlaceDescription(e.target.value)}
              name="placeDescription"
              style={{width: `${100}%`}}
              className="p-2"
              placeholder="예) 한 달간은 마포구 상암동 스튜디오에서 함께 촬영을 도와주시고, 한 달간은 여의도동 사무실 출근해서 작업을 도와주시면 좋을 것 같아요~"></input>
          </div>

          <div className="mg-t-80 d-flex justify-content-between">
            <button className="btn color-primary" onClick={() => setCurrentStep(step[1])}>
              <FontAwesomeIcon icon={fasChevronLeft}/>&nbsp;&nbsp;이전
            </button>
            <button className="btn btn-primary" onClick={() => setCurrentStep(step[3])}>다음</button>
          </div>
        </div>
        : <span></span>}

        {/* STEP 4 : 키워드 설정 */}
        {currentStep === step[3] ?
        <div
          className="mg-l-80 mg-t-80 pd-x-40 pd-y-40 bg-ffffff"
          style={{width: `${800}px`}}
        >
          <div className="fnt-size-12">키워드 설정</div>
          <hr className="mg-t-40 color-dedede" style={{height: `${1}px`, width: `${690}px`, opacity: 1}}/>
          <div className="mg-t-30 fnt-size-9 fw-700">키워드</div>
          <div className="mt-2 fnt-size-8">설정한 키워드로 등록된 콜라보가 검색 될 수 있어요.</div>
          <div className="mt-2">
            <input type="text"
              onChange={(e) => setKeywordSource(e.target.value)}
              onKeyUp={_handleAddKeyword}
              value={keywordSource}
              name="keywordSource"
              style={{width: `${100}%`}}
              className="p-2"
              placeholder="키워드를 입력해 주세요."></input>
          </div>
          <div className="d-flex flex-wrap py-2">
            {keyword.map((v, i, a) => (
              <button key={i} type="button"
                className="btn pd-x-10 me-2 flex-shrink-0 text-start fw-300"
                style={{wordBreak: "break-all", maxWidth: `${100}%`, border: "1px solid #691B9A", borderRadius: `${18}px`}}
                onClick={(e) => _removeKeyword(i)}
              >
                {`${v} \u2715`}
              </button>
            ))}
          </div>

          <div className="mg-t-80 d-flex justify-content-between">
            <button className="btn color-primary" onClick={() => setCurrentStep(step[2])}>
              <FontAwesomeIcon icon={fasChevronLeft}/>&nbsp;&nbsp;이전
            </button>
            <button className="btn btn-primary" onClick={() => setCurrentStep(step[4])}>다음</button>
          </div>
        </div>
        : <span></span>}

        {/* STEP 5 : 파일 첨부 */}
        {currentStep === step[4] ?
        <div
          className="mg-l-80 mg-t-80 pd-x-40 pd-y-40 bg-ffffff"
          style={{width: `${800}px`}}
        >
          <div className="fnt-size-12">파일 첨부(추가)</div>
          <hr className="mg-t-40 color-dedede" style={{height: `${1}px`, width: `${690}px`, opacity: 1}}/>
          <div className="mg-t-30 fnt-size-9 fw-700">파일</div>
          <div className="mt-2 fnt-size-8">콜라보레이션 소개에 참고할 파일을 첨부해 주세요.</div>
          <div className="">
            <div className="mt-2 d-flex flex-row align-items-center" style={{width: `${100}%`}}>
              <div className="fnt-size-9 color-979797" style={{width: `${30}%`}}>첨부파일 1</div>
              <div className="mt-3">
                <input type="file" style={{width: `${100}%`}} className="p-2"></input>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center" style={{width: `${100}%`}}>
              <div className="fnt-size-9 color-979797" style={{width: `${30}%`}}>첨부파일 2</div>
              <div className="">
                <input type="file" style={{width: `${100}%`}} className="p-2"></input>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center" style={{width: `${100}%`}}>
              <div className="fnt-size-9 color-979797" style={{width: `${30}%`}}>첨부파일 3</div>
              <div className="">
                <input type="file" style={{width: `${100}%`}} className="p-2"></input>
              </div>
            </div>
          </div>

          <div className="mg-t-80 d-flex justify-content-between">
            <button className="btn color-primary" onClick={() => setCurrentStep(step[3])}>
              <FontAwesomeIcon icon={fasChevronLeft}/>&nbsp;&nbsp;이전
            </button>
            <button className="btn btn-primary" onClick={() => setCurrentStep(step[5])}>다음</button>
          </div>
        </div>
        : <span></span>}

        {/* STEP 6 : 등록하기 */}
        {currentStep === step[5] ?
        <div
          className="mg-l-80 mg-t-80 pd-x-40 pd-y-40 bg-ffffff"
          style={{width: `${800}px`}}
        >
          <div className="fnt-size-12">등록하기</div>
          <hr className="mg-t-40 color-dedede" style={{height: `${1}px`, width: `${690}px`, opacity: 1}}/>
          <div className="mg-t-30 fnt-size-9 fw-700">등록 예정 내용</div>
          <div className="mt-2 fnt-size-8">콜라보 등록을 위해 최종 확인해 주세요. 등록하기를 누르시면 콜라보레이션이 등록됩니다.</div>

          <div className="mg-t-30 pd-x-30 pd-y-30" style={{border: "1px solid #dedede"}}>
            <div className="fnt-size-9 fw-700">{title}</div>
            {/* <div className="fnt-size-9 fw-700">개발 인력 콜라보 원합니다.</div> */}
            <hr className="mg-t-40 color-dedede" style={{height: `${1}px`, width: `${650}px`, opacity: 1}}/>
            <div className="mg-t-30 fnt-size-7 fw-700">필요 서비스</div>
            <div className="mt-2 fnt-size-8">{neededService}</div>
            {/* <div className="mt-2 fnt-size-8">프론트 엔드 개발자 2인</div> */}
            <div className="mg-t-30 fnt-size-7 fw-700">제공가능 서비스</div>
            <div className="mt-2 fnt-size-8">{providedService}</div>
            {/* <div className="mt-2 fnt-size-8">서비스 기획자 또는 UI/UX 디자이너</div> */}
            <div className="mg-t-30 fnt-size-7 fw-700">콜라보 상세 내용</div>
            <div className="mt-2 fnt-size-8">{detail}</div>
            {/* <div className="mt-2 fnt-size-8">프론트엔드 개발자 2인을  제공해주실 기업 있을까요?<br/>
              기획자 및 디자이너 직군의 지원이 가능합니다.<br/>
              약 3개월간 진행할 프로젝트... ㅇㅇㅇ서비스를 개발... 앱개발.. <br/>
              개발언어는...<br/>
              근무지는 ....  (콜라보 상세 내용)<br/>
              3개월간 인력 또는 서비스를 교환하면 좋을 것 같습니다. 혹시라도 당장 인력이 필요하시지 않다면,<br/>
              필요하실때 파견해드릴 수 있는 바우처 형태로도 제공가능하니 편하게 연락주세요.</div> */}
            <hr className="mg-t-40 color-dedede" style={{height: `${1}px`, width: `${650}px`, opacity: 1}}/>
            <div className="mg-t-30 fnt-size-7 fw-700">모집 기간</div>
            {/* <div className="mt-2 fnt-size-8">{startDate} ~ {endDate}</div> */}
            <div className="mt-2 fnt-size-8">2022.04.01~2022.07.01</div>
            <hr className="mg-t-40 color-dedede" style={{height: `${1}px`, width: `${650}px`, opacity: 1}}/>
            <div className="mg-t-30 fnt-size-7 fw-700">콜라보 장소</div>
            <div className="mt-2 fnt-size-8">{place}</div>
            <div className="mt-2 fnt-size-8">{placeDescription}</div>
            <hr className="mg-t-40 color-dedede" style={{height: `${1}px`, width: `${650}px`, opacity: 1}}/>
            <div className="mg-t-30 fnt-size-7 fw-700">첨부파일</div>
            <div className="mt-2 fnt-size-8">기획서.pdf</div>
          </div>

          <div className="mg-t-80 d-flex justify-content-between">
            <button className="btn color-primary" onClick={() => setCurrentStep(step[4])}>
              <FontAwesomeIcon icon={fasChevronLeft}/>&nbsp;&nbsp;이전
            </button>
            <button className="btn btn-primary" onClick={() => setCurrentStep(step[5])}>완료</button>
          </div>
        </div>
        : <span></span>}
      </MainContainer>
    </div>
  );

}

export default VCollaboRegistration;