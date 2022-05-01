import React from 'react';
import { NavLink } from 'react-router-dom';
import { MainContainer } from "../blueprints";

function Footer() {
  return (
    <div className="w-100-full p-0" style={{backgroundColor: "#353535", height: `${243}px`, width: `${100}vw`, bottom: 0}}>
      <MainContainer>
        <div className="pd-t-40 pd-b-27">
          <nav>
            <ul className="nav d-flex align-items-center">
              {[
                {link: '/introduction'          , name: '콜라비즈 소개' },
                {link: '/guide'                 , name: '이용방법'     },
                {link: '/notice'                , name: '공지사항'     },
                {link: '/docs/terms-of-service' , name: '이용약관'     },
                {link: '/docs/privacy-policy'   , name: '개인정보처리방침'},
              ].map((v, i) => {
                return (
                  <React.Fragment key={i}>
                    { (i === 0) ? null : <li className="d-inline" style={{color: "#EBEBEB"}}>|</li>}
                    <li>
                      <NavLink
                        className="nav-link p-2 nt-size-7 fw-400"
                        style={{color: "#EBEBEB"}}
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
        <div className="pd-t-30 d-flex justify-content-between border-t-ffffff">
          <div className="fnt-size-6 fw-400" style={{color: "#EBEBEB"}}>
            Copyrightⓒ2022 CompanyName. All rights reserved.<br/>
            admin@abc.com 12345 Notion State Address 12-11  ·  0000-0000
          </div>
          <NavLink
            // not working
            // to={{pathname: "/", state: {scrollTo: [0, 0]}}}
            to={{pathname: "/"}}
            state={{scrollTo: [0, 0]}}
            className="nav-link px-2 d-flex justify-content-center align-items-center"
          >
            <img alt="logo_bw" src={`${process.env.PUBLIC_URL}/images/logo_bw.png`}/>
          </NavLink>
        </div>
      </MainContainer>
    </div>
  );
}

export default Footer;