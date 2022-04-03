import React, { useState, useRef } from 'react';
import { MainContainer } from '../blueprints';

function VRegister() {
  var [isSubmit, setIsSubmit] = useState(false);
  var [privacyChecked, setPrivacyChecked] = useState(false);
  var [serviceChecked, setServiceChecked] = useState(false);
  
  var [userId, setUserId] = useState('');
  var [password, setPassword] = useState('');
  var [password2, setPassword2] = useState('');
  var [companyName, setCompanyName] = useState('');
  var [coRegistNumber, setCoRegistNumber] = useState('');
  var [idCheckMessage, setIdCheckMessage] = useState('');
  var [pwCheckMessage, setPwCheckMessage] = useState('');
  var [coRegistNumCheckMessage, setCoRegistNumCheckMessage] = useState('');

  const idInputFocus = useRef(null);
  const pwInputFocus = useRef(null);
  const pw2InputFocus = useRef(null);
  const companyNameInputFocus = useRef(null);
  const coRegistNumInputFocus = useRef(null);
  
  function validate() {
    if (userId.trim()=== '') {
      idInputFocus.current.focus();
      return '아이디를 입력해 주세요.';
    }
    else if (password.trim() === '') {
      pwInputFocus.current.focus();
      return '비밀번호를 입력해 주세요.';
    }
    else if (password2.trim() === '') {
      pw2InputFocus.current.focus();
      return '비밀번호 확인을 입력해 주세요.';
    }
    else if (password.trim() !== password2.trim()) {
      pwInputFocus.current.focus();
      return '비밀번호와 비밀번호 확인이 다릅니다.';
    }
    else if (companyName.trim() === '') {
      companyNameInputFocus.current.focus();
      return '회사명을 입력해 주세요.';
    }
    else if (coRegistNumber.trim() === '') {
      coRegistNumInputFocus.current.focus();
      return '사업자등록번호를 입력해 주세요.';
    }
    else if (!privacyChecked || !serviceChecked) {
      return '이용약관 및 개인정보 수집이용 동의에 체크해 주세요.';
    }
    else
      return true;
  }

  function submitRegister(e) {
    var validateResult = validate();
    if (validateResult !== true) {
      alert(validateResult);
      return;
    } else {
      setIsSubmit(true);
      try {
        // register 성공 시
        alert('가입되었습니다.');
      } catch (e) {
        alert('register error: ', e);
        console.log('register error', e);
      }
      setIsSubmit(false);
      
      return;
    }
  }

  function handleInputChange(e) {
    const target = e.target;
    const name = target.name;

    if (name === 'userId')
      setUserId(target.value);
    else if (name === 'pw')
      setPassword(target.value);
    else if (name === 'pw2')
      setPassword2(target.value);
    else if (name === 'companyName')
      setCompanyName(target.value);
    else if (name === 'coRegistNumber')
      setCoRegistNumber(target.value);
  }
  
  function handleAllCheckbox() {
    if (!serviceChecked || !privacyChecked) {
      setServiceChecked(true);
      setPrivacyChecked(true);
    } else {
      setServiceChecked(false);
      setPrivacyChecked(false);
    }
  }
 
  function checkPwLength(e) {
    // if (password.trim().length < 8)
    //     setPwCheckMessage('비밀번호는 8자리 이상이어야 합니다.')
    if (password.trim() !== password2.trim())
      setPwCheckMessage('비밀번호와 비밀번호 확인이 다릅니다.')
    else
      setPwCheckMessage('')
  }


  return (
    <React.Fragment>
      <MainContainer className="register">
        {/* <div className=" flex-column justify-content-center align-items-center"> */}
          <div className="my-5">
            <div className="mg-t-50 fw-700 fnt-size-10">회원가입</div>
            <div className="mg-t-40">
              <div className="fw-700">아이디</div>
              <div className="mg-t-10">
                <input name="userId" type="text"
                  className="py-2 px-3"
                  style={{width: `${98}%`}}
                  onChange={handleInputChange}
                  placeholder="이메일을 입력해 주세요"
                  autoFocus
                  ref={idInputFocus}
                />
                {/* <div className="bg-primary color-ffffff fnt-size-6" style={{borderRadius: `${28}px`}}>인증하기</div> */}
              </div>
              <div className="mt-1 fnt-size-7">{idCheckMessage}</div>
            </div>

            <div className="mg-t-20">
              <div className="fw-700">비밀번호</div>
              <div className="mg-t-10">
                <input name="pw" type="password"
                  className="py-2 px-3"
                  style={{width: `${98}%`}}
                  onChange={handleInputChange}
                  // onKeyUp={checkPwLength}
                  placeholder="비밀번호를 입력해주세요"
                  ref={pwInputFocus}
                />
              </div>
              <div className="mt-1">
                <input name="pw2" type="password"
                  className="py-2 px-3"
                  style={{width: `${98}%`}}
                  onChange={handleInputChange}
                  onKeyUp={checkPwLength}
                  placeholder="비밀번호를 입력해주세요"
                  ref={pw2InputFocus}
                />
              </div>
              <div className="mt-1 fnt-size-7 color-red">{pwCheckMessage}</div>
            </div>

            <div className="mg-t-20">
              <div className="fw-700">회사명</div>
              <div className="mg-t-10">
                <input name="companyName" type="text"
                  className="py-2 px-3"
                  style={{width: `${98}%`}}
                  onChange={handleInputChange}
                  placeholder="회사명을 입력해주세요"
                  ref={companyNameInputFocus}
                />
              </div>
            </div>

            <div className="mg-t-20">
              <div className="fw-700">사업자등록번호</div>
              <div className="mg-t-10">
                <input name="coRegistNumber" type="text"
                  className="py-2 px-3"
                  style={{width: `${98}%`}}
                  onChange={handleInputChange}
                  placeholder="사업자등록번호를 입력해주세요"
                  ref={coRegistNumInputFocus}
                />
              </div>
              <div className="mt-1 fnt-size-7">{coRegistNumCheckMessage}</div>
            </div>

            <div className="" style={{bottom: `${38}%`, right: `${25}%`}}>
              <button
                type="button"
                style={{borderRadius: `${28}px`}}
                className={"w-100pct mg-t-40 py-3 btn fnt-size-9 fw-700" + (!isSubmit ? " btn-primary" : " btn-ccc")}
                onClick={!isSubmit ? submitRegister : null}
              >
                {!isSubmit ? '가입하기' : '요청 중...'}</button>
            </div>

          <div className="mg-t-20 p-3" style={{border: "1px solid", borderRadius: `${10}px`}}>
            <div className="d-flex">
              <div>
                <input type="checkbox" name="all-terms" checked={serviceChecked && privacyChecked} onChange={handleAllCheckbox}/>
                <label className="pd-l-6" htmlFor="agreementAllTerms">모두 동의합니다.</label>
              </div>
            </div>
            <hr className="mb-0 mg-t-10" style={{height: `${1}px`, opacity: 1}}/>
            <div className="py-1 d-flex justify-content-between">
              <div>
                <input type="checkbox" name="service-terms" checked={serviceChecked} onChange={e => setServiceChecked(!serviceChecked)}/>
                <label className="pd-l-6" htmlFor="agreementServiceTerms">서비스 이용약관에 동의합니다.</label>
              </div>
              <button
                className="btn py-0 fnt-size-6"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("/docs/terms-of-service", "이용약관")
                }}
              >
                약관 보기
              </button>
            </div>
            <div className="py-1 d-flex justify-content-between">
              <div>
                <input type="checkbox" name="privacy-terms" checked={privacyChecked} onChange={e => setPrivacyChecked(!privacyChecked)}/>
                <label className="pd-l-6" htmlFor="agreementPrivacyTerms">개인정보 수집/이용에 동의합니다.</label>
              </div>
              <button
                className="btn py-0 fnt-size-6"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("/docs/privacy-policy", "개인정보처리및방침")
                }}
              >
                개인정보처리방침
              </button>
            </div>
          </div>
        </div>
      </MainContainer>
    </React.Fragment>
  );
}

export default VRegister;