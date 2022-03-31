import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppState } from '../../context';
import { MainContainer } from '../blueprints';
import { constHeaderStickyPositionForVItem } from '../../constants';

function Header() {
  
  return (
    <div className="header-pc mg-t-40 w-100-full" style={{height: `${constHeaderStickyPositionForVItem}px`}}>
      <MainContainer className="mx-auto">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <NavLink to={{pathname: "/"}}
              className="nav-link px-0 d-flex justify-content-center align-items-center"
            >
              <img alt="logo" src={`${process.env.PUBLIC_URL}/images/logo.png`}/>
            </NavLink>
            <nav className="mg-l-56">
              <ul className="nav d-flex align-items-center">
                {[
                  {link: '/collaboration'     , name: '콜라보레이션'},
                  {link: '/guide'             , name: '이용방법'   },
                  {link: '/store'             , name: '스토어'    },
                ].map((v, i) => {
                  return (
                    <React.Fragment key={i}>
                      <li>
                        <NavLink
                          className="nav-link px-0 mg-l-50 color-525252 fnt-size-8 fw-500"
                          to={{
                            pathname: v.link,
                            state: {scrollTo: [0, 0]}
                          }}
                        >
                          {v.name}
                        </NavLink>
                      </li>
                    </React.Fragment>
                  )
                })
                }
              </ul>
            </nav>
          </div>
          <AppState.Consumer>{appstate => (appstate?.auth?.loginId !== '' && appstate?.auth?.loginId !== void 0)
            ? ( <React.Fragment>
                  <div className="d-flex justify-content-end">
                    <button
                      className="btn nav-link fw-500"
                      onClick={appstate.logout}
                    >
                      로그아웃</button>
                  </div>
                </React.Fragment>
              )
            : (
              <React.Fragment>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-outline-primary fw-500"
                    style={{fontSize: `${15}px`}}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("/login", "LOGIN", "width=500, height=620")
                    }}
                  >
                    로그인</button>
                  <button
                    className="mg-l-16 btn btn-back-yellow fw-500"
                    style={{fontSize: `${15}px`}}
                    onClick={(e) => {
                      window.location.href="/signup"
                    }}
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   window.open("/signup", "REGISTER", "width=500, height=620")
                    // }}
                  >회원가입</button>
                </div>
              </React.Fragment>
            )
          }</AppState.Consumer>
        </div>
      </MainContainer>
      
    </div>
  );
}

export default Header;