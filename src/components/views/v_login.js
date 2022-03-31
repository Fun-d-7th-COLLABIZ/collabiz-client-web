import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function VLogin() {
  var [isSubmit, setIsSubmit] = useState(false);
  var [userId, setUserId] = useState('');
  var [pw, setPw] = useState('');
  var [autoLogin, setAutoLogin] = useState(false);
  
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
    <div className="m-5 flex-column" style={{minHeight: `${100}%`}}>
      <div className="m-2">
        <NavLink to={{pathname: "/"}}
          className="nav-link px-0 d-flex justify-content-center align-items-center"
        >
          <img alt="logo" src={`${process.env.PUBLIC_URL}/images/logo.png`}/>
        </NavLink>

        <div className="mg-t-80 d-flex flex-column align-items-center">
          <div className="w-100pct d-flex flex-column align-items-start" >
            <div>아이디</div>
            <input name="userId" type="text"
              ref={idInputFocus}
              autoFocus
              className="w-100pct px-3 py-2"
              value={userId}
              onChange={handleInputChange}
              placeholder="이메일을 입력해주세요"/>
          </div>
          <div className="w-100pct mg-t-10">
            <div>비밀번호</div>
            <input name="pw" type="password"
              ref={pwInputFocus}
              className="w-100pct px-3 py-2"
              value={pw}
              onChange={handleInputChange}
              placeholder="비밀번호를 입력해주세요"/>
          </div>
          
        </div>
        <div className="mg-t-20 d-flex align-items-center">
          <input type="checkbox" checked={autoLogin} onChange={handleCheckboxChange}/>
          <div className="pd-l-6 align-items-center">
            <div>자동로그인</div>
          </div>
        </div>
        <div className="mg-t-30" style={{bottom: `${38}%`, right: `${25}%`}}>
          <button
            type="button"
            className={"w-100pct mg-t-40 py-1 btn fnt-size-8 fw-700" + (!isSubmit ? " btn-primary" : " btn-ccc")}
            style={{borderRadius: `${25}px`}}
            onClick={!isSubmit ? submitLogin : null}
          >
            <div className="pd-y-8">{!isSubmit ? '로그인' : '요청 중...'}</div>
          </button>
        </div>
        <div className="mg-t-20 d-flex justify-content-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.opener.location.href="/signup"
              window.close();
            }}
            className="btn"
          >
            <div>계정이 없으신가요?</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VLogin;