import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AppState } from '../../context';
import { MainContainer } from '../blueprints';
import { constHeaderStickyPosition } from '../../constants';
import { ModalContext } from '../../context';
import { VLogin} from '../views';
import { DataAuth } from '../data';

function Header(props) {
  const { handleModal, closeModal } = React.useContext(ModalContext);
  const appState = useContext(AppState);

  return (
    <div className="w-100-full mx-auto" style={{height: `${constHeaderStickyPosition}px`}}>
      <MainContainer className="mx-auto">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex" style={{marginTop: "40px", marginBottom: "36px"}}>
            <NavLink to={{pathname: "/"}}
              className="nav-link p-0 d-flex justify-content-center align-items-center"
            >
              <img alt="logo" src={`${process.env.PUBLIC_URL}/images/logo.png`}/>
            </NavLink>
            <nav className="mg-l-56">
              <ul className="nav p-0 d-flex align-items-center">
                {[
                  {link: '/collaborations'     , name: '콜라보레이션'},
                  {link: '/guide'              , name: '이용방법'   },
                  {link: '/store'              , name: '스토어'    },
                ].map((v, i) => {
                  return (
                    <React.Fragment key={i}>
                      <li>
                        <NavLink
                          className="nav-link p-0 mg-l-50 color-525252 fnt-size-8 fw-500"
                          to={{pathname: v.link}}
                          state={v.link === '/collaborations' ? {scrollTo: [0, 0], page: "popular"} : {scrollTo: [0, 0]}}
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
          {(DataAuth.get().loginEmail !== '' && DataAuth.get().id !== void 0)
            ? ( <React.Fragment>
                  <div className="d-flex">
                    <div className="d-flex flex-column align-items-center">
                      <button className="btn p-0"
                      >
                        <img alt="noti_btn" src={`${process.env.PUBLIC_URL}/images/noti_btn.png`}
                          style={{width: "30px", height: "36px"}}
                        />
                        <div className="fw-700 fnt-size-6 color-primary">알림</div>
                      </button>
                    </div>
                    <div className="mg-l-35 d-flex flex-column align-items-center">
                      <button className="btn p-0"
                        onClick={() => { window.location.href='/my-page/collabo/ongoing'; }}
                      >
                        <img alt="mypage_btn" src={`${process.env.PUBLIC_URL}/images/mypage_btn.png`}
                          style={{width: "28px", height: "33px"}}
                        />
                        <div className="pt-1 fw-700 fnt-size-6 color-primary">마이페이지</div>
                      </button>
                    </div>
                    <div className="position-relative dropdown-header-profile mg-l-35 d-flex flex-column align-items-center">
                      <button className="btn p-0"
                      >
                        <img className="rounded-circle" alt="profile_btn" src={`${process.env.PUBLIC_URL}/images/test_image.png`}
                          style={{width: "33px", height: "33px"}}
                        />
                        <div className="pt-1 fw-700 fnt-size-6 color-primary">콜라비즈</div>
                      </button>

                      <div className="dropdown-content position-absolute bg-ffffff border"
                        style={{width: `${223}px`, left: "28px", top: "16px", zIndex: "999"}}
                      >
                        <div className="d-flex justify-content-between pt-3">
                          <div className="ps-4">
                            <button className="btn p-0"
                            >
                              <img className="rounded-circle" alt="profile_btn" src={`${process.env.PUBLIC_URL}/images/test_image.png`}
                                style={{width: "69px", height: "69px"}}
                              />
                              <div className="pt-1 fw-700 fnt-size-8" style={{color: "#717171"}}>콜라비즈</div>
                            </button>
                          </div>
                          {/* <div className="d-flex justify-content-end pe-4">
                            <button className="btn p-0 size-15" onClick={props.onClose}>
                              <img alt="close_btn" src={`${process.env.PUBLIC_URL}/images/close_btn.png`}/>
                            </button>
                          </div> */}
                        </div>
                        <ul className="pt-3 ms-2">
                          { [
                              {pathname: '/my-page/collabo/ongoing', name: '마이페이지'},
                              {pathname: '/'   , name: '최근 열람'},
                              {pathname: '/'   , name: '관심업체'},
                              {pathname: '/', name: '관심 표시한 콜라보'},
                              {pathname: '/', name: '로그아웃'},
                            ].map((link, i) => (
                              <li key={i} className="color-primary">
                                <Link
                                  className="nav-link pd-y-5 btn w-100 fw-500 text-start" 
                                  style={{whiteSpace: "pre-wrap", lineBreak: "anywhere", color: "#717171", fontSize: "14px"}}
                                  onClick={link.name === '로그아웃' ? appState.logout : null}
                                  to={{pathname: link.pathname, state: {scrollTo: [0, 0]}}}
                                >
                                  {link.name}
                                </Link>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              )
            : ( <React.Fragment>
                  <div className="d-flex justify-content-end">
                    <button
                      className="btn btn-outline1-primary fw-500"
                      style={{fontSize: `${15}px`}}
                      onClick={(e) => {
                        handleModal(<VLogin onClose={closeModal} style={{width: "504px", height: "648px"}}/>);
                      }}
                    >
                      Log in</button>
                    <button
                      className="mg-l-16 btn btn-back-yellow fw-500"
                      style={{fontSize: `${15}px`}}
                      onClick={(e) => {
                        window.location.href="/register"
                      }}
                    >Create Account</button>
                  </div>
                </React.Fragment>
              )
          }
        </div>
      </MainContainer>
      
    </div>
  );
}

export default Header;