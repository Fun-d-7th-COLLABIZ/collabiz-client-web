import React, { useEffect, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AppState } from '../../context';
import { MainContainer } from '../blueprints';
import { constHeaderStickyPosition } from '../../constants';
import { ModalContext } from '../../context';
import { VLogin} from '../views';

function Header(props) {
  // let location = useLocation();
  const { handleModal, closeModal } = React.useContext(ModalContext);
  useEffect(() => {});
  const appState = useContext(AppState);

  return (
    <div className="w-100-full mx-auto" style={{height: `${constHeaderStickyPosition}px`}}>
      <MainContainer className="mx-auto"
        // style={{height: `${100}px`}}
      >
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
                          state={{scrollTo: [0, 0]}}
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
          {isLoggedIn
            ? ( <React.Fragment>
                  <div className="d-flex justify-content-end">
                    <button
                      className="btn nav-link fw-500"
                      // onClick={}
                    >
                      로그아웃</button>
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