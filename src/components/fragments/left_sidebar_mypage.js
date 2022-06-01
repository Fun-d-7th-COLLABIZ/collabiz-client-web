import { NavLink, useLocation } from 'react-router-dom';

function LeftSidebarMypage(props) {
  const location = useLocation();

  return (
    <div className="pd-t-80 d-flex flex-column " style={{height: `${100}%`, paddingBottom: "170px"}}>
      <div className="fw-700 fnt-size-14">마이페이지</div>
      <div className="bg-ffffff pd-t-40 ps-4 mg-t-20"
        style={{width: `${230}px`, height: `${857}px`}}
      >
        <div className="fw-700">COLLABORATION</div>
        <nav className= "flex-shrink-0 d-flex flex-column"
          style={{width: `${198}px`}}
        >
          {[
            {link: '/my-page/collabo/ongoing'     , name: '진행중인 콜라보' },
            {link: '/my-page/collabo/suggest'     , name: '제안한 콜라보'  },
            {link: '/my-page/collabo/apply'       , name: '지원중인 콜라보' },
            {link: '/my-page/collabo/post'        , name: '등록한 콜라보'  },
            {link: '/my-page/collabo/finish'      , name: '종료된 콜라보'  },
            {link: '/my-page/collabo/chat'        , name: '1:1 대화'     },
            {link: '/my-page/collabo/like'        , name: '내 관심 콜라보' },
            {link: '/my-page/collabo/like-member' , name: '내 관심 업체'  },
          ].map((v, i) => {
            return (
              <NavLink key={i}
                to={{pathname: v.link}}
                state={{scrollTo: [0, 0]}}
                className={"nav-link py-3" + (v.link === location.pathname ? " fw-700 color-primary"  : " color-979797")}
              >
                · {v.name}
              </NavLink>
            );
          })}
        </nav>

        <div className="mg-t-50 fw-700">ACCOUNT</div>
        <nav className= "flex-shrink-0 d-flex flex-column"
          style={{width: `${198}px`}}
        >
          {[
            {link: '/my-page/account/profile'   , name: '가입정보 수정'},
            {link: '/my-page/account/password'  , name: '비밀번호 변경'},
            {link: '/my-page/account/withdraw'  , name: '회원탈퇴'    },
            {link: '/'                          , name: '로그아웃'    },
          ].map((v, i) => {
            return (
              <NavLink key={i}
                to={{pathname: v.link}}
                state={{scrollTo: [0, 0]}}
                className={"nav-link py-3" + (v.link === location.pathname ? " fw-700 color-primary"  : " color-979797")}
              >
                · {v.name}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default LeftSidebarMypage;