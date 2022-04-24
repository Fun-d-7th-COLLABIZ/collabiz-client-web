import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash as fasEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { MainContainer } from '../blueprints';

function VRegister() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [serviceChecked, setServiceChecked] = useState(false);
  const [overFourteen, setOverFourteen] = useState(false);
  const [requestEmailVerification, setRequestEmailVerification] = useState(false);
  
  const [email, setEmail] = useState('');
  const [emailVerificationCode, setEmailVerificationCode] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessRegistNum, setBusinessRegistNum] = useState('');

  const [emailCheckMsg, setEmailCheckMsg] = useState('');
  const [emailVerificationCheckMsg, setEmailVerificationCheckMsg] = useState('');
  const [pwCheckMsg, setPwCheckMsg] = useState('');
  const [pw2CheckMsg, setPw2CheckMsg] = useState('');
  const [businessRegistNumCheckMsg, setBusinessRegistNumCheckMsg] = useState('');

  const emailInputFocus = useRef(null);
  const emailVerificationCodeInputFocus = useRef(null);
  const pwInputFocus = useRef(null);
  const pw2InputFocus = useRef(null);
  const companyNameInputFocus = useRef(null);
  const coRegistNumInputFocus = useRef(null);
  
  function validate() {
    if (email.trim()=== '') {
      emailInputFocus.current.focus();
      return '이메일을 입력해 주세요.';
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
      return '비밀번호가 일치하지 않습니다.';
    }
    else if (companyName.trim() === '') {
      companyNameInputFocus.current.focus();
      return '회사명을 입력해 주세요.';
    }
    else if (businessRegistNum.trim() === '') {
      coRegistNumInputFocus.current.focus();
      return '사업자등록번호를 입력해 주세요.';
    }
    else if (!privacyChecked || !serviceChecked) {
      return '필수 동의에 체크해 주세요.';
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
        setIsRegistered(true);
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

    if (name === 'email')
      setEmail(target.value);
    else if (name === 'emailVerificationCode')
      setEmailVerificationCode(target.value);
    else if (name === 'pw')
      setPassword(target.value);
    else if (name === 'pw2')
      setPassword2(target.value);
    else if (name === 'companyName')
      setCompanyName(target.value);
    else if (name === 'businessRegistNum')
      setBusinessRegistNum(target.value);
  }
  
  function handleAllCheckbox() {
    if (!serviceChecked || !privacyChecked) {
      setServiceChecked(true);
      setPrivacyChecked(true);
      setOverFourteen(true);
    } else {
      setServiceChecked(false);
      setPrivacyChecked(false);
      setOverFourteen(false);
    }
  }
 
  function checkPwLength(e) {
    const target = e.target;
    const name = target.name;

    if (name === 'pw') {
      if (password.trim().length < 8)
        setPwCheckMsg('영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.');
      else 
        setPwCheckMsg('');
    }
    
    else if (name === 'pw2') {
      if (password.trim() !== password2.trim())
        setPw2CheckMsg('비밀번호가 일치하지 않습니다.');
      else
        setPw2CheckMsg('');
    }
  }


  return (
    <MainContainer className="w-100 bg-f0f0f0" style={{height: `${100}%`}}>
    {isRegistered
      ? /* 회원가입 성공 시 */
        <div className="w-100 mx-auto pd-t-180 d-flex flex-column align-items-center justify-content-center">
          <div className="pd-y-50 d-flex flex-column align-items-center justify-content-center" style={{width: `${686}px`, backgroundColor: "white"}}>
            <div className="fnt-size-17 fw-700">회원가입이 완료되었습니다.</div>
            <div className="text-center color-606060 fnt-size-10">
              <div>반갑습니다. {companyName === '' ? '[회사명]' : companyName} 님</div>
              <div>아직 프로필이 없으시네요! 프로필을 생성해주세요!</div>
            </div>
            <hr style={{height: `${1}px`, width: `${586}px`, opacity: 1, color: "#979797"}}/>
            <div className="d-flex">
              <div>
                <button type="button"
                  style={{width: `${230}px`, height: `${60}px`}}
                  className="btn btn-white-gray fnt-size-9 fw-500"
                  onClick={(e) => window.location.href = "/login"}
                >
                  로그인
                </button>
              </div>
              <div className="mg-l-10">
                <button type="button"
                  style={{width: `${230}px`, height: `${60}px`}}
                  className="btn btn-primary fnt-size-9 fw-500"
                  // 프로필 작성으로 이동
                  // onClick={(e) => window.location.href = "/"}
                >
                  프로필 생성
                </button>
              </div>
            </div>
          </div>
          <div className="pd-b-180"></div>
        </div>
      :
        <div>
          <div className="pd-t-100 text-center fw-700 fnt-size-17">회원가입</div>
          <div className="w-100 mx-auto bg-f0f0f0" style={{maxWidth: `${476}px`}}>
            <div className="register mg-t-30">
              <div className="pd-50 flex-wrap">
                <div className="flex-shrink-0 fnt-size-8">이메일</div>
                <div className="mg-t-6 d-flex align-items-center">
                  <div className="flex-fill">
                    <input name="email" type="text"
                      className="fnt-size-8"
                      style={{width: `${100}%`}}
                      onChange={handleInputChange}
                      placeholder="예:collabiz@sideproject.com"
                      autoFocus
                      ref={emailInputFocus}
                    />
                  </div>
                  <div className="flex-shrink-0">
                    <button className="btn btn-outline2-primary fw-500"
                      style={{width: `${96}px`, height: `${54}px`, marginLeft: `${10}px`}}
                    >
                      인증번호</button>
                  </div>
                </div>
                <div className="mt-1 fnt-size-7">{emailCheckMsg}</div>
                <div className="mg-t-6 d-flex align-items-center">
                  <div className="flex-fill">
                    <input name="emailVerificationCode" type="text"
                      className="fnt-size-8"
                      style={{width: `${100}%`}}
                      onChange={handleInputChange}
                      placeholder="인증번호 6자리를 입력해주세요."
                      ref={emailVerificationCodeInputFocus}
                    />
                  </div>
                  <div className="flex-shrink-0">
                    <button className="btn btn-outline2-primary fw-500"
                      style={{width: `${96}px`, height: `${54}px`, marginLeft: `${10}px`}}
                    >
                      확인</button>
                  </div>
                </div>
                <div className="mt-1 fnt-size-7">{emailVerificationCheckMsg}</div>


                <div className="mg-t-20">
                  <div className="flex-shrink-0 fnt-size-8">비밀번호</div>
                  <div className="mg-t-6">
                    <input name="pw" type="password"
                      className="fnt-size-8"
                      style={{width: `${100}%`}}
                      onChange={handleInputChange}
                      onKeyUp={checkPwLength}
                      placeholder="비밀번호를 입력해주세요."
                      ref={pwInputFocus}
                    />
                  </div>
                  <div className="mt-1 fnt-size-7 color-err">{pwCheckMsg}</div>
                </div>
                
                
                <div className="mg-t-10">
                  <div className="input-icon-container d-flex flex-row align-items-center overflow-hidden"
                    // style={{border: "solid 1px #dedede"}}
                  >
                    <input name="pw2" type="password"
                      className="fnt-size-8"
                      // style={{padding: `${0.5}em`, flex: "auto 1 1", width: `${100}%`, border: "none"}}
                      onChange={handleInputChange}
                      onKeyUp={checkPwLength}
                      placeholder="비밀번호를 한번 더 입력해주세요."
                      ref={pw2InputFocus}
                    />
                    <FontAwesomeIcon icon={fasEyeSlash} className="color-dedede" style={{padding: `${14}px`,}}/>
                  </div>
                  <div className="mt-1 fnt-size-7 color-err">{pw2CheckMsg}</div>
                </div>

                <div className="mg-t-20">
                  <div className="flex-shrink-0 fnt-size-8">회사명</div>
                  <div className="mg-t-6">
                    <input name="companyName" type="text"
                      className="fnt-size-8"
                      style={{width: `${100}%`}}
                      onChange={handleInputChange}
                      placeholder="회사명을 입력해주세요."
                      ref={companyNameInputFocus}
                    />
                  </div>
                </div>

                <div className="mg-t-20">
                  <div className="flex-shrink-0 fnt-size-8">사업자등록번호</div>
                  <div className="mg-t-6">
                    <input name="businessRegistNum" type="text"
                      className="fnt-size-8"
                      style={{width: `${100}%`}}
                      onChange={handleInputChange}
                      placeholder="사업자등록번호를 입력해주세요."
                      ref={coRegistNumInputFocus}
                    />
                  </div>
                  <div className="mt-1 fnt-size-7">{businessRegistNumCheckMsg}</div>
                </div>


                <div className="mg-t-40">
                  <div className="custom-checkbox">
                    <input className="flex-shrink-0" type="checkbox" name="all-terms" checked={serviceChecked && privacyChecked && overFourteen} onChange={handleAllCheckbox}/>
                    <label className="pd-l-12 fnt-size-10 fw-700" htmlFor="agreementAllTerms">모두 동의합니다.</label>
                  </div>
                  <hr style={{height: `${1}px`, opacity: 1}}/>
                  <div>
                    <input className="flex-shrink-0" type="checkbox" name="over-fourteen" checked={overFourteen} onChange={e => setOverFourteen(!overFourteen)}/>
                    <label className="pd-l-12 fnt-size-8" htmlFor="overFourteen">만 14세 이상입니다. <span className="color-err">(필수)</span></label>
                  </div>
                  <div className="mg-t-10">
                    <input className="flex-shrink-0" type="checkbox" name="service-terms" checked={serviceChecked} onChange={e => setServiceChecked(!serviceChecked)}/>
                    <label className="pd-l-12 fnt-size-8" htmlFor="agreementServiceTerms">
                      <button className="px-0 nt-size-9 color-primary btn-none"
                        // style={{textDecoration: "underline"}}
                        onClick={(e) => {
                          e.preventDefault();
                          window.open("/docs/terms-of-service", "이용약관")
                        }}
                      >
                        서비스 이용약관</button>에 동의합니다. <span className="color-err">(필수)</span></label>
                  </div>
                  <div className="mg-t-10 align-items-center">
                    <input className="flex-shrink-0" type="checkbox" name="privacy-terms" checked={privacyChecked} onChange={e => setPrivacyChecked(!privacyChecked)}/>
                    <label className="pd-l-12 fnt-size-8" htmlFor="agreementPrivacyTerms">
                    <button className="px-0 fnt-size-8 color-primary btn-none"
                      // style={{textDecoration: "underline"}}
                      onClick={(e) => {
                        e.preventDefault();
                        window.open("/docs/privacy-policy", "개인정보처리및방침")
                      }}
                    >
                      개인정보 수집/이용</button>에 동의합니다. <span className="color-err">(필수)</span></label>
                  </div>
                </div>

                <div className="" style={{bottom: `${38}%`, right: `${25}%`}}>
                  <button
                    type="button"
                    style={{borderRadius: `${3}px`}}
                    className={"w-100pct mg-t-30 py-3 btn btn-primary fnt-size-9 fw-700" + (!isSubmit ? " btn-primary" : " btn-ccc")}
                    onClick={!isSubmit ? submitRegister : null}
                  >
                    {!isSubmit ? '가입하기' : '요청 중...'}</button>
                </div>
              </div>
            </div>
          </div>
          <div className="pd-b-100"></div>
        </div>
      }
    </MainContainer>
  );
}

export default VRegister;