import React, { useState, useRef, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash as fasEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AppState } from '../../context';
import { ModalContext } from '../../context';

function VLogin() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [pw, setPw] = useState('');
  const [autoLogin, setAutoLogin] = useState(false);
  const { closeModal } = React.useContext(ModalContext);

  const appState = useContext(AppState);
  
  const idInputFocus = useRef(null);
  const pwInputFocus = useRef(null);

  function validate() {
    if (loginEmail === '') {
      idInputFocus.current.focus();
      return '아이디를 입력해 주세요.';
    }
    else if (pw === '') {
      pwInputFocus.current.focus();
      return '비밀번호를 입력해 주세요.';
    }
    else
      return true;
  }

  async function submitLogin(e) {
    var validateResult = validate();
    if (validateResult !== true) {
      alert(validateResult);
      return;
    }
    setIsSubmit(true);
    try {
      await appState.login(loginEmail, pw);
      // 로그인 성공 시 모달창 닫기
      alert('로그인되었습니다.');
      setIsSubmit(false);
      closeModal();
    } catch (e) {
      console.log('error: ', e);
      setIsSubmit(false);
      if (e?.response?.data?.message) {
        const msg = e.response.data.message;
        alert('login error: ' + msg);
      }
      else 
        alert('login error: ' + e);
    }
  }

  function handleCheckboxChange() {
    setAutoLogin(!autoLogin)
  }

  return (
    <div className="modal-login">
      <div className="d-flex pt-4 pe-4 justify-content-end">
        <button className="btn p-0 size-18" onClick={closeModal}>
          <img alt="close_btn" src={`${process.env.PUBLIC_URL}/images/close_btn.png`}/>
        </button>
      </div>
      <div className="my-4 mx-5 flex-column"
        // style={{minHeight: `${100}%`}}
      >
        <div className="m-2">
          
          <div className="fnt-size-17 fw-700">로그인</div>

          <div className="mg-t-80 d-flex flex-column align-items-center">
            <div className="w-100pct d-flex flex-column align-items-start" >
              <div>아이디</div>
              <input name="loginEmail" type="text"
                ref={idInputFocus}
                autoFocus
                className="w-100pct px-3 py-2 mt-2"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                style={{border: '1px solid #DEDEDE'}}
                placeholder="이메일을 입력해주세요."/>
            </div>
            
            
          </div>
          <div className="w-100pct mg-t-30 d-flex flex-column align-items-start">
            <div>비밀번호</div>
            <div className="w-100pct mt-2 input-icon-container d-flex flex-row align-items-center overflow-hidden">
              <input name="pw" type="password"
                ref={pwInputFocus}
                className="px-3 py-2"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                placeholder="비밀번호를 입력해주세요."/>
              <FontAwesomeIcon icon={fasEyeSlash} className="color-979797" style={{padding: `${14}px`,}}/>
            </div>
          </div>
          <div className="mg-t-20 fnt-size-7 d-flex align-items-center justify-content-between">
            <div className="d-flex custom-checkbox align-items-center">
              <input className="flex-shrink-0 outline-none shadow-none rounded-circle size-20" type="checkbox" checked={autoLogin} onChange={handleCheckboxChange}/>
              <div className="pd-l-6 align-items-center">
                <div>아이디 저장</div>
              </div>
            </div>
            <div className="color-979797">
              아이디 / 비밀번호 찾기
            </div>
          </div>
          <div className="mg-t-30" style={{bottom: `${38}%`, right: `${25}%`}}>
            <button
              type="button"
              className={"w-100pct mg-t-40 py-1 btn" + (!isSubmit ? " btn-primary" : " btn-ccc")}
              onClick={!isSubmit ? submitLogin : null}
            >
              <div className="pd-y-8">{!isSubmit ? '로그인' : '요청 중...'}</div>
            </button>
          </div>
          <div className="mg-t-20 d-flex justify-content-center">
            <NavLink
              onClick={() => { closeModal(); }}
              className="nav-link p-0"
              to={{pathname: "/register"}}
              state={{scrollTo: [0, 0]}}
            >
              <div className="fnt-size-7">계정이 없으신가요?</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VLogin;