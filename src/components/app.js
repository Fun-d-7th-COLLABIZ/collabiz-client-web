import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import API from '../api/api';
import { AppState, defaultAppState, ModalProvider } from '../context';
import { VCollaboRegistration, VCollaborations, VGuide, VIntroduction, VMain, VNotice, VPrivacyPolicy, VProfileRegistration, VQna, VRegister, VTermsOfService } from './views';
import { DataAuth } from './data';
import { WrapHeaderFooter, WrapScrollTo } from './wrappers';

function App() {
  const [auth, setAuth] = useState(defaultAppState);
  API.initAxios();
  // useEffect(() => {
  //   API.initAxios()
  // }, []);

  async function _login(loginEmail, pw) {
    var loginResult = await DataAuth.login(loginEmail, pw);

    setAuth({
      id: loginResult.id,
      loginEmail: loginResult.loginEmail
    });

    return loginResult;
  }

  function _logout() {
    DataAuth.logout();

    window.location.href = '/';
  }

  return (
    <Router>
      <AppState.Provider value={Object.assign({}, auth, {
        auth: auth,
        login: _login,
        logout: _logout,
      })}>
        <ModalProvider>
          <div style={{minHeight: `${105}vh`}}>
            <WrapScrollTo>
              <Routes>
                <Route element={<WrapHeaderFooter />}>
                  <Route path="/register"                    element={<VRegister       />} />
                  {/* <Route path="/login"                    element={<VLogin          />} /> */}
                  
                  {/* collaboration */}
                  <Route path="/collaborations"              element={<VCollaborations      />} />
                  <Route path="/collaborations/info"         element={<VRegister            />} />
                  <Route path="/collaborations/term"         element={<VRegister            />} />
                  <Route path="/collaborations/loc"          element={<VRegister            />} />
                  <Route path="/collaborations/keyword"      element={<VRegister            />} />
                  <Route path="/collaborations/post"         element={<VCollaboRegistration />} />
                  
                  {/* guide */}
                  <Route path="/introduction"                element={<VIntroduction        />} />
                  <Route path="/guide"                       element={<VGuide               />} />
                  <Route path="/notice"                      element={<VNotice              />} />
                  <Route path="/docs/terms-of-service"       element={<VTermsOfService      />} />
                  <Route path="/docs/privacy-policy"         element={<VPrivacyPolicy       />} />
                  <Route path="/qna"                         element={<VQna                 />} />

                  {/* <Route path="/store"                    element={<VQna                 />} /> */}
                  
                  {/* my-page */}
                  {/* <Route path="/my-page"                     element={<VOngoingCollabo      />} /> */}
                  <Route path="/my-page/collabo/ongoing"     element={<VOngoingCollabo      />} />
                  <Route path="/my-page/collabo/suggest"     element={<VSuggestedCollabo    />} />
                  <Route path="/my-page/collabo/apply"       element={<VApplyingCollabo     />} />
                  <Route path="/my-page/collabo/post"        element={<VPostedCollabo       />} />
                  <Route path="/my-page/collabo/finish"      element={<VFinishedCollabo     />} />
                  <Route path="/my-page/collabo/chat"        element={<VRegister            />} />
                  <Route path="/my-page/collabo/like"        element={<VRegister            />} />
                  <Route path="/my-page/collabo/like-member" element={<VRegister            />} />
                  <Route path="/my-page/account/profile"     element={<VMyProfile           />} />
                  <Route path="/my-page/account/password"    element={<VProfileRegistration />} />
                  <Route path="/my-page/account/withdraw"    element={<VRegister            />} />
                  {/* <Route path="/my-page/account/logout"      element={<VRegister            />} /> */}
                  
                  <Route path="/"                            element={<VMain                />} />
                  <Route path="*"                            element={<Navigate replace to="/" />} />
                </Route>
              </Routes>
              
              {/* { state?.background && ( */}
                {/* <Routes>
                  <Route path="/login" element={<VLogin />} />
                </Routes> */}
              {/* )} */}
            </WrapScrollTo>
          </div>
        </ModalProvider>
      </AppState.Provider>
    </Router>
  );
}

export default App;