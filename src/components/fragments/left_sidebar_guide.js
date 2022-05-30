import { NavLink, useLocation } from 'react-router-dom';

function LeftSidebarGuide() {
  const location = useLocation();

  return (
    <div className="bg-ffffff pd-t-100 ps-4"
      style={{width: `${230}px`, height: `${685}px`}}
    >
      <nav className= "flex-shrink-0 d-flex flex-column"
        style={{width: `${198}px`}}
      >
        {[
          {link: '/introduction'         , name: '콜라비즈 소개'   },
          {link: '/guide'                , name: '이용방법'       },
          {link: '/notice'               , name: '공지사항'       },
          {link: '/docs/terms-of-service', name: '이용약관'       },
          {link: '/docs/privacy-policy'  , name: '개인정보처리방침' },
          {link: '/qna'                  , name: '문의하기'       },
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
  );
}

export default LeftSidebarGuide;