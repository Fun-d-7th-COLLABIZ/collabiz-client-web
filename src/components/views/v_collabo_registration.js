import React, { useState, useEffect, useRef, useContext } from 'react';
import API from '../../api/api';
import { useLocation } from 'react-router-dom';
import usePrevious from '../../custom_hook/use_previous';
import { DataAuth } from '../../components/data';
import { ModalContext } from '../../context';
import { VLogin } from '../views';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft as fasChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { MainContainer } from "../blueprints";
import { WrapAuth } from '../wrappers';
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
  const [requiredService, serRequiredService] = useState('');
  const [providedService, setProvidedService] = useState('');
  const [detail, setDetail] = useState('');
  const [place, setPlace] = useState('');
  const [placeDescription, setPlaceDescription] = useState('');
  const [keywordSource, setKeywordSource] = useState('');
  const [keyword, setKeyword] = useState(Array);

  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const file1Input = useRef(null);
  const file2Input = useRef(null);
  const file3Input = useRef(null);

  const step = [
    '콜라보 정보 등록',
    '등록 기간 설정',
    '콜라보 장소 설정(선택)',
    '키워드 설정',
    '파일 첨부(선택)',
    '등록하기',
  ];

  const needToWrite = {
    '콜라보 정보 등록': [title, requiredService, providedService, detail],
    '등록 기간 설정': [startDate, endDate],
    '콜라보 장소 설정': [],
    '키워드 설정': [keyword],
    '파일 첨부(추가)': [],
    '등록하기': [],
  };

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

  function checkStep(i) {
    var currentIdx = step.indexOf(currentStep);
    var result = true;
    if (currentIdx >= i) {
      setCurrentStep(step[i]);
      return;
    }
    
    var needToCheck = needToWrite[step[i - 1]];
    if (needToCheck !== void 0) {
      for (var j = 0; j < needToCheck.length; j++) {
        if (needToCheck[j] === '' || needToCheck[j] === null || needToCheck[j] === undefined || needToCheck[j].length === 0)
          result = false;
      }
    }

    if (result === true)
      setCurrentStep(step[i]);
    else
      alert('정보를 모두 입력해 주세요.');
  }

  function validate() {
    if (title.trim().length < 1)
      return '콜라보 제목을 입력해주세요.';
    if (requiredService.trim().length < 1)
      return '필요 서비스를 입력해주세요.';
    if (providedService.trim().length < 1)
      return '제공가능 서비스를 입력해주세요.';
    if (detail.trim().length < 1)
      return '콜라보 상세내용을 입력해주세요.';
    if (startDate === null || endDate === null)
      return '모집 기간을 설정해주세요.';
    if (keyword.length < 1 || keyword === null)
      return '키워드를 입력해주세요.';

    return '';
  }

  async function submitCollabo() {
    var msg = validate();
    if (msg !== '') {
      alert(msg);
      return;
    }
    
    try {
      var formData = new FormData();
      let requestParams = {
        title: title,
        possibleOffer: providedService,
        requiredOffer: requiredService,
        content: detail,
        recruitStateDate: startDate,
        recruitEndDate: endDate,
        region: place,
        regionDetail: placeDescription,
        keywords: keyword,
      };

      formData.append('postRequestDto',
        new Blob([JSON.stringify(requestParams)],
        { type: 'application/json' }
      ));

      formData.append('files', [file1, file2, file3]);

      var result = await API.db.post('/post', formData);
    } catch (e) {
      console.log('collabo register error', e);
      if (e?.response?.data?.message) {
        const msg = e.response.data.message;
        alert('collabo register error: ' + msg);
      }
    }
  }

  function handleChangeFile(e) {
    var id = e.target.id;
    if (e.target.files === null || e.target.files.length < 1)
      return;

    if (id === 'ex_filename_1') {
      file1Input.current.value = e.target.files[0].name;
      setFile1(e.target.files[0]);
      return;
    }
    if (id === 'ex_filename_2') {
      file2Input.current.value = e.target.files[0].name;
      setFile2(e.target.files[0]);
      return;
    }
    if (id === 'ex_filename_3') {
      file3Input.current.value = e.target.files[0].name;
      setFile3(e.target.files[0]);
      return;
    }
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
  var currentIdx = step.indexOf(currentStep);

  

  return (
    <React.Fragment>
      <div className="w-100 bg-f0f0f0" style={{height: `${100}%`}}>
        <MainContainer className="d-flex" style={{paddingBottom: `${170}px`}}>
          <div>
            <div className="pd-t-80 fnt-size-14 fw-700">콜라보레이션 등록</div>
            <div className="mg-t-80 fnt-size-8 color-979797">콜라보레이션 등록</div>
            <div className="mg-t-46 d-flex"
              style={{width: `${210}px`}}
            >
              <div className="position-relative"
                style={{borderLeft: "2px solid #c4c4c4"}}>
                <div className="position-absolute"
                  style={{top: `calc(${currentIdx} * ${34}px + ${currentIdx} * ${24}px)`, left: "-2px", zIndex: "1", height: "24px", borderLeft: "2px solid #691B9A"}}></div>
              </div>
              <div>
                {step.map((v, i) => {
                  return (
                    <div key={i} className={"ms-3" + (i !== 0 ? " mg-t-30" : "")}>
                      <div
                        style={{border: "none"}}
                        // onClick={(e) => checkStep(v, i)}
                        className={"fnt-size-8" + (v === currentStep ? " fw-600"  : " color-979797")}
                      >
                        {i + 1}. {v}
                      </div>
                    </div>
                  );
                })}
              </div>
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
                value={title}
                placeholder="예) 영상 촬영 및 편집 가능한 인력을 구합니다."></input>
            </div>

            <div className="mg-t-40 fnt-size-9 fw-700">필요 서비스</div>
            <div className="mt-2 fnt-size-8">필요한 재화나 서비스를 작성해주세요.</div>
            <div className="mt-2">
              <input type="text"
                onChange={(e) => serRequiredService(e.target.value)}
                name="requiredService"
                style={{width: `${100}%`}}
                className="p-2"
                value={requiredService}
                placeholder="예) 영상 촬영 및 편집 가능한 인력"></input>
            </div>

            <div className="mg-t-40 fnt-size-9 fw-700">제공 가능 서비스</div>
            <div className="mt-2 fnt-size-8">제공 가능한 재화나 서비스를 작성해주세요.</div>
            <div className="mt-2">
              <input type="text"
                onChange={(e) => setProvidedService(e.target.value)}
                name="providedService"
                style={{width: `${100}%`}}
                className="p-2"
                value={providedService}
                placeholder="예) 영화 및 드라마 시나리오 기획"></input>
            </div>

            <div className="mg-t-40 fnt-size-9 fw-700">콜라보 상세 내용</div>
            <div className="mt-2 fnt-size-8">필요한 재화 또는 서비스, 제공 가능한 재화 또는 서비스를 중심으로 작성해주세요.</div>
            {/* TODO: EDITOR */}
            <div className="mt-2">
              <textarea
                rows="5"
                onChange={(e) => setDetail(e.target.value)}
                name="detail"
                style={{width: `${100}%`}}
                className="p-2"
                value={detail}
                placeholder="예) 시나리오 작가 000입니다.
                  엔터테인먼트 회사에 지원하기 위해 나만의 포트폴리오를 만들고 있습니다.
                  제가 작성한 시나리오로 3분짜리 동영상 제작을 계획 중에 있습니다.
                  영상 촬영 및 편집이 가능하신 분이나 업체를 구하며 
                  회사 홍보 글, 시나리오 등 글쓰기에 관련된 모든 작업 가능합니다. 연락 부탁드립니다."></textarea>
            </div>
            <div className="mg-t-80 d-flex justify-content-end">
              <button className="btn btn-primary" onClick={() => checkStep(1)}>다음</button>
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
                  maxDate={endDate}
                  minDate={Date.now()}
                  selected={startDate}
                  placeholderText="선택해주세요."
                  onChange={(date) => setStartDate(date)}/>
              </div>
              <div style={{width: `${50}%`}}>
                <DatePicker
                  // locale="ko"
                  // showPopperArrow={false}
                  minDate={startDate}
                  selected={endDate}
                  placeholderText="선택해주세요."
                onChange={(date) => setEndDate(date)}/>
              </div>
            </div>

            <div className="mg-t-80 d-flex justify-content-between">
              <button className="btn color-primary" onClick={() => checkStep(0)}>
                <FontAwesomeIcon icon={fasChevronLeft}/>&nbsp;&nbsp;이전
              </button>
              <button className="btn btn-primary" onClick={() => checkStep(2)}>다음</button>
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
                value={place}
                placeholder="주소를 입력해 주세요."></input>
            </div>

            <div className="mg-t-40 fnt-size-9 fw-700">상세 설명</div>
            <div className="mt-2 fnt-size-8">콜라보 장소에 대해 상세히 설명해 주세요.</div>
            <div className="mt-2">
              <textarea
                rows="5"
                onChange={(e) => setPlaceDescription(e.target.value)}
                name="placeDescription"
                style={{width: `${100}%`}}
                className="p-2"
                value={placeDescription}
                placeholder="예) 한 달간은 마포구 상암동 스튜디오에서 함께 촬영을 도와주시고, 한 달간은 여의도동 사무실 출근해서 작업을 도와주시면 좋을 것 같아요~"></textarea>
            </div>

            <div className="mg-t-80 d-flex justify-content-between">
              <button className="btn color-primary" onClick={() => checkStep(1)}>
                <FontAwesomeIcon icon={fasChevronLeft}/>&nbsp;&nbsp;이전
              </button>
              <button className="btn btn-primary" onClick={() => checkStep(3)}>다음</button>
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
                  className="btn pd-x-10 me-2 flex-shrink-0 fw-300"
                  style={{wordBreak: "break-all", maxWidth: `${100}%`, border: "1px solid #691B9A", borderRadius: `${18}px`}}
                  onClick={(e) => _removeKeyword(i)}
                >
                  {v}
                  <img className="ps-2 pb-1" alt="remove_file_button_1" src={`${process.env.PUBLIC_URL}/images/remove_file.png`}/>
                </button>
              ))}
            </div>

            <div className="mg-t-80 d-flex justify-content-between">
              <button className="btn color-primary" onClick={() => checkStep(2)}>
                <FontAwesomeIcon icon={fasChevronLeft}/>&nbsp;&nbsp;이전
              </button>
              <button className="btn btn-primary" onClick={() => checkStep(4)}>다음</button>
            </div>
          </div>
          : <span></span>}

          {/* STEP 5 : 파일 첨부 */}
          {currentStep === step[4] ?
          <div
            className="mg-l-80 mg-t-80 pd-x-40 pd-y-40 bg-ffffff"
            style={{width: `${800}px`}}
          >
            <div className="fnt-size-12">파일 첨부(선택)</div>
            <hr className="mg-t-40 color-dedede" style={{height: `${1}px`, width: `${690}px`, opacity: 1}}/>
            <div className="mg-t-30 fnt-size-9 fw-700">파일</div>
            <div className="mt-2 fnt-size-8">콜라보레이션 소개에 참고할 파일을 첨부해 주세요.</div>
            <div className="">
              {/* <div className="mt-2 d-flex flex-row align-items-center" style={{width: `${100}%`}}>
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
              </div> */}
              <div className="mg-t-20 d-flex justify-content-between align-items-center">
              <div className="fnt-size-9 color-979797">첨부파일 1</div>
                <div className="filebox position-relative">
                  <input className="upload-name"
                    style={{padding: "8px 20px", width: "500px"}}
                    placeholder="파일을 첨부해주세요."
                    ref={file1Input}
                    disabled="disabled"
                  />
                  <label className="position-absolute" style={{right: "40px", bottom: "2px"}} htmlFor="ex_filename_1">
                    <img alt="file_button_1" src={`${process.env.PUBLIC_URL}/images/add_file.png`}/>
                  </label>
                  <input type="file" id="ex_filename_1" className="upload-hidden"
                    onChange={handleChangeFile}
                  />
                  <button className="btn position-absolute" style={{right: "6px", bottom: "5px"}}
                    onClick={() => {
                      setFile1(null);
                      file1Input.current.value = null;
                    }}
                  >
                    <img alt="remove_file_button_1" src={`${process.env.PUBLIC_URL}/images/remove_file.png`}/>
                  </button>
                </div>
              </div>

              <div className="mg-t-10 d-flex justify-content-between align-items-center">
                <div className="fnt-size-9 color-979797">첨부파일 2</div>
                <div className="filebox position-relative">
                  <input className="upload-name"
                    style={{padding: "8px 20px", width: "500px"}}
                    placeholder="파일을 첨부해주세요."
                    ref={file2Input}
                    disabled="disabled"
                  />
                  <label className="position-absolute" htmlFor="ex_filename_2" style={{right: "40px", bottom: "2px"}}>
                    <img alt="file_button_2" src={`${process.env.PUBLIC_URL}/images/add_file.png`}/>
                  </label>
                  <input type="file" id="ex_filename_2" className="upload-hidden"
                    onChange={handleChangeFile}
                  />
                  <button className="btn position-absolute" style={{right: "6px", bottom: "5px"}}
                    onClick={() => {
                      setFile2(null);
                      file2Input.current.value = null;
                    }}
                  >
                    <img alt="remove_file_button_2" src={`${process.env.PUBLIC_URL}/images/remove_file.png`}/>
                  </button>
                </div>
              </div>

              <div className="mg-t-10 d-flex justify-content-between align-items-center">
                <div className="fnt-size-9 color-979797">첨부파일 3</div>
                <div>
                  <div className="filebox position-relative">
                    <input className="upload-name"
                      style={{padding: "8px 20px", width: "500px"}}
                      placeholder="파일을 첨부해주세요."
                      ref={file3Input}
                      disabled="disabled"
                    />
                    <label className="position-absolute" htmlFor="ex_filename_3" style={{right: "40px", bottom: "2px"}}>
                      <img alt="file_button_3" src={`${process.env.PUBLIC_URL}/images/add_file.png`}/>
                    </label>
                    <input type="file" id="ex_filename_3" className="upload-hidden"
                      onChange={handleChangeFile}
                    />
                    <button className="btn position-absolute" style={{right: "6px", bottom: "5px"}}
                      onClick={() => {
                        setFile3(null);
                        file3Input.current.value = null;
                      }}
                    >
                      <img alt="remove_file_button_3" src={`${process.env.PUBLIC_URL}/images/remove_file.png`}/>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mg-t-80 d-flex justify-content-between">
              <button className="btn color-primary" onClick={() => checkStep(3)}>
                <FontAwesomeIcon icon={fasChevronLeft}/>&nbsp;&nbsp;이전
              </button>
              <button className="btn btn-primary" onClick={() => checkStep(5)}>다음</button>
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
              <hr className="mg-t-20 color-dedede" style={{height: `${1}px`, width: `${650}px`, opacity: 1}}/>
              <div className="mg-t-30 fnt-size-7 fw-700">필요 서비스</div>
              <div className="mt-2 fnt-size-8">{requiredService}</div>
              <div className="mg-t-30 fnt-size-7 fw-700">제공가능 서비스</div>
              <div className="mt-2 fnt-size-8">{providedService}</div>
              <div className="mg-t-30 fnt-size-7 fw-700">콜라보 상세 내용</div>
              <div className="mt-2 fnt-size-8">{detail}</div>
              <hr className="mg-t-40 color-dedede" style={{height: `${1}px`, width: `${650}px`, opacity: 1}}/>
              <div className="mg-t-30 fnt-size-7 fw-700">모집 기간</div>
              <div className="mt-2 fnt-size-8">{startDate.getFullYear()}.{startDate.getMonth() + 1}.{startDate.getDate()} ~ {endDate.getFullYear()}.{endDate.getMonth() + 1}.{endDate.getDate()}</div>
              <hr className="mg-t-40 color-dedede" style={{height: `${1}px`, width: `${650}px`, opacity: 1}}/>
              <div className="mg-t-30 fnt-size-7 fw-700">콜라보 장소</div>
              <div className="mt-2 fnt-size-8">{place}</div>
              <div className="mt-2 fnt-size-8">{placeDescription}</div>
              <hr className="mg-t-40 color-dedede" style={{height: `${1}px`, width: `${650}px`, opacity: 1}}/>
              <div className="mg-t-30 fnt-size-7 fw-700">첨부파일</div>
              <div className="mt-2 fnt-size-8">{file1Input.current.value === null ? '' : file1Input.current.value}</div>
              <div className="mt-2 fnt-size-8">{file2Input.current.value === null ? '' : file2Input.current.value}</div>
              <div className="mt-2 fnt-size-8">{file3Input.current.value === null ? '' : file3Input.current.value}</div>
              {/* <div className="mt-2 fnt-size-8">{file2Input.current.value ?? ''}</div>
              <div className="mt-2 fnt-size-8">{file3Input.current.value ?? ''}</div> */}
            </div>

            <div className="mg-t-80 d-flex justify-content-between">
              <button className="btn color-primary" onClick={() => checkStep(4)}>
                <FontAwesomeIcon icon={fasChevronLeft}/>&nbsp;&nbsp;이전
              </button>
              <button className="btn btn-primary" onClick={submitCollabo}>완료</button>
            </div>
          </div>
          : <span></span>}
      
        </MainContainer>
      </div>
    </React.Fragment>
  );

}

export default VCollaboRegistration;