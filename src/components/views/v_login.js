import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash as fasEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { ModalContext } from '../../context';

function VLogin(location) {
  const [isSubmit, setIsSubmit] = useState(false);
  const [userId, setUserId] = useState('');
  const [pw, setPw] = useState('');
  const [autoLogin, setAutoLogin] = useState(false);
  const { handleModal, closeModal } = React.useContext(ModalContext);


  const idInputFocus = useRef(null);
  const pwInputFocus = useRef(null);

  // useEffect(() => {
  //   inputFocus.current.focus();
  // }, []);

  function validate() {
    if (userId === '') {
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

  function submitLogin(e) {
    var validateResult = validate();
    if (validateResult !== true) {
      alert(validateResult);
      return;
    } else {
      setIsSubmit(true);
      try {
        
        // call post login api

        // login 성공 시
        alert('로그인되었습니다.');
        e.preventDefault();
        // 메인으로 이동하고 팝업 닫기
        window.opener.location.href="/"
        window.close();
      } catch (e) {
        alert('login error: ', e);
        console.log('login error', e);
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
      setPw(target.value);
  }

  function handleCheckboxChange() {
    setAutoLogin(!autoLogin)
  }

  return (
    <React.Fragment>
      <div className="d-flex pt-4 pe-4 justify-content-end">
        <button className="btn p-0 size-18" onClick={closeModal}>
          <img alt="logo" src={`${process.env.PUBLIC_URL}/images/close_btn.png`}/>
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
              <input name="userId" type="text"
                ref={idInputFocus}
                autoFocus
                className="w-100pct px-3 py-2 mt-2"
                value={userId}
                onChange={handleInputChange}
                placeholder="이메일을 입력해주세요."/>
            </div>
            
            
          </div>
          <div className="w-100pct mg-t-30 d-flex flex-column align-items-start">
            <div>비밀번호</div>
            <div className="input-icon-container d-flex flex-row align-items-center overflow-hidden">
              <input name="pw" type="password"
                ref={pwInputFocus}
                // className="w-100pct px-3 py-2 mt-2"
                value={pw}
                onChange={handleInputChange}
                placeholder="비밀번호를 입력해주세요."/>
              <FontAwesomeIcon icon={fasEyeSlash} className="color-dedede" style={{padding: `${14}px`,}}/>
            </div>
          </div>
          <div className="mg-t-20 fnt-size-7 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <input type="checkbox" checked={autoLogin} onChange={handleCheckboxChange}/>
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
    </React.Fragment>
  );
}

export default VLogin;